import db from "./db.js";


const getAllProjects = async () => {
    const query = `SELECT 
    p.title,
    o.name,
    p.description,
    p.location,
    TO_CHAR(p.date, 'Month DD, YYYY') AS date
FROM projects p
JOIN organization o
    ON p.organization_id = o.organization_id;`;

    const result = await db.query(query);

    return result.rows;
}

const getProjectsByOrganizationId = async (organizationId) => {
    const query = `
        SELECT
          project_id,
          organization_id,
          title,
          description,
          location,
          date
        FROM projects
        WHERE organization_id = $1
        ORDER BY date;
      `;

    const queryParams = [organizationId];
    const result = await db.query(query, queryParams);

    return result.rows;
};

const getProjectsByCategoryId = async (categoryId) => {
    const query = `
        SELECT
          p.project_id,
          p.organization_id,
          p.title,
          p.description,
          p.location,
          p.date
        FROM projects p
        JOIN project_category pc
            ON p.project_id = pc.project_id
        JOIN categories c
            ON pc.category_id = c.category_id
        WHERE c.category_id = $1;
      `;
    const queryParams = [categoryId];
    const result = await db.query(query, queryParams);
    return result.rows;
}

const getUpcomingProjects = async (number_of_projects) => {
    const query = `
        SELECT
        p.project_id,
        p.title,
        p.description,
        TO_CHAR(p.date, 'Month DD, YYYY') AS date,
        p.location,
        p.organization_id,
        o.name
        FROM projects p
        JOIN organization o ON p.organization_id = o.organization_id
        WHERE p.date >= CURRENT_DATE
        ORDER BY p.date ASC
        LIMIT $1;
    `;

    const queryParams = [number_of_projects];
    const result = await db.query(query, queryParams);

    return result.rows;
};


const getProjectDetails = async (projectId) => {
    const query = `
        SELECT
        p.project_id,
        p.title,
        p.description,
        TO_CHAR(p.date, 'Month DD, YYYY') AS date,
        p.location,
        p.organization_id,
        o.name
        FROM projects p
        JOIN organization o ON p.organization_id = o.organization_id
        WHERE p.project_id = $1;`;
    const queryParams = [projectId];
    const result = await db.query(query, queryParams);
    // Return the first row of the result set, or null if no rows are found
    return result.rows.length > 0 ? result.rows[0] : null;
};
export { getAllProjects, getProjectsByOrganizationId, getProjectsByCategoryId, getUpcomingProjects, getProjectDetails };
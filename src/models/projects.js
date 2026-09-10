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

export { getAllProjects };
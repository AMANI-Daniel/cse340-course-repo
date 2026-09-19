import db from "./db.js";


const getAllCategories = async () => {
    const query = `  SELECT
    category_id,
    category_name AS category
    FROM categories;`

    const result = await db.query(query);
    return result.rows;
}

const getCategoryDetails = async (categoryId) => {
    const query = `
        SELECT
            category_id,
            category_name AS category
        FROM categories
        WHERE category_id = $1;`;

    const queryParams = [categoryId];
    const result = await db.query(query, queryParams);
    return result.rows.length > 0 ? result.rows[0] : null; // Return the first row or null if not found
}

const getCategoriesByProjectID = async (projectId) => {
    const query = `
        SELECT
            c.category_id,
            c.category_name AS category
        FROM projects p
        JOIN project_category pc ON p.project_id = pc.project_id
        JOIN categories c ON pc.category_id = c.category_id
        WHERE p.project_id = $1;`;

    const queryParams = [projectId];
    const result = await db.query(query, queryParams);
    return result.rows;
}

export { getAllCategories, getCategoryDetails, getCategoriesByProjectID };
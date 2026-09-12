import db from "./db.js";


const getAllCategories = async () => { 
    const query = `  SELECT
    category_name AS category
    FROM categories;`

    const result = await db.query(query);
    return result.rows;
}

export { getAllCategories };
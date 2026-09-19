import { getAllCategories } from '../models/categories.js';
import { getCategoryDetails } from '../models/categories.js';   
import { getProjectsByCategoryId } from '../models/projects.js'; // Import the function to get projects by category ID

// Define any controller functions
const showCategoriesPage = async (req, res) => {
    const categories = await getAllCategories();
    const title = 'Service Categories';

    res.render('categories', { title, categories });
};

const showCategoryDetailsPage = async (req, res) => {
    const categoryId = req.params.id;
    const categoryDetails = await getCategoryDetails(categoryId);   

    // console.log('Category Details:', categoryDetails); // Log the category details for debugging


    const projects = await getProjectsByCategoryId(categoryId); // Fetch projects for the category

    const title = 'Category Details';

    res.render('category', { title, categoryDetails, projects });
};

// Export any controller functions
export { showCategoriesPage, showCategoryDetailsPage };
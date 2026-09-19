
// import { getAllProjects } from '../models/projects.js';
import { getUpcomingProjects, getProjectDetails } from '../models/projects.js';
import { getCategoriesByProjectID } from '../models/categories.js'; // Import the function to get category details by project ID

// Define any controller functions
const showProjectsPage = async (req, res) => {
    // const projects = await getAllProjects();
    const NUMBER_OF_UPCOMING_PROJECTS = 5;
    const upcomingProjects = await getUpcomingProjects(NUMBER_OF_UPCOMING_PROJECTS); // Fetch upcoming projects

    const title = 'Upcoming Service Projects';

    res.render('projects', { title, upcomingProjects });
};


const showProjectDetailsPage = async (req, res) => {
    const projectId = req.params.id;
    const projectDetails = await getProjectDetails(projectId);
    const categoryDetails = await getCategoriesByProjectID(projectId); // Fetch category details for the project

    console.log('Category Details:', categoryDetails); // Log the category details for debugging
    // console.log('Project Details:', projectDetails); 
    const title = 'Project Details';

    res.render('project', { title, projectDetails, categoryDetails });
};

// Export any controller functions
export { showProjectsPage, showProjectDetailsPage };
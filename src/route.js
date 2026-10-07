import express from 'express';

import { showHomePage } from './controllers/index.js';

import {
    showOrganizationsPage,
    showOrganizationDetailsPage,
    showNewOrganizationForm,
    processNewOrganizationForm,
    organizationValidation, 
    showEditOrganizationForm,
    processEditOrganizationForm
} from './controllers/organizations.js';


import {
    showProjectsPage,
    showProjectDetailsPage,
    showNewProjectForm,
    processNewProjectForm,
    projectValidation, 
    showEditProjectForm,
    processEditProjectForm
} from './controllers/projects.js';

import {
    showCategoriesPage,
    showCategoryDetailsPage,
    showAssignCategoriesForm,
    processAssignCategoriesForm,
    showNewCategoryForm,
    categoryValidation,
    processNewCategoryForm,
    showEditCategoryForm,
    processEditCategoryForm
} from './controllers/categories.js';
import { testErrorPage } from './controllers/errors.js';

import {
    showUserRegistrationForm,
    processUserRegistrationForm,
    showLoginForm,
    processLoginForm,
    processLogout,
    requireLogin,
    showDashboard,
    requireRole
} from './controllers/users.js';



const router = express.Router();

router.get('/', showHomePage);
router.get('/organizations', showOrganizationsPage);
router.get('/projects', showProjectsPage);
router.get('/categories', showCategoriesPage);

// error-handling routes
router.get('/test-error', testErrorPage);

// Route for organization details page
router.get('/organization/:id', showOrganizationDetailsPage);
// Route for project details page
router.get('/project/:id', showProjectDetailsPage);

//Route for categories details page
router.get('/category/:id', showCategoryDetailsPage);

// Route for new organization page
router.get('/new-organization',requireRole('admin'), showNewOrganizationForm);
// Route to handle new organization form submission
router.post('/new-organization',requireRole('admin'), organizationValidation, processNewOrganizationForm);

// Route to display the edit organization form
router.get('/edit-organization/:id',requireRole('admin'), showEditOrganizationForm);

// Route to handle the edit organization form submission
router.post('/edit-organization/:id',requireRole('admin'), organizationValidation, processEditOrganizationForm);

// Route for new project page
router.get('/new-project',requireRole('admin'), showNewProjectForm);

// Route to handle new project form submission
router.post('/new-project',requireRole('admin'), projectValidation, processNewProjectForm);

// Routes to handle the assign categories to project form
router.get('/assign-categories/:projectId',requireRole('admin'), showAssignCategoriesForm);
router.post('/assign-categories/:projectId',requireRole('admin'), processAssignCategoriesForm);

//Routes to handle updating a project

router.get('/edit-project/:projectId',requireRole('admin'), showEditProjectForm);
router.post('/edit-project/:projectId',requireRole('admin') , projectValidation, processEditProjectForm)

// Route to display category form
router.get('/new-category',requireRole('admin'), showNewCategoryForm);
router.post('/new-category',requireRole('admin'), categoryValidation, processNewCategoryForm);

//Routes to handle updating category
router.get('/edit-category/:id',requireRole('admin'), showEditCategoryForm);
router.post('/edit-category/:id',requireRole('admin') , categoryValidation, processEditCategoryForm);

// User registration routes
router.get('/register', showUserRegistrationForm);
router.post('/register', processUserRegistrationForm);

// User login routes
router.get('/login', showLoginForm);
router.post('/login', processLoginForm);
router.get('/logout', processLogout);


// Protected dashboard route
router.get('/dashboard', requireLogin, showDashboard);

export default router;
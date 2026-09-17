import { getAllOrganizations, getOrganizationDetails } from '../models/organizations.js';
import { getProjectsByOrganizationId } from '../models/projects.js';

// Define any controller functions
const showOrganizationsPage = async (req, res) => {
    const organizations = await getAllOrganizations();
    const title = 'Our Partner Organizations';

    res.render('organizations', { title, organizations });
};

const showOrganizationDetailsPage = async (req, res) => {
    const organizationId = req.params.id;
    const organizationDetails = await getOrganizationDetails(organizationId);

    console.log('Organization details: ', organizationDetails);

    const projects = await getProjectsByOrganizationId(organizationId);

    console.log('Project details:', projects );
    const title = 'Organization Details';

    //console.log('Organization Details:', organizationDetails);
    res.render('organization', { title, organizationDetails, projects });
};
// Export any controller functions
export { showOrganizationsPage, showOrganizationDetailsPage };
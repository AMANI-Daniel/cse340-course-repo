CREATE TABLE organization (
	organization_id SERIAL PRIMARY KEY,
	name VARCHAR(150) NOT NULL,
	description TEXT NOT NULL,
	contact_email VARCHAR(255) NOT NULL,
	logo_filename VARCHAR(255) NOT NULL
);

-- Inserting sample data into the organization table

INSERT INTO organization (name, description, contact_email, logo_filename)
VALUES
('BrightFuture Builders', 'A nonprofit focused on improving community infrastructure through sustainable construction projects.', 'info@brightfuturebuilders.org', 'brightfuture-logo.png'),
('GreenHarvest Growers', 'An urban farming collective promoting food sustainability and education in local neighborhoods.', 'contact@greenharvest.org', 'greenharvest-logo.png'),
('UnityServe Volunteers', 'A volunteer coordination group supporting local charities and service initiatives.', 'hello@unityserve.org', 'unityserve-logo.png');

-- Creating table for the projects

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    location VARCHAR(150),
    date DATE,
    FOREIGN KEY (organization_id) REFERENCES organization(organization_id)
);

-- Inserting sample data into the projects table

INSERT INTO projects
(organization_id, title, description, location, date)
VALUES

-- BrightFuture Builders
(1, 'Community Housing Project',
 'Building affordable and sustainable homes for low-income families.',
 'Kigali, Rwanda', '2026-10-15'),

(1, 'Green School Construction',
 'Building environmentally friendly classrooms using sustainable materials.',
 'Gasabo, Kigali', '2026-11-10'),

(1, 'Rural Bridge Project',
 'Constructing safe bridges to improve transportation for rural communities.',
 'Musanze, Rwanda', '2026-12-05'),

(1, 'Clean Water Facilities',
 'Building water collection and storage facilities for local communities.',
 'Nyagatare, Rwanda', '2027-01-20'),

(1, 'Community Road Improvement',
 'Improving roads connecting local neighborhoods and communities.',
 'Huye, Rwanda', '2027-02-12'),

(1, 'Youth Construction Training',
 'Training young people in sustainable construction and building skills.',
 'Kigali, Rwanda', '2027-03-01'),


-- GreenHarvest Growers
(2, 'Urban Vegetable Gardens',
 'Creating community vegetable gardens in urban neighborhoods.',
 'Kigali, Rwanda', '2026-10-20'),

(2, 'School Farming Program',
 'Teaching students how to grow vegetables and practice sustainable agriculture.',
 'Gasabo, Kigali', '2026-11-15'),

(2, 'Community Composting Project',
 'Creating community composting centers to reduce organic waste.',
 'Kicukiro, Kigali', '2026-12-10'),

(2, 'Rooftop Farming Initiative',
 'Developing rooftop farms to increase food production in urban areas.',
 'Nyarugenge, Kigali', '2027-01-05'),

(2, 'Farmers Training Program',
 'Training local farmers in sustainable farming techniques.',
 'Rwamagana, Rwanda', '2027-02-15'),

(2, 'Community Food Market',
 'Creating a local market where farmers can sell fresh produce.',
 'Kigali, Rwanda', '2027-03-01'),


-- UnityServe Volunteers
(3, 'Community Clean-Up',
 'Organizing volunteers to clean public spaces and improve neighborhoods.',
 'Kigali, Rwanda', '2026-10-10'),

(3, 'Food Donation Drive',
 'Collecting and distributing food packages to families in need.',
 'Gasabo, Kigali', '2026-11-05'),

(3, 'Elderly Support Program',
 'Providing assistance and companionship to elderly community members.',
 'Huye, Rwanda', '2026-12-15'),

(3, 'School Supplies Campaign',
 'Collecting school materials for children from disadvantaged families.',
 'Musanze, Rwanda', '2027-01-20'),

(3, 'Youth Mentorship Program',
 'Connecting young people with volunteers for mentorship and guidance.',
 'Kigali, Rwanda', '2027-02-10'),

(3, 'Community Health Outreach',
 'Supporting community health education and outreach activities.',
 'Rubavu, Rwanda', '2027-03-15');
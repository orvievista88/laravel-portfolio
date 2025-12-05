import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // default theme

const handleSubmit = async (e) => {
	e.preventDefault();
	setFormStatus(null);

	const formData = new FormData(e.target);
	const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

	try {
		const response = await fetch('/contact-message', {
			method: 'POST',
			headers: {
				'X-CSRF-TOKEN': csrfToken,
			},
			body: formData,
		});

		if (response.ok) {
			setFormStatus('success');
			e.target.reset();
		} else {
			setFormStatus('error');
		}
	} catch (error) {
		setFormStatus('error');
	}
};

const projectData = [
	// {
	// 	url: 'https://sample4.com',
	// 	image: '/images/sample4.jpg',
	// 	title: 'Project 4',
	// 	description: 'Description for project 4.',
	// 	features: ['Feature A', 'Feature B'],
	// 	modules: ['Module A', 'Module B'],
	// },
	{
		url: 'https://goat.com.au/',
		image: '/images/goat.jpg',
		title: 'goat.com.au',
		description: 'A youth-centric pop culture and lifestyle platform operated by the Australian Radio Network (ARN). The site delivers trending news, entertainment, and editorial content aimed at millennial and Gen Z audiences. I was responsible for designing and implementing the backend architecture to ensure content scalability, editorial workflow efficiency, and system stability.',
		features: [
			'Custom backend design tailored to editorial publishing workflows',
			'Scalable architecture for high traffic volumes',
			'Content tagging, categorization, and scheduling capabilities',
			'Optimized API layer for frontend content delivery',
			'Admin-level moderation and role-based access control',
		],
		modules: [
			'Article & Content Management',
			'User Engagement Analytics',
			'API Integration for front-facing components',
			'Tagging & Category System',
			'Editorial Workflow Tools',
		],
	},
	{
		url: 'https://dgtone.ph',
		image: '/images/dgt.jpg',
		title: 'DGT Dental Platform',
		description: 'A comprehensive dental clinic management platform built to streamline clinic operations and enhance business visibility. The system includes:',
		features: [
			'Customer-facing appointment booking website',
			'Role-based admin panel for efficient access control',
			'Accounting tools with revenue tracking and reporting',
			'Real-time scheduling and monitoring of appointments',
			'Dynamic charts for KPIs and business analytics',
			'Integrated HR module with complete payroll system',
			'Executive dashboard for high-level business insights',
		],
		modules: [
			'Dashboard', 'Appointments', 'Employees', 'Patients', 'Payments',
			'Inventories', 'HR', 'Branches', 'Services', 'Accounts and Purchasing', 'Executive Reporting',
		],
	},
	{
		url: 'Project Guardian',
		image: '/images/guardian.jpg',
		title: 'Project Guardian',
		description: 'Project Guardian is a network security monitoring platform designed to help businesses oversee the security of their Internet-connected services. It supports infrastructure such as IaaS, nbn® TC4, nbn® Enterprise Ethernet, and Failover LTE connections. I worked on integrating real-time scanning and reporting mechanisms for proactive vulnerability detection and incident response.',
		features: [
			'View public-facing open ports, including historical visibility',
			'Automated detection of known vulnerabilities (CVEs)',
			'Security rating dashboard for quick risk assessment',
			'Summary of notable and exposed services',
			'Proactive alerts for critical vulnerabilities (CVE rating 8+)',
		],
		modules: [
			'Port Information View',
			'Vulnerability Scanner',
			'Security Dashboard & Rating System',
			'Service Exposure Overview',
			'Proactive Notification System',
		],
	},
	// {
	// 	url: 'https://sample5.com',
	// 	image: '/images/sample5.jpg',
	// 	title: 'Project 5',
	// 	description: 'Description for project 5.',
	// 	features: ['Feature A', 'Feature B'],
	// 	modules: ['Module A', 'Module B'],
	// },
];

function MainContent({ visibleSection }) {
	const sectionStyle = (section) => ({
		display: visibleSection === section ? 'block' : 'none'
	});

	return (
		<div className="col-12 col-lg-9 d-flex align-items-center ps-lg-5 pe-lg-4 py-4 main-content-div">
			<div className="main-content-1 px-3 px-md-0 w-100">
				{/* Home Section */}
				<div style={sectionStyle('Home')}>
					<h1>Welcome to my portfolio!</h1>
					<p>
						Explore my work, skills, and background — or just ask Orbs, my AI chatbot, anything you'd like to know.
					</p>
				</div>

				{/* About Section */}
				<div id="About" style={sectionStyle('About')}>
					<h2>About Me</h2>
					<p>
						I am a dedicated PHP developer with hands-on experience in Yii2, Laravel, and CodeIgniter frameworks.
						My skill set includes SQL, HTML, CSS, JavaScript, and seamless integration of third-party APIs.
						I take pride in delivering efficient, scalable, and high-quality solutions tailored to meet client needs and business objectives.
					</p>
					<p>
						<b>Hobbies:</b><br />
						- Travelling<br />
						- Mountaineering<br />
						- Watching Movies<br />
						- Singing / Performing<br />
						- Playing mobile games and recently console games with my wife
					</p>
				</div>


				{/* Skills Section */}
				<div id="Skills" style={sectionStyle('Skills')}>
					<h2>Skills & Tech-stack</h2>
					<div className="row text-start">

						{/* Programming Languages */}
						<div className="col-12 col-md-6 col-lg-3 mt-3">
							<h4>Programming Languages</h4>
							<ul>
								<li>PHP (Yii2, Laravel, CodeIgniter, Native)</li>
								<li>JavaScript, Node.js, React.js, Vue, jQuery</li>
								<li>SQL (MySQL, MSSQL)</li>
								<li>Java</li>
								<li>VB.NET, VB 6.0</li>
								<li>C++, C</li>
							</ul>
						</div>

						{/* API & Git Integrations */}
						<div className="col-12 col-md-6 col-lg-3 mt-3">
							<h4>API & Git Integrations</h4>
							<ul>
								<li>Salesforce, Xero, Zendesk, Zabbix</li>
								<li>Symbio, Hubspot, NBN, Trustpilot</li>
								<li>Brevo, others</li>
								<li>Git, Bitbucket, TortoiseSVN</li>
							</ul>
						</div>

						{/* Web & Automation Tools */}
						<div className="col-12 col-md-6 col-lg-3 mt-3">
							<h4>Web & Automation Tools</h4>
							<ul>
								<li>HTML, CSS, Bootstrap</li>
								<li>Selenium for automation</li>
							</ul>
						</div>

						{/* Technical + Creative */}
						<div className="col-12 col-md-6 col-lg-3 mt-3">
							<h4>Technical Support & Creative Tools</h4>
							<ul>
								<li>PC Assembly & Disassembly</li>
								<li>Reformatting & Basic Networking</li>
								<li>Hardware Troubleshooting</li>
								<li>Adobe Photoshop, Sony Vegas, GIMP</li>
								<li>Microsoft Office Suite</li>
							</ul>
						</div>

					</div>
				</div>


				{/* Projects Section */}
				<div
					id="Projects"
					style={{
						...sectionStyle('Projects'),
						maxHeight: '70vh',         // Limit to viewport height
						overflowY: 'auto',            // Enable vertical scroll
						padding: '1rem 2rem'          // Optional padding
					}}
				>
					<h2>Notable Projects</h2>
					<p>A showcase of applications I’ve developed, led, and actively maintain.</p>
					<div style={{ position: 'relative' }}>
						<Splide
							options={{
								type: 'loop',
								perPage: 1,
								arrows: true,
								pagination: true,
								gap: '1rem',
								height: 'auto',
							}}
						>
							{projectData.map((project, index) => (
								<SplideSlide key={index}>
									<div className={`row mt-4 main-project-content-${index + 1}`}>
										{/* Left Column */}
										<div className="col-12 col-lg-5 mb-3">
											<div
												style={{
													borderRadius: '8px',
													height: '100%',
													minHeight: '200px',
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'flex-start',
													justifyContent: 'flex-start',
													color: '#fff',
													paddingRight: '1rem',
												}}
											>
												<p style={{ marginBottom: '0.75rem' }}>
													<strong>
														<a
															href={project.url}
															target="_blank"
															rel="noopener noreferrer"
															style={{ color: '#fff', textDecoration: 'underline' }}
														>
															{project.url}
														</a>
													</strong>
												</p>

												<div style={{ fontSize: '12px' }}>
													<p style={{ marginBottom: '0.75rem' }}>{project.description}</p>

													<ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
														{project.features.map((feat, i) => (
															<li key={i} style={{ marginBottom: '0.5rem' }}>{feat}</li>
														))}
													</ul>

													<p style={{ margin: '1rem 0 0.5rem' }}>Key modules available:</p>

													<ul style={{ paddingLeft: '1.25rem', margin: 0, textAlign: 'left' }}>
														{project.modules.map((mod, i) => (
															<li key={i}>{mod}</li>
														))}
													</ul>
												</div>
											</div>
										</div>

										{/* Right Column */}
										<div className="col-12 col-lg-7">
											<img
												src={project.image}
												alt={`${project.title} Preview`}
												style={{
													maxWidth: '100%',
													maxHeight: '60vh',
													borderRadius: '8px',
													marginTop: '1rem',
												}}
											/>
										</div>
									</div>
								</SplideSlide>
							))}
						</Splide>
					</div>


				</div>


				{/* Experience Section */}
				<div id="Experiences" style={sectionStyle('Experiences')}>
					<h2 className="mb-4">Work Experiences</h2>

					<div class="work-experiences"
						style={{
							maxHeight: '70vh',
							overflowY: 'auto',
							paddingRight: '10px'
						}}
					>
						{[
							// ... (Jobs array unchanged)
							{
								role: 'Full Stack PHP Developer',
								company: 'Sonicelectronix, Kentucky, USA',
								duration: '2024-09 – Present',
								highlights: [
									'Developed and enhanced features for both the public website and internal admin panel',
									'Implemented and maintained API integrations from third-party services',
									'Integrated Google Analytics, Authentication, and AI tools',
									'Designed and optimized responsive landing pages for mobile and desktop with UI/UX improvements',
									'Managed and updated Shopify content and templates based on branding needs',
									'Added new functionalities and maintained existing Shopify templates'
								]
							},
							{
								role: 'Senior PHP Developer (Part Time)',
								company: 'DGTONE Dental Clinic, Quezon City, Philippines',
								duration: '2022-10 – Present',
								highlights: [
									'Designed and built a complete end-to-end platform for operations',
									'Developed a customer-facing booking system and service access website',
									'Created a role-based admin dashboard with revenue and KPI tracking',
									'Built financial modules with real-time monitoring and executive-level reporting',
									'Integrated HR and payroll system with performance dashboards'
								]
							},
							{
								role: 'Mid-Level PHP Developer',
								company: 'Hosted Network, NSW, Australia',
								duration: '2018-10 – 2024-08',
								highlights: [
									'Led the development of a finance reporting system for business-critical data',
									'Planned and implemented internal system enhancements and new features',
									'Integrated third-party APIs: Salesforce, Xero, Zendesk, Zabbix, Symbio',
									'Initiated and led network vulnerability assessments for cybersecurity improvement',
									'Automated manual operations to increase efficiency across departments'
								]
							},
							{
								role: 'Mid-Level PHP Developer',
								company: 'Dottystyle Creative, Makati City, Philippines',
								duration: '2017-09 – 2018-03',
								highlights: [
									'Structured backend data models to enhance frontend performance',
									'Defined and implemented operational workflows tailored to startup needs',
									'Maintained WordPress websites with SEO, content, and performance optimizations',
									'Managed projects from scoping to deployment ensuring timely delivery'
								]
							},
							{
								role: 'Laravel/SQL Developer (Project Based)',
								company: 'Ziosoft Inc.',
								duration: '2017-09 – 2018-03',
								highlights: [
									'Extracted and processed PBX backend data to support operational needs',
									'Generated customized summary reports based on client requirements',
									'Designed and implemented UI workflows integrated with the PBX system'
								]
							},
							{
								role: 'PHP-CodeIgniter/SQL Developer',
								company: 'Londa Online Technologies',
								duration: '2015-11 – 2016-04',
								highlights: [
									'Developed a multi-currency trading platform from the ground up',
									'Managed the full software development lifecycle of web applications'
								]
							},
							{
								role: 'Analyst/Programmer',
								company: 'Rustans MKTG Corp, Makati City',
								duration: '2015-06 – 2016-04',
								highlights: [
									'Created advanced SQL-based reports for finance and operations',
									'Designed and implemented internal tools supporting finance workflows',
									'Worked closely with department heads to resolve reporting challenges'
								]
							},
							{
								role: 'System Analyst & IT Instructor',
								company: 'TCU, CASAP, Fisher Valley College',
								duration: '2014-06 – 2015-03',
								highlights: [
									'Developed the Enrollment System under the MIS Department',
									'Generated operational reports and statistical data for university needs',
									'Taught programming, networking, and various IT courses to college students'
								]
							}
						].map((job, index) => (
							<div
								key={index}
								className="mb-4 p-3 bg-dark text-white border rounded w-100"
								style={{
									width: '100%'
								}}
							>
								<h5 className="mb-1">{job.role}</h5>
								<p className="mb-1"><strong>{job.company}</strong></p>
								<p className="mb-2"><em>{job.duration}</em></p>
								<ul className="mb-0 ps-3">
									{job.highlights.map((item, idx) => (
										<li key={idx}>{item}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Services Section */}
				<div id="Services" style={sectionStyle('Services')}>
					<h2>Services Offered</h2>
					<div className="row text-start">

						{/* Web Development from Scratch */}
						<div className="col-12 col-md-6 col-lg-4 mt-3">
							<h4>Web Development from Scratch</h4>
							<p>
								I design and develop full-stack web applications tailored to client needs—from wireframes and database design to deployment and optimization. Clean code, modular structure, and maintainability are always prioritized.
							</p>
						</div>

						{/* Bug Fixing & Optimization */}
						<div className="col-12 col-md-6 col-lg-4 mt-3">
							<h4>Bug Fixing & Optimization</h4>
							<p>
								Resolve critical bugs, performance bottlenecks, or integration issues across frontend, backend, or database layers. I ensure your system is stable, secure, and efficient.
							</p>
						</div>

						{/* Database Modeling */}
						<div className="col-12 col-md-6 col-lg-4 mt-3">
							<h4>Database Modeling</h4>
							<p>
								Design normalized and scalable database structures tailored to project requirements. My experience includes MySQL and MSSQL with ER diagrams, relationships, indexing, and query optimization.
							</p>
						</div>

						{/* Project Scoping */}
						<div className="col-12 col-md-6 col-lg-4 mt-3">
							<h4>Project Scoping for Others</h4>
							<p>
								I assist teams in defining clear and achievable scopes, setting deliverables, timelines, and tech recommendations to ensure a solid project foundation.
							</p>
						</div>

						{/* API Integration */}
						<div className="col-12 col-md-6 col-lg-4 mt-3">
							<h4>API Integration & Analytics Setup</h4>
							<p>
								I specialize in integrating third-party APIs (e.g., Salesforce, Xero, Zendesk, Trustpilot) into web systems with secure authentication and error handling. I also set up Google Analytics 4 (GA4) via Google Tag Manager (GTM) for clean, scalable analytics tracking—ensuring data accuracy without modifying site code for future events or tracking needs.
							</p>
						</div>

						{/* Report Generation */}
						<div className="col-12 col-md-6 col-lg-4 mt-3">
							<h4>Report Generation</h4>
							<p>
								I develop custom report generation features that transform raw data into meaningful insights. Whether generating PDF, Excel, or in-app reports, I ensure the outputs are well-structured, easy to interpret, and aligned with business goals—supporting decision-making through real-time or scheduled data exports.
							</p>
						</div>

						{/* Custom Work */}
						<div className="col-12 col-md-6 col-lg-4 mt-3">
							<h4>Have Something Else in Mind?</h4>
							<p>
								Feel free to reach out if you need a developer who can adapt to unique requirements or contribute to an existing project. I’m open to custom solutions, integrations, or consulting.
							</p>
						</div>

					</div>
				</div>



				{/* Contact Section */}
				<div id="Contact" style={sectionStyle('Contact')}>

					<div className="row">
						{/* Left Column - Contact Info & Resume */}
						<div className="col-12 col-lg-12 offset-lg-1 mb-4">
							<h2>Contact</h2>
							<p>
								Send me a mail:{' '}
								<a href="mailto:orvie.vista88@gmail.com">orvie.vista88@gmail.com</a>
							</p>
							<p>Socials</p>
							<div style={{ fontSize: '2rem', marginTop: '0.5rem' }}>
								<a
									href="https://www.linkedin.com/in/orvie-vista-751b66144/"
									target="_blank"
									rel="noopener noreferrer"
									style={{ marginRight: '15px', color: '#0e76a8' }}
								>
									<i className="fab fa-linkedin"></i>
								</a>
								<a
									href="https://www.facebook.com/orvievista/"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: '#1877f2' }}
								>
									<i className="fab fa-facebook"></i>
								</a>
							</div>

							<div className="mt-3">
								<p>You can view my online CV on the Experiences tab or download the PDF version below.</p>
								<a
									href="/storage/pdfs/OrvieVista__.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary mt-2"
								>
									Download Resume (PDF)
								</a>
							</div>
						</div>

					</div>
				</div>


			</div>
		</div>
	);
}

export default MainContent;

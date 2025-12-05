const orvieCV = {
	name: 'Orvie Vista',
	title: 'Senior PHP Developer',
	location: 'Taguig City, Philippines',
	email: 'Orvie.vista88@gmail.com',
	phone: '09760119998',
	experienceYears: 8,
	frameworks: ['Laravel', 'Yii2', 'CodeIgniter', 'React.js', 'Vue.js', 'Node.js'],
	languages: ['PHP', 'JavaScript', 'SQL', 'VB.NET', 'C++', 'Java'],
	frontEnd: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Vue', 'React.js'],
	backend: ['Laravel', 'Yii2', 'CodeIgniter', 'Node.js'],
	integrations: [
	  'Salesforce', 'Xero', 'Zendesk', 'Zabbix', 'Symbio',
	  'Hubspot', 'NBN', 'Trustpilot', 'Brevo', 'Google APIs'
	],
	tools: [
	  'Git', 'Bitbucket', 'Tortoise SVN', 'Adobe Photoshop', 'Sony Vegas',
	  'Gimp', 'MS Office', 'Selenium'
	],
	platforms: ['Shopify', 'WordPress'],
	education: [
	  'BS Information Technology - The Fisher Valley College',
	  'Diploma in IT - STI College'
	],
	hobbies: ['Travelling', 'Mountaineering', 'Watching Movies', 'Singing'],
	jobs: [
	  {
		title: 'Full Stack PHP Developer',
		company: 'Sonicelectronix, Kentucky, USA',
		date: '2024-09 – Present',
		details: [
		  'Enhanced public and admin panel features.',
		  'Integrated Google Analytics, Auth, and AI tools.',
		  'Designed mobile/desktop landing pages with improved UI/UX.',
		  'Translating Figma Design into web interface',
		  'Managed Shopify templates and content.'
		]
	  },
	  {
		title: 'Senior PHP Developer (Part Time)',
		company: 'DGTONE Dental Clinic, Quezon City',
		date: '2022-10 – Present',
		details: [
		  'Built booking system and admin panel with RBAC.',
		  'Integrated HR, payroll, revenue tracking, and KPI dashboards.',
		  'Real-time monitoring and financial reporting tools.'
		]
	  },
	  {
		title: 'Mid Level PHP Developer',
		company: 'Hosted Network, NSW, Australia',
		date: '2018-10 – 2024-08',
		details: [
		  'Led financial reporting system.',
		  'Integrated Salesforce, Xero, Zendesk, Zabbix, Symbio.',
		  'Conducted network vulnerability audits and automation.'
		]
	  },
	  {
		title: 'Mid Level PHP Developer',
		company: 'Dottystyle Creative, Makati City',
		date: '2017-09 – 2018-03',
		details: [
		  'Structured data models for frontend performance.',
		  'Defined startup-friendly operational processes.',
		  'Maintained SEO-ready WordPress sites.'
		]
	  },
	  {
		title: 'Laravel/SQL Developer (Project Based)',
		company: 'Ziosoft Inc.',
		date: '2017-09 – 2018-03',
		details: [
		  'Extracted/manipulated PBX data for summary reports.',
		  'Created UI and workflows integrated with PBX system.'
		]
	  },
	  {
		title: 'PHP-CodeIgniter/SQL Developer',
		company: 'Londa Online Technologies',
		date: '2015-11 – 2016-04',
		details: [
		  'Built multi-currency trading platform from scratch.',
		  'Handled full software lifecycle.'
		]
	  },
	  {
		title: 'Analyst/Programmer',
		company: 'Rustans MKTG Corp, Makati City',
		date: '2015-06 – 2016-04',
		details: [
		  'Generated financial reports using complex SQL.',
		  'Built internal features for finance workflows.'
		]
	  },
	  {
		title: 'System Analyst & IT Instructor',
		company: 'Taguig City University, CASOP, Fisher Valley College',
		date: '2014-06 – 2015-03',
		details: [
		  'Developed Enrollment System (MIS Dept).',
		  'Taught programming, networking, IT courses.'
		]
	  }
	],
	getBotReply: (msg) => {
	  msg = msg.toLowerCase();
	  if (msg.includes('name')) {
		return `I'm ${orvieCV.name}, a ${orvieCV.title}.`;
	  }
	  if (msg.includes('email') || msg.includes('contact')) {
		return `You can reach me at ${orvieCV.email} or ${orvieCV.phone}.`;
	  }
	  if (msg.includes('location') || msg.includes('based')) {
		return `I'm based in ${orvieCV.location}.`;
	  }
	  if (msg.includes('experience')) {
		return `${orvieCV.name} has over ${orvieCV.experienceYears} years of experience as a PHP Developer using ${orvieCV.frameworks.join(', ')}.`;
	  }
	  if (msg.includes('skills') || msg.includes('languages') || msg.includes('frameworks')) {
		return `Here are my skills:\n- Languages: ${orvieCV.languages.join(', ')}\n- Frontend: ${orvieCV.frontEnd.join(', ')}\n- Backend: ${orvieCV.backend.join(', ')}\n- Tools: ${orvieCV.tools.join(', ')}`;
	  }
	  if (msg.includes('tools') || msg.includes('integration')) {
		return `I’ve integrated with: ${orvieCV.integrations.join(', ')}.\nAlso experienced with: ${orvieCV.tools.join(', ')}.`;
	  }
	  if (msg.includes('job') || msg.includes('work') || msg.includes('company')) {
		return orvieCV.jobs.map(job => `• ${job.title} at ${job.company} (${job.date})`).join('\n');
	  }
	  if (msg.includes('hobby') || msg.includes('interests')) {
		return `My hobbies include: ${orvieCV.hobbies.join(', ')}`;
	  }
	  if (msg.includes('school') || msg.includes('education')) {
		return `My education background:\n- ${orvieCV.education.join('\n- ')}`;
	  }
	  return `Sorry, I didn’t understand that. Try asking about experience, skills, tools, education, or contact info.`;
	}
  };
  
  export default orvieCV;
  
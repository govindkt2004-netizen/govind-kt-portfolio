import {
  Project,
  EducationItem,
  InternshipItem,
  SkillCategory,
  AchievementItem,
  CertificationItem,
} from '../types';

export const PERSONAL_DETAILS = {
  name: 'Govinda K T',
  fullName: 'Govinda K T',
  firstName: 'Govinda',
  lastName: 'K T',
  fatherName: 'Thippa Naik',
  address: 'S/O Thippa Naik, J H Patel Badavane, Malligere Road, Channagiri, Channagiri (T), Davanagere (D), 577213',
  titles: [
    'Software Developer',
    'Full-Stack Developer',
    'AI & Machine Learning Enthusiast',
    'Information Science & Engineering Student',
  ],
  tagline: 'Building practical digital solutions through code, creativity and continuous learning.',
  email: 'govindkt2004@gmail.com',
  phone: '+91 9591455853',
  github: 'https://github.com/govindkt2004-netizen',
  linkedin: 'https://www.linkedin.com/in/govinda-k-t-5719b82a6/',
  dob: '29th July 2004',
  nationality: 'Indian',
  gender: 'Male',
  location: 'Channagiri, Karnataka, India',
  city: 'Channagiri',
  state: 'Karnataka',
  country: 'India',
  college: 'RYMEC Ballari (VTU)',
  status: 'Open for Software Development & AI/ML Opportunities',
};

export const ABOUT_TEXT =
  'I am an Information Science and Engineering student with a strong interest in software development, full-stack web development, artificial intelligence and machine learning. I enjoy learning new technologies, developing practical projects and creating useful solutions to real-world problems.';

export const CAREER_OBJECTIVE =
  'To secure a challenging position in a reputed organization where I can use my technical knowledge, analytical skills, and creativity. I want to gain practical experience, improve my professional skills, and learn new technologies. I am willing to take on new challenges and work effectively as part of a team. I want to build a successful career through hard work, dedication, continuous learning, and innovation. I also aim to contribute to the growth of the organization while developing my knowledge and skills in a professional environment.';

export const PRACTICAL_EXPOSURE = [
  'Programming',
  'Web development',
  'Machine learning',
  'Computer vision',
  'Databases',
  'APIs',
  'Git/GitHub',
  'Project development',
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B E',
    field: 'Information Science and Engineering',
    institution: 'RYMEC',
    university: 'VTU',
    score: '7.68',
    scoreType: 'CGPA',
    year: '2027* (Pursuing)',
    status: 'Pursuing',
    location: 'Ballari, Karnataka',
    details: [
      'Comprehensive coursework in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and AI.',
      'Active participant in technical conventions, coding events, and project exhibitions representing the ISE department.',
    ],
  },
  {
    degree: 'PUC',
    field: 'Science Stream (PCMB)',
    institution: 'JEPUC',
    university: 'DOPUE',
    score: '69.66%',
    scoreType: 'Percentage',
    year: '2022',
    status: 'Completed',
    location: 'Karnataka, India',
    details: [
      'Developed foundational skills in analytical mathematics, physical sciences, and logical problem solving.',
    ],
  },
  {
    degree: 'SSLC',
    institution: 'STJEHS',
    university: 'KSEEB',
    score: '87.36%',
    scoreType: 'Percentage',
    year: '2020',
    status: 'Completed',
    location: 'Karnataka, India',
    details: [
      'Graduated with distinction and strong academic excellence across science and mathematics disciplines.',
    ],
  },
];

export const INTERNSHIP_DATA: InternshipItem = {
  company: 'Thiranex',
  role: 'Full Stack Development Intern',
  duration: 'August 2026 – September 2026',
  description:
    'Working on practical full-stack development projects under industry mentorship and gaining hands-on experience in frontend development, backend development, APIs, databases and project-based software development.',
  focusAreas: [
    'Frontend Interface Architecture',
    'RESTful API Engineering & Integration',
    'Database Modelling & Management',
    'Industry-Standard Code Practices & Mentorship',
  ],
  technologies: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Databases', 'Git'],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    categoryKey: 'languages',
    skills: [
      { name: 'Python', levelDescription: 'Core scripting, AI algorithms, CV & automation', highlight: true },
      { name: 'C', levelDescription: 'Procedural programming & low-level memory handling' },
      { name: 'C++', levelDescription: 'Object-oriented programming & data structures' },
      { name: 'JavaScript', levelDescription: 'Modern ES6+, DOM manipulation & async routines', highlight: true },
      { name: 'HTML', levelDescription: 'Semantic structure & modern web standards' },
      { name: 'CSS', levelDescription: 'Responsive layouts, Flexbox, Grid & animations' },
    ],
  },
  {
    title: 'Web Development',
    categoryKey: 'web',
    skills: [
      { name: 'Frontend Development', levelDescription: 'Interactive UI components, state flow & SPA design', highlight: true },
      { name: 'Backend Development', levelDescription: 'Node.js / Express microservices & business logic' },
      { name: 'Full-Stack Development', levelDescription: 'End-to-end client-server architecture integration', highlight: true },
      { name: 'REST APIs', levelDescription: 'Secure endpoints, JSON payload handling & routing' },
    ],
  },
  {
    title: 'Machine Learning / AI',
    categoryKey: 'ai',
    skills: [
      { name: 'Machine Learning', levelDescription: 'Predictive modeling, classification & data processing', highlight: true },
      { name: 'Computer Vision', levelDescription: 'Real-time spatial perception & visual feature extraction', highlight: true },
      { name: 'YOLO', levelDescription: 'High-speed object detection & bounding box predictions', highlight: true },
      { name: 'OpenCV', levelDescription: 'Image filtering, camera stream pipelines & contours' },
      { name: 'Image Processing', levelDescription: 'Morphological transformations & feature detection' },
    ],
  },
  {
    title: 'Databases',
    categoryKey: 'database',
    skills: [
      { name: 'MongoDB', levelDescription: 'NoSQL document schemas, indexing & queries', highlight: true },
      { name: 'SQL', levelDescription: 'Relational queries, joins, constraints & table design' },
      { name: 'Database Management', levelDescription: 'CRUD optimization, integrity & data security' },
    ],
  },
  {
    title: 'Tools & Environments',
    categoryKey: 'tools',
    skills: [
      { name: 'Git', levelDescription: 'Version control, branch workflows & merge tracking' },
      { name: 'GitHub', levelDescription: 'Repository management & collaborative workflows' },
      { name: 'VS Code', levelDescription: 'Primary IDE configuration, extensions & debugging' },
      { name: 'MS Office', levelDescription: 'Technical documentation & analytical presentation' },
      { name: 'Windows', levelDescription: 'Primary operating system environment & CLI tooling' },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'human-detection',
    title: 'Human Detection & Counting System',
    tagline: 'Real-time vision-based human identification and counting pipeline',
    category: 'ai',
    technologies: ['Python', 'YOLO', 'OpenCV', 'Computer Vision'],
    description:
      'Developed a human detection and counting system using Python, YOLO and OpenCV. Implemented image/camera-based human detection with bounding boxes and person counting while applying computer vision and object detection techniques.',
    keyFeatures: [
      'Real-time live video and image stream parsing',
      'YOLO deep-learning object identification model',
      'Accurate bounding-box localization & tracking',
      'Bidirectional count tally for crowd monitoring',
      'Optimized frame inference performance',
    ],
    githubUrl: 'https://github.com/govindkt2004-netizen',
    featured: true,
    accentColor: '#06b6d4',
    iconName: 'Camera',
  },
  {
    id: 'smart-agriculture',
    title: 'Smart Agriculture System',
    tagline: 'AI-driven crop recommendation & leaf pathology diagnostics',
    category: 'ai',
    technologies: ['Python', 'Machine Learning', 'Image Processing'],
    description:
      'Developed a smart agriculture system using Python, machine learning and image processing. Implemented crop recommendation and plant disease detection using leaf images to provide useful agricultural insights for better farming decisions.',
    keyFeatures: [
      'Crop recommendation based on soil & climate attributes',
      'Leaf image diagnostic classifier for early disease detection',
      'Image preprocessing & contour analysis pipeline',
      'Actionable remedies and farming treatment guidance',
      'Interactive dashboard for farmer accessibility',
    ],
    githubUrl: 'https://github.com/govindkt2004-netizen',
    featured: true,
    accentColor: '#10b981',
    iconName: 'Sprout',
  },
  {
    id: 'vtu-seating-system',
    title: 'VTU Exam Seating Allocation System',
    tagline: 'Automated multi-branch student seat allocation engine for VTU colleges',
    category: 'fullstack',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    description:
      'A web-based system designed to generate and manage examination seating arrangements for engineering students across multiple branches.',
    keyFeatures: [
      'Admin authentication with secure JWT tokens',
      'Student, Branch, Subject & Room management modules',
      'Invigilator roster & duty allocation automation',
      'Examination configuration & seating matrix generator',
      'Automatic anti-malpractice branch alternation algorithm',
      'Data import and formatted export functionality',
    ],
    supportedBranches: ['CSE', 'ISE', 'ECE', 'EEE', 'MECH', 'CIVIL'],
    githubUrl: 'https://github.com/govindkt2004-netizen',
    featured: true,
    accentColor: '#8b5cf6',
    iconName: 'GraduationCap',
  },
  {
    id: 'shopsphere',
    title: 'ShopSphere E-Commerce Platform',
    tagline: 'Full-scale web application with authentication, catalog & order management',
    category: 'fullstack',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Google Authentication',
      'OTP Authentication',
    ],
    description:
      'A robust full-stack e-commerce application equipped with authentication, inventory cataloging, dynamic cart calculations, and order management.',
    keyFeatures: [
      'Interactive product catalog with category taxonomy',
      'Shopping cart with dynamic price calculations',
      'Multi-method authentication: Google Auth, OTP & JWT',
      'Role-based access control (Admin vs Customer)',
      'Real-time order pipeline & user management',
      'Administrative dashboard with analytics',
      'Secure REST APIs backed by MongoDB persistence',
    ],
    githubUrl: 'https://github.com/govindkt2004-netizen',
    featured: true,
    accentColor: '#f59e0b',
    iconName: 'ShoppingBag',
  },
  {
    id: 'inkora',
    title: 'Inkora Blogging Platform',
    tagline: 'Interactive full-stack blogging platform with discussion threads',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RESTful APIs'],
    description:
      'A full-stack blogging platform designed for users to create, manage and interact with blog content.',
    keyFeatures: [
      'User registration, login and session validation',
      'Rich article composition, edit and deletion flow',
      'Interactive nested comments and community engagement',
      'RESTful backend architecture with data sanitization',
      'Document persistence via MongoDB Mongoose models',
    ],
    githubUrl: 'https://github.com/govindkt2004-netizen',
    featured: false,
    accentColor: '#ec4899',
    iconName: 'BookOpen',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Productivity Suite',
    tagline: 'Task organization tool with status tracking and local persistence',
    category: 'web',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
    description:
      'An agile task management application featuring instant state synchronization, categorical filtering, and persistent local storage.',
    keyFeatures: [
      'Full CRUD operation suite (Create, Read, Update, Delete)',
      'Multi-view filtering: All Tasks, Active Tasks, Completed',
      'Instant local storage persistence across sessions',
      'Responsive touch-friendly task interaction and status toggle',
    ],
    githubUrl: 'https://github.com/govindkt2004-netizen',
    featured: false,
    accentColor: '#3b82f6',
    iconName: 'CheckSquare',
  },
  {
    id: 'portfolio-website',
    title: 'Full-Stack Portfolio Website',
    tagline: 'Clean developer portfolio with backend contact APIs and responsive UI',
    category: 'fullstack',
    technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    description:
      'A full-stack portfolio project combining a modern frontend experience with backend APIs and responsive design.',
    keyFeatures: [
      'Clean modern interactive components and smooth navigation',
      'Express.js backend endpoints for validated inquiry handling',
      'Modular TypeScript architecture with responsive styling',
      'Resume modal and contact transmission form',
    ],
    githubUrl: 'https://github.com/govindkt2004-netizen',
    featured: false,
    accentColor: '#14b8a6',
    iconName: 'Code',
  },
];

export const MAIN_ACHIEVEMENT: AchievementItem = {
  rank: 'FIRST PLACE',
  competition: 'Project Exhibition Competition',
  event: '22nd ISTE Karnataka State Level Student Convention 2025–2026',
  academicYear: '2025–2026',
  venue: 'Lingaraj Appa Engineering College, Bidar',
  date: '19 August 2026',
  details:
    'Secured First Place at the prestigious state-level technical exhibition representing RYMEC Ballari, demonstrating excellence in engineering innovation, technical architecture, and live project presentation among participating institutions across Karnataka.',
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Explore Machine Learning Using Python',
    issuer: 'Professional Course Completion',
    date: 'April 2026',
    description:
      'Successfully completed a course focused on exploring machine learning concepts using Python.',
    skillsCovered: [
      'Machine Learning Fundamentals',
      'Python Data Toolkits',
      'Supervised & Unsupervised Learning',
      'Model Evaluation Metrics',
    ],
  },
];

export const EXTRA_CURRICULARS = [
  {
    category: 'Technical Activities & Coding',
    description: 'Active participant in hackathons, departmental coding challenges, and software sprints.',
  },
  {
    category: 'Project Development & Exhibitions',
    description: 'Designing end-to-end hardware-software and web solutions for inter-collegiate competitions.',
  },
  {
    category: 'Technical Quizzes & Presentations',
    description: 'Delivering technical seminars and competing in state-wide knowledge symposiums.',
  },
  {
    category: 'Teamwork & College Events',
    description: 'Collaborating in cross-disciplinary teams for college symposiums and student conventions.',
  },
];

export const SOFT_SKILLS_GAINED = [
  { title: 'Communication', desc: 'Clear technical articulation & presentation before jury panels' },
  { title: 'Leadership', desc: 'Guiding student project teams from concept to exhibition' },
  { title: 'Confidence', desc: 'Defending architectural and algorithmic choices under scrutiny' },
  { title: 'Time Management', desc: 'Balancing rigorous VTU coursework with practical software projects' },
];

export const PERSONAL_STRENGTHS = [
  { name: 'Self-Motivated', desc: 'Driven by curiosity and passion for building functional tools' },
  { name: 'Leadership', desc: 'Demonstrated initiative in academic group projects and conventions' },
  { name: 'Calm Problem Solving', desc: 'Methodical debugging and composed thinking under time pressure' },
  { name: 'Smart Work', desc: 'Focusing on clean architecture, reusability and algorithmic efficiency' },
  { name: 'Continuous Learning', desc: 'Eagerly upskilling in AI, Computer Vision, and modern web frameworks' },
];

export const LANGUAGES_KNOWN = [
  { language: 'English', context: 'Professional, Technical & Academic Communication' },
  { language: 'Kannada', context: 'Native Fluency & Regional Communication' },
  { language: 'Hindi', context: 'Conversational Fluency' },
];

export const HOBBIES = [
  { name: 'Cooking', icon: 'UtensilsCrossed', desc: 'Culinary experimentation and focus' },
  { name: 'Drawing', icon: 'PenTool', desc: 'Visual sketching, spatial perception & geometry' },
  { name: 'Listening to Music', icon: 'Headphones', desc: 'Acoustic relaxation and flow-state concentration' },
];

export const ORIGINAL_RESUME_DATA = {
  header: {
    title: 'RESUME',
    name: 'GOVINDA K T',
    addressLine1: 'S/O Thippa Naik, J H Patel Badavane, Malligere Road, Channagiri',
    addressLine2: 'Channagiri (T), Davanagere (D), 577213',
    cell: '+91 9591455853',
    email: 'govindkt2004@gmail.com',
    linkedin: 'https://www.linkedin.com/in/govinda-k-t-5719b82a6/',
    github: 'https://github.com/govindkt2004-netizen',
  },
  careerObjective:
    'To secure a challenging position in a reputed organization where I can use my technical knowledge, analytical skills, and creativity. I want to gain practical experience, improve my professional skills, and learn new technologies. I am willing to take on new challenges and work effectively as part of a team. I want to build a successful career through hard work, dedication, continuous learning, and innovation. I also aim to contribute to the growth of the organization while developing my knowledge and skills in a professional environment.',
  educationQualifications: [
    {
      course: 'B E',
      institution: 'RYMEC',
      boardUniversity: 'VTU',
      percentage: '7.68 CGPA*',
      yearOfPassing: '2027* (Pursuing)',
    },
    {
      course: 'PUC',
      institution: 'JEPUC',
      boardUniversity: 'DOPUE',
      percentage: '69.66 %',
      yearOfPassing: '2022',
    },
    {
      course: 'SSLC',
      institution: 'STJEHS',
      boardUniversity: 'KSEEB',
      percentage: '87.36 %',
      yearOfPassing: '2020',
    },
  ],
  internship: {
    company: 'Thiranex',
    role: 'Full Stack Development Intern',
    duration: 'Aug 2026 – Sep 2026',
    bulletPoints: [
      'Working on practical full-stack development projects under industry mentorship.',
      'Developing hands-on experience in frontend, backend, APIs, databases, and project-based software development.',
    ],
  },
  technicalSkills: {
    languages: 'HTML, C, C++, JavaScript, Python',
    officePackages: 'MS Office',
    operatingSystem: 'Windows',
  },
  certifications: [
    {
      title: 'Explore Machine Learning Using Python',
      period: 'April 2026',
      description:
        'Successfully completed a course focused on exploring machine learning concepts using Python.',
    },
  ],
  achievements:
    'Secured 1st place in the Project Exhibition Competition at the 22nd ISTE Karnataka state level student convention 2025–2026, held at Lingraj Appa engineering college, bidar, on 19 august 2026. Also actively participated in technical events and project presentations, showcasing strong innovation and problem-solving skills.',
  projectProfile: [
    {
      title: 'Human detection system',
      description:
        'Developed a human detection and counting system using python, yolo, and OpenCV. Implemented image/camera-based human detection with bounding boxes and person counting. Applied computer vision and object detection techniques for accurate detection.',
    },
    {
      title: 'Smart agriculture system',
      description:
        'Developed a smart agriculture system using python, machine learning, and image processing. Implemented crop recommendation and plant disease detection using leaf images. Provided useful agricultural insights to support better farming decisions.',
    },
  ],
  personalSkills: [
    'I am self-motivated and always willing to learn new things.',
    'I have good leadership qualities and can work well with others.',
    'I stay calm while handling problems and difficult situations.',
    'I believe in smart work and try to complete tasks efficiently and successfully.',
  ],
  extraCurricular:
    'I participated in technical activities like coding, project development, and quizzes. I also took part in project presentations, teamwork, and college activities. These activities help me improve my communication skills, leadership skills, confidence, and time management skills.',
  personalProfile: {
    nationality: 'Indian',
    dob: '29th July 2004',
    gender: 'Male',
    hobbies: 'Cooking, Drawing, listening to music',
    languagesKnown: 'English, Hindi, Kannada',
  },
  truthDeclaration: {
    statement:
      'I hereby declare that the information provided above is true and correct to the best of my knowledge and belief. I take full responsibility for the accuracy of the information given in this resume.',
    place: 'Channagiri',
    date: '2026',
    name: '(Govinda K T)',
  },
};


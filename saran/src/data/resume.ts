export const personalInfo = {
  name: 'D.R. Sarankumar',
  shortName: 'Sarankumar',
  initials: 'DRS',
  title: 'Structural Engineer',
  roles: [
    'Structural Engineer',
    'FEA Specialist',
    'AutoCAD Designer',
    'ETABS Expert',
    'Smart Infrastructure Researcher',
  ],
  phone: '8610455902',
  email: 'saran666dr@mail.com',
  location: 'Rajapalayam, Virudhunagar, Tamil Nadu',
  summary:
    'Recent post-graduate with excellent research, technical, and problem-solving skills. Systematic and able to learn new concepts quickly. Strong understanding of structural design fundamentals. Experienced with seismic and wind load analysis, FEA, and smart infrastructure applications. Devoted to delivering safe, efficient, and sustainable structures.',
}

export const education = [
  {
    year: 'April 2025',
    degree: 'ME',
    field: 'Structural Engineering',
    institution: 'Sri Krishna College of Technology',
    cgpa: '8.1',
    icon: 'mortarboard-fill',
  },
  {
    year: 'April 2023',
    degree: 'BE',
    field: 'Civil Engineering',
    institution: 'Sri Ramakrishna Engineering College',
    cgpa: '7.52',
    icon: 'building',
  },
  {
    year: 'March 2019',
    degree: 'HSC',
    field: 'Higher Secondary',
    institution: 'Nadar Matric Higher Secondary School',
    cgpa: '60%',
    icon: 'journal-bookmark-fill',
  },
  {
    year: 'March 2017',
    degree: 'SSLC',
    field: 'Secondary School',
    institution: 'Ananda Vidyalaya Matric Higher Secondary School',
    cgpa: '79%',
    icon: 'award-fill',
  },
]

export const technicalSkills = [
  {
    category: 'Structural Analysis',
    icon: 'building-gear',
    color: '#6366f1',
    skills: [
      { name: 'Structural Modeling (2D/3D)', level: 90 },
      { name: 'Finite Element Analysis (FEA)', level: 88 },
      { name: 'Seismic & Wind Load Analysis (IS 1893)', level: 85 },
      { name: 'Load Calculations (Dead/Live/Seismic/Wind)', level: 90 },
    ],
  },
  {
    category: 'Design & Detailing',
    icon: 'rulers',
    color: '#0ea5e9',
    skills: [
      { name: 'Reinforced Concrete Detailing (RCC)', level: 85 },
      { name: 'Steel Structure Design (IS 800)', level: 80 },
      { name: 'SketchUp (Visualization)', level: 70 },
    ],
  },
  {
    category: 'Software Tools',
    icon: 'laptop',
    color: '#f59e0b',
    skills: [
      { name: 'AutoCAD 2D & 3D', level: 92 },
      { name: 'ABAQUS (FEA)', level: 85 },
      { name: 'ETABS', level: 82 },
      { name: 'STAAD.Pro', level: 78 },
      { name: 'REVIT (Basic)', level: 65 },
    ],
  },
  {
    category: 'Productivity & Programming',
    icon: 'code-slash',
    color: '#10b981',
    skills: [
      { name: 'MS Excel (Data & Calculations)', level: 85 },
      { name: 'MS Office Suite', level: 88 },
      { name: 'MATLAB', level: 72 },
      { name: 'C Programming (Basics)', level: 60 },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Numerical Study on Shear Behaviour & Heat Transfer of Hollow Flange Section',
    period: 'April 2025',
    badge: 'ME Thesis',
    badgeColor: '#6366f1',
    description:
      'Conducted finite element analysis to evaluate shear behavior of hollow flange sections under various loading conditions. Performed heat transfer simulations to analyze thermal performance and insulation efficiency in structural components.',
    achievements: [
      'FEA analysis using ABAQUS for shear behavior under varied loading',
      'Heat transfer simulations for thermal performance assessment',
      'Proposed optimized designs balancing structural strength & thermal efficiency',
      'Advanced construction application recommendations',
    ],
    technologies: ['ABAQUS', 'FEA', 'Heat Transfer Analysis', 'Structural Design', 'IS Codes'],
    category: 'Research',
  },
  {
    id: 2,
    title: 'Electro-Mechanical Characterization of Hybrid Carbon Fiber & Steel Slag Powder Self-Sensing Cement Composite',
    period: 'April 2023',
    badge: 'BE Project',
    badgeColor: '#0ea5e9',
    description:
      'The integration of carbon fibers enables the cement composite to sense mechanical stress and strain through changes in electrical resistance, enabling real-time structural health monitoring (SHM) without external sensors.',
    achievements: [
      'Real-time SHM via electrical resistance change — no external sensors',
      'Used steel slag powder (industrial waste) reducing carbon emissions',
      'Improved mechanical strength and electromechanical responsiveness',
      'Suitable for smart infrastructure and next-gen construction',
    ],
    technologies: ['Cement Composites', 'Carbon Fiber', 'Steel Slag', 'SHM', 'Electromechanical Analysis'],
    category: 'Research',
  },
  {
    id: 3,
    title: 'Replacement of Clay Bricks with Fly Ash Bricks',
    period: 'April 2022',
    badge: 'Sustainable Construction',
    badgeColor: '#10b981',
    description:
      'Replaced conventional clay bricks with eco-friendly fly ash bricks, contributing to sustainable construction and reduced environmental impact.',
    achievements: [
      'Improved structural quality with eco-friendly alternative',
      'Reduced construction costs and enhanced thermal insulation',
      'Environmental compliance and sustainability standards met',
      'Green construction initiative aligned with circular economy',
    ],
    technologies: ['Fly Ash Bricks', 'Sustainable Construction', 'Material Testing', 'Green Building'],
    category: 'Sustainable',
  },
]

export const experience = [
  {
    company: 'Britto & Associates',
    location: 'Coimbatore',
    role: 'Structural Design Engineer',
    period: 'Aug 2025 – Present',
    type: 'Full-time',
    current: true,
    color: '#6366f1',
    points: [
      'Create detailed 2D/3D engineering drawings using AutoCAD for real, ongoing projects',
      'Perform accurate design calculations to support project execution',
      'Ensure compliance with IS standards and safety regulations',
    ],
  },
  {
    company: 'Arrow Structure',
    location: 'Coimbatore',
    role: 'Structural Design Intern',
    period: 'July 2024',
    type: 'Internship',
    current: false,
    color: '#0ea5e9',
    points: [
      'Assisted with structural design projects by drafting plans',
      'Analyzed load calculations for structural components',
      'Utilized design software to ensure safe and efficient structures',
    ],
  },
  {
    company: 'KCP Infra Ltd',
    location: 'Coimbatore',
    role: 'Site Engineer Intern',
    period: 'Dec 2022 – April 2023',
    type: 'Internship',
    current: false,
    color: '#f59e0b',
    points: [
      'Worked on Smart City project: Model Roadwork in Racecourse',
      'Collaborated with Engineers and planners on road design and sustainability',
      'Boosted team coordination, productivity, and project efficiency',
    ],
  },
]

export const certifications = [
  {
    title: 'Biodegradability & Environmental Impact Assessment of Biofibres and Green Composites',
    issuer: 'AICTE ATAL Academy – Faculty Development Program',
    duration: 'One Week Course',
    icon: 'leaf',
    color: '#10b981',
  },
  {
    title: 'Introduction to Building Information Modelling (BIM)',
    issuer: 'BIMLABS',
    duration: 'One Day Workshop',
    icon: 'buildings',
    color: '#6366f1',
  },
  {
    title: 'Technograhi – Urban Affairs E-Course',
    issuer: 'Ministry of Housing and Urban Affairs, Government of India',
    duration: 'One Day E-Course',
    grade: 'Grade A',
    icon: 'gov',
    color: '#f59e0b',
  },
  {
    title: 'MATLAB Onramp',
    issuer: 'MathWorks',
    duration: 'Three Days Course',
    grade: '100% Score',
    icon: 'cpu',
    color: '#0ea5e9',
  },
  {
    title: 'Diploma in AutoCAD (DCAD)',
    issuer: 'APT-TECH Computer Education',
    duration: '11 Jan 2021',
    grade: 'Distinction',
    icon: 'vector-pen',
    color: '#f43f5e',
  },
]

export const stats = [
  { number: '8.1', label: 'ME CGPA', suffix: '' },
  { number: '3', label: 'Research Projects', suffix: '+' },
  { number: '3', label: 'Internships', suffix: '' },
  { number: '5', label: 'Certifications', suffix: '+' },
]

// Course Data
export const courses = [
  {
    id: 1,
    title: 'Cloud DevOps',
    slug: 'cloud-devops',
    instructor: 'Mr. Mudassir',
    category: 'IT',
    startDate: '2026-01-03',
    duration: '3-6 months',
    level: 'Beginner to Advanced',
    image: '/assets/images/cloud-devops.jpg',
    description: 'Cloud DevOps equips you with the essential skills to manage, deploy, and scale applications in modern cloud environments.',
    fullDescription: 'This comprehensive Cloud DevOps program is designed to equip you with practical skills and industry-relevant knowledge. Our hands-on approach ensures you are job-ready by the end of the course.',
    topics: [
      'Cloud infrastructure management (AWS, Azure, GCP)',
      'CI/CD pipeline implementation',
      'Container orchestration with Kubernetes',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Monitoring and logging solutions',
      'Security best practices in cloud environments'
    ],
    prerequisites: 'Basic understanding of Linux and networking. Familiarity with command-line interface recommended.'
  },
  {
    id: 2,
    title: 'Data Science + Gen AI',
    slug: 'data-science-gen-ai',
    instructor: 'Mr. S.M. Hussain',
    category: 'IT',
    startDate: '2026-04-30',
    duration: '4-6 months',
    level: 'Intermediate to Advanced',
    image: '/assets/images/data-science.jpg',
    description: 'This course provides a solid foundation in data science along with exposure to Generative AI.',
    fullDescription: 'Master data science fundamentals and explore cutting-edge Generative AI technologies. Learn to build AI-powered applications and analyze complex datasets.',
    topics: [
      'Python for data science',
      'Machine learning algorithms',
      'Deep learning and neural networks',
      'Generative AI models (GPT, Stable Diffusion)',
      'Data visualization and storytelling',
      'Real-world project implementation'
    ],
    prerequisites: 'Basic Python programming knowledge. Mathematics background helpful but not required.'
  },
  {
    id: 3,
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    instructor: 'Mr. Abdur Rahman',
    category: 'IT',
    startDate: '2026-03-09',
    duration: '3-5 months',
    level: 'Beginner to Intermediate',
    image: '/assets/images/mobile-app.jpg',
    description: 'Mobile App Development teaches you to build cross-platform mobile applications using React Native.',
    fullDescription: 'Learn to build professional mobile applications for both iOS and Android using React Native. From basics to deployment, master the complete mobile development lifecycle.',
    topics: [
      'React Native fundamentals',
      'Component-based architecture',
      'Navigation and routing',
      'State management (Redux, Context API)',
      'API integration and authentication',
      'App deployment to App Store and Play Store'
    ],
    prerequisites: 'Basic JavaScript and React knowledge recommended. No prior mobile development experience required.'
  },
  {
    id: 4,
    title: 'Accounting + Tally ERP',
    slug: 'accounting-tally-erp',
    instructor: 'Mr. Syed Shaida Hussain',
    category: 'Finance',
    startDate: '2026-03-09',
    duration: '2-4 months',
    level: 'Beginner to Intermediate',
    image: '/assets/images/accounting.jpg',
    description: 'This course covers essential accounting principles, GST compliance, and financial reporting using Tally ERP software.',
    fullDescription: 'Master accounting fundamentals and Tally ERP software to manage business finances effectively. Learn GST compliance and financial reporting.',
    topics: [
      'Fundamental accounting principles',
      'Tally ERP 9 and Tally Prime',
      'GST implementation and returns',
      'Financial statements preparation',
      'Inventory management',
      'Payroll processing'
    ],
    prerequisites: 'No prior accounting knowledge required. Basic computer skills needed.'
  },
  {
    id: 5,
    title: 'Data Analytics',
    slug: 'data-analytics',
    instructor: 'Mr. Arif',
    category: 'IT',
    startDate: '2026-03-22',
    duration: '3-5 months',
    level: 'Beginner to Intermediate',
    image: '/assets/images/data-analytics.jpg',
    description: 'Data Analytics provides practical training in analyzing large datasets using Python and Pandas.',
    fullDescription: 'Develop expertise in data analytics using Python, SQL, and visualization tools. Learn to extract insights from data and make data-driven decisions.',
    topics: [
      'Python and Pandas for data analysis',
      'SQL for data manipulation',
      'Data visualization (Matplotlib, Seaborn, Tableau)',
      'Statistical analysis techniques',
      'Business intelligence and reporting',
      'Real-world case studies'
    ],
    prerequisites: 'Basic computer skills. No programming experience required.'
  },
  {
    id: 6,
    title: 'Full Stack Development',
    slug: 'full-stack-development',
    instructor: 'Mr. Abdur Rahman',
    category: 'IT',
    startDate: '2026-03-01',
    duration: '4-6 months',
    level: 'Beginner to Advanced',
    image: '/assets/images/fullstack.jpg',
    description: 'Full Stack Development prepares you to build complete web applications from front-end to back-end.',
    fullDescription: 'Become a versatile full-stack developer by mastering both frontend and backend technologies. Build production-ready web applications.',
    topics: [
      'HTML, CSS, JavaScript fundamentals',
      'React.js for frontend development',
      'Node.js and Express.js for backend',
      'MongoDB database management',
      'RESTful API design',
      'Authentication and security',
      'Deployment and DevOps basics'
    ],
    prerequisites: 'Basic computer knowledge. Eagerness to learn programming.'
  }
];

// Get course by slug
export const getCourseBySlug = (slug) => {
  return courses.find(course => course.slug === slug);
};

// Get course by ID
export const getCourseById = (id) => {
  return courses.find(course => course.id === parseInt(id));
};
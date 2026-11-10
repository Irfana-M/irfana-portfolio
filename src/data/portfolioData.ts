import type { Project, SkillCategory, ApproachPillar, ContactInfo, Profile, SocialLink } from '../types'

export const profileData: Profile = {
  name: 'Irfana M',
  role: 'Full-Stack Web Developer (MERN)',
  location: 'Sharjah, UAE',
  badge: 'Available for Full-Time Roles across the UAE',
  headline: 'Building responsive, full-stack web applications with React, TypeScript, Node.js, and MongoDB.',
  bio: [
    'I am a Full-Stack Web Developer based in Sharjah, UAE, holding a B.Tech in Computer Science. I have foundational development experience in PHP and MySQL alongside practical full-stack project experience building modern web applications with the MERN stack (MongoDB, Express, React, Node.js) and TypeScript.',
    'I focus on developing complete web applications — from responsive user interfaces and client state management to RESTful APIs, authentication workflows, database schemas, and integration with third-party services.',
    'My development approach emphasizes writing clean, readable code, type safety with TypeScript, structured API design, and creating intuitive user experiences.',
  ],
  education: {
    degree: 'B.Tech in Computer Science',
    focus: 'Software Engineering, Algorithms, Database Systems & Web Technologies',
  },
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/Irfana-M',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/irfana-riyas',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    url: 'mailto:irfana.18m@gmail.com',
    icon: 'email',
  },
]

export const contactData: ContactInfo = {
  email: 'irfana.18m@gmail.com',
  github: 'https://github.com/Irfana-M',
  linkedin: 'https://linkedin.com/in/irfana-riyas',
  location: 'Sharjah, UAE',
  availability: 'Open to Full-Time Opportunities across the UAE',
  resumeUrl: '/Irfana_M_FullStack_Developer_Resume.pdf',
}

export const projectsData: Project[] = [
  {
    id: 'aptus',
    title: 'Aptus',
    tagline: 'Online Tutoring & Live Learning Platform',
    description:
      'An online tutoring platform built for interactive learning, course browsing, online payments, and live video sessions.',
    highlights: [
      'Implemented one-to-one video calls using WebRTC and real-time messaging with Socket.IO.',
      'Built course management, tutor booking calendar, and payment processing with Stripe.',
      'Managed frontend application state with Redux Toolkit and deployed the application to AWS.',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Node.js',
      'Express',
      'MongoDB',
      'Stripe',
      'Socket.IO',
      'WebRTC',
      'AWS',
    ],
    liveUrl: 'https://aptus.world',
    githubUrl: 'https://github.com/Irfana-M/Aptus',
    featured: true,
  },
  {
    id: 'auth-kyc',
    title: 'Auth-KYC',
    tagline: 'Authentication & Know-Your-Customer Verification Platform',
    description:
      'An authentication and identity verification web application with user registration, multi-step KYC submission, and document upload features.',
    highlights: [
      'Implemented authentication using JSON Web Tokens (JWT) and secure password hashing.',
      'Applied request validation with Zod on client and server forms.',
      'Built document upload functionality using Multer with storage on Cloudinary.',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Zod',
      'Multer',
      'Cloudinary',
    ],
    liveUrl: 'https://auth-kyc.vercel.app',
    githubUrl: 'https://github.com/Irfana-M/Auth-KYC',
    featured: true,
  },
  {
    id: 'bagit',
    title: 'BagIt',
    tagline: 'E-Commerce Web Application',
    description:
      'An e-commerce web application featuring product catalogs, cart management, checkout flows, and administrative management.',
    highlights: [
      'Built server-rendered views using Express and EJS templates following MVC patterns.',
      'Integrated Razorpay payment gateway for order checkout and payment processing.',
      'Designed MongoDB schemas for products, user carts, and order management.',
    ],
    techStack: [
      'JavaScript',
      'Node.js',
      'Express',
      'EJS',
      'MongoDB',
      'Razorpay',
    ],
    githubUrl: 'https://github.com/Irfana-M/BagIt',
    featured: true,
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and clean user interfaces.',
    skills: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Redux Toolkit',
      'HTML5',
      'CSS3',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Developing server routes, REST services, and real-time features.',
    skills: [
      'Node.js',
      'Express',
      'RESTful APIs',
      'JWT Authentication',
      'Socket.IO (WebSockets)',
      'WebRTC (Live Video/Audio)',
    ],
  },
  {
    title: 'Databases',
    description: 'Managing document and relational databases with proper schema definitions.',
    skills: [
      'MongoDB',
      'Mongoose ODM',
      'MySQL',
    ],
  },
  {
    title: 'Tools, Cloud & Integrations',
    description: 'Third-party payment gateways, media pipelines, version control and deployment.',
    skills: [
      'AWS Deployment',
      'Stripe Payments',
      'Razorpay Payments',
      'Cloudinary Media',
      'Multer',
      'Zod Validation',
      'Git & GitHub',
      'Postman',
      'Vite',
    ],
  },
  {
    title: 'Engineering Foundations',
    description: 'Computer science principles and earlier practical development experience.',
    skills: [
      'PHP',
      'Object-Oriented Programming (OOP)',
      'MVC Architecture',
      'Data Structures & Algorithms (Foundations)',
    ],
  },
]

export const approachPillars: ApproachPillar[] = [
  {
    title: 'Structured Planning & Architecture',
    description:
      'Before writing code, I plan database schemas, component hierarchies, and API endpoints to keep features organized and maintainable.',
    points: [
      'Clear separation between frontend and backend responsibilities',
      'Structured database models matching feature requirements',
      'Consistent REST API endpoint naming and error responses',
    ],
  },
  {
    title: 'Type Safety & Input Validation',
    description:
      'I use TypeScript and validation libraries to catch errors early and handle user input predictably.',
    points: [
      'Static typing with TypeScript across components and services',
      'Form and request payload validation with Zod',
      'Structured error handling for network and database requests',
    ],
  },
  {
    title: 'Security Basics & Authentication',
    description:
      'I follow established web security practices to protect user data and secure application access.',
    points: [
      'Token-based authentication using JWT and hashed passwords',
      'Route protection on both frontend navigation and backend endpoints',
      'Environment variables for sensitive keys and configuration',
    ],
  },
  {
    title: 'Responsive & Usable Interfaces',
    description:
      'I build responsive, clean layouts that work reliably across mobile, tablet, and desktop devices.',
    points: [
      'Mobile-first layouts styled with Tailwind CSS',
      'Semantic HTML structure with accessible navigation',
      'Clear feedback for user actions, loading states, and form errors',
    ],
  },
]

export const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

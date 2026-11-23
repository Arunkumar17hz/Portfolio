// =============================================================
//  SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
//  Edit text, links, and placeholders here.
// =============================================================

export const profile = {
  name: 'Arun Kumar',
  firstName: 'ARUN',
  lastName: 'KUMAR',
  titles: ['FULL-STACK DEVELOPER', 'SOFTWARE DEVELOPER', 'AI AUTOMATION DEVELOPER'],
  heroHeading: 'BUILDING DIGITAL EXPERIENCES.',
  intro:
    "I'm Arun Kumar, a passionate Information Technology graduate-in-progress focused on building modern web applications, intelligent automation systems, and innovative digital experiences.",
  heroDesc:
    'I transform ideas into modern websites, intelligent applications, and automated business solutions.',
  // Placeholders — replace with real links
  resumeUrl: './Arun-Kumar-Resume.pdf',
  profilePhoto: './images/profile.jpg',
  email: 'arunkumar.dev@example.com',
  linkedin: 'https://www.linkedin.com/in/arun-kumar-855320357/',
  github: 'https://github.com/Arunkumar17hz',
  whatsapp: 'https://wa.me/919943519949',
  whatsappNumber: '+91 99435 19949',
}

export const education = {
  degree: 'B.E. Information Technology',
  university: 'Annamalai University',
  status: 'Final Year Student',
}

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm an Information Technology student passionate about web development, software engineering, and AI-powered automation.",
    'I enjoy creating responsive websites, developing practical applications, and exploring technologies that solve real-world problems.',
  ],
  highlights: [
    {
      title: 'Education',
      desc: 'B.E. Information Technology at Annamalai University — building strong fundamentals in software and systems.',
    },
    {
      title: 'Technical Interests',
      desc: 'Modern web stacks, Python automation, AI integrations, and creative 3D web experiences.',
    },
    {
      title: 'Development Approach',
      desc: 'Clean, responsive, and user-focused builds with thoughtful architecture and maintainable code.',
    },
    {
      title: 'Problem Solving',
      desc: 'Breaking complex ideas into practical, automated, and scalable solutions.',
    },
    {
      title: 'Continuous Learning',
      desc: 'Always exploring new tools — from React and APIs to n8n and the OpenAI ecosystem.',
    },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    icon: 'Layout',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Web Design'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Python', 'REST APIs', 'SQL'],
  },
  {
    category: 'AI & Automation',
    icon: 'Bot',
    items: ['OpenAI API', 'n8n', 'AI Workflow Automation', 'Lead Automation', 'CRM Automation'],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Vercel'],
  },
]

export const projects = [
  {
    id: '01',
    title: 'AI-Powered Business CRM & Lead Automation',
    short: 'Intelligent CRM that manages leads, automates follow-ups, and surfaces sales insights.',
    description:
      'An intelligent business CRM platform designed to manage leads, categorize enquiries, automate follow-ups, and provide useful sales insights.',
    image: './images/project-01.jpg',
    tech: ['Python', 'React.js', 'SQL', 'n8n', 'REST APIs', 'OpenAI API'],
    features: [
      'Lead collection and management',
      'AI-powered lead categorization',
      'Automated follow-up suggestions',
      'Sales dashboard',
      'Business reports',
    ],
    live: '#',
    github: '#',
  },
  {
    id: '02',
    title: 'Responsive Business Website Development',
    short: 'Modern, responsive business websites with professional layouts and smooth UX.',
    description:
      'Designed and developed modern, responsive business websites with professional layouts, user-friendly navigation, and mobile-friendly experiences.',
    image: './images/project-02.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    features: [
      'Responsive layouts',
      'Professional UI/UX',
      'Business information sections',
      'Contact forms',
      'Modern animations',
    ],
    live: '#',
    github: '#',
  },
  {
    id: '03',
    title: 'Portfolio Website',
    short: 'A personal developer portfolio showcasing skills, projects, and work.',
    description:
      'A personal developer portfolio showcasing technical skills, projects, professional background, and web development work.',
    image: './images/project-03.jpg',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    features: [
      'Interactive 3D hero',
      'Glassmorphism UI',
      'Scroll animations',
      'Fully responsive',
      'SEO optimized',
    ],
    live: 'https://arunkumar17hz.github.io/arun-kumar-portfolio/#projects',
    github: 'https://github.com/Arunkumar17hz',
  },
]

export const services = [
  {
    id: '01',
    title: 'Web Development',
    icon: 'Globe',
    desc: 'Crafting fast, responsive, and visually striking websites for brands and individuals.',
    points: ['Modern responsive websites', 'Business websites', 'Portfolio websites', 'Frontend development'],
  },
  {
    id: '02',
    title: 'Software Development',
    icon: 'Code2',
    desc: 'Building practical applications with clean architecture and reliable integrations.',
    points: ['Python applications', 'Database integration', 'API development', 'Application development'],
  },
  {
    id: '03',
    title: 'AI Automation',
    icon: 'Workflow',
    desc: 'Designing intelligent systems that automate workflows and unlock business efficiency.',
    points: [
      'AI-powered CRM',
      'Lead management automation',
      'Business workflow automation',
      'AI integrations using OpenAI API and n8n',
    ],
  },
]

export const timeline = [
  {
    year: '2022 — Present',
    title: 'B.E. Information Technology',
    org: 'Annamalai University',
    desc: 'Final-year student building foundations in software engineering, web technologies, and automation.',
    tag: 'Education',
  },
  {
    year: 'Career Status',
    title: 'Entry-level / Fresher',
    org: 'Open to opportunities',
    desc: 'Actively seeking roles in software, full-stack, and AI automation development.',
    tag: 'Status',
  },
  {
    year: 'Career Interests',
    title: 'Software · Full-Stack · Frontend · Python · AI Automation',
    org: 'Developer Roles',
    desc: 'Passionate about roles that blend creativity, engineering, and intelligent automation.',
    tag: 'Focus',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export const siteMetadata = {
  name: 'Sai Prakash Reddy Vuppeti',
  title: 'Software Development Engineer',
  headline: 'Building scalable cloud-native applications and AI-powered solutions.',
  intro:
    'I am a software development engineer with a strong focus on delivering high-performance web experiences, cloud-native systems, and AI-assisted products that create measurable impact.',
  email: 'saiprakashreddy.vuppeti@example.com',
  github: 'https://github.com/saiprakashreddy',
  linkedin: 'https://linkedin.com/in/saiprakashreddy',
  resumeUrl: '/resume.pdf',
} as const;

export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

export const experienceItems = [
  {
    company: 'Microsoft',
    role: 'Software Development Engineer II',
    period: 'Feb 2026 – Present',
    summary: [
      'Leading frontend and platform experiences for developer-facing products with a strong emphasis on usability and reliability.',
      'Collaborating across product, design, and engineering to modernize internal tooling and customer workflows.',
    ],
  },
  {
    company: 'Amazon',
    role: 'Software Development Engineer',
    period: 'Jun 2025 – Dec 2025',
    summary: [
      'Built and shipped scalable web services and service-oriented frontend modules for large-scale operational workflows.',
      'Improved observability and performance across critical customer-facing features.',
    ],
  },
  {
    company: 'Bank of America',
    role: 'Frontend Developer',
    period: 'Jan 2023 – May 2025',
    summary: [
      'Developed enterprise-grade React and TypeScript applications with a focus on maintainability and compliance.',
      'Partnered with design and business stakeholders to deliver resilient finance experiences.',
    ],
  },
  {
    company: 'Jockey India',
    role: 'Frontend Developer',
    period: 'Feb 2021 – Dec 2021',
    summary: [
      'Created responsive digital commerce interfaces and improved the user experience for product discovery.',
      'Worked closely with backend teams to deliver polished customer interfaces at scale.',
    ],
  },
  {
    company: 'Gigadocs',
    role: 'Junior Software Developer',
    period: 'Jan 2019 – Jan 2021',
    summary: [
      'Contributed to full-stack development efforts and supported product delivery for early-stage SaaS initiatives.',
      'Built reusable UI patterns and improved team delivery velocity through component-driven development.',
    ],
  },
] as const;

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Redux', 'Next.js', 'Angular', 'TailwindCSS', 'Node'],
  },
  {
    title: 'Backend',
    items: ['REST APIs', 'GraphQL', 'JWT', 'Python'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Lambda', 'DynamoDB', 'S3', 'CloudFormation', 'CloudWatch', 'EventBridge'],
  },
  {
    title: 'DevOps',
    items: ['Git', 'GitHub', 'Jenkins', 'CodePipeline'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'RTL', 'PyTest', 'Postman'],
  },
] as const;

export const projects = [
  {
    title: 'AI-Powered Interview Preparation Assistant',
    category: 'Generative AI',
    description:
      'Developed an AI-powered interview coaching assistant using OpenAI’s Custom GPT Builder to provide mock technical interviews, behavioral coaching, system design guidance, and personalized study plans.',
    problem:
      'Candidates often struggle to practice interviews in a realistic and adaptive way without access to personalized coaching and structured feedback.',
    solution:
      'Built a conversational assistant that simulates interview sessions, delivers STAR-based behavioral coaching, and creates targeted prep plans based on user goals and experience level.',
    technologies: ['React', 'TypeScript', 'OpenAI GPT', 'TailwindCSS', 'Framer Motion'],
    process: [
      'Defined user journeys for job seekers, students, and career switchers.',
      'Mapped conversation flows for behavioral, technical, and system design interviews.',
      'Designed a feedback loop to improve coaching quality through structured prompts and study plans.',
    ],
    images: ['https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80'],
    github: 'https://github.com/your-username/interview-assistant',
    liveDemo: 'https://your-demo-url.com',
    blog: 'https://your-blog-url.com',
    screenshots: ['Mock interview flow', 'Behavioral coaching', 'Study roadmap'],
    reflection:
      'The project reinforced the importance of combining thoughtful product design and LLM-driven experiences to build useful, trustworthy tools.',
  },
] as const;

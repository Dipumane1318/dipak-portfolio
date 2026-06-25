export const siteConfig = {
  name: "Dipak Mane",
  role: "Computer Engineering Student | Full Stack Developer",
  rolesForTyping: [
    "Full Stack Developer",
    "MERN / MEAN Stack Developer",
    "Aspiring Software Engineer",
    "Cloud & Data Enthusiast",
  ],
  location: "Nashik, Maharashtra, India",
  email: "dipakmane.dev@gmail.com",
  phone: "+91-9322757678",
  tagline:
    "I build fast, reliable web applications — from short-link platforms to REST APIs — and I'm always shipping the next one.",
  links: {
    github: "https://github.com/Dipumane1318",
    linkedin: "https://www.linkedin.com/in/dipak-mane-b11abb318/",
    leetcode: "https://leetcode.com/u/Dipak_1318/",
    resume: "/assets/Dipak_Mane_Resume.pdf",
  },
};

export const stats = [
  { label: "Projects shipped", value: 4 },
  { label: "Languages used", value: 6 },
  { label: "Months interning", value: 3 },
  { label: "CGPA / 10", value: 7.6 },
];

export const about = {
  paragraphs: [
    "I'm a Computer Engineering student at SNJB's KBJ College of Engineering, currently in my third year, with a CGPA of 7.59/10. I like taking a feature from a blank repo to a deployed app — picking the stack, wiring the database, and getting the details of the UI right.",
    "Most of my hands-on learning comes from building: a URL shortener on Next.js and MongoDB, a Go-based REST API for student records, and a few front-end clones to sharpen responsive design. I recently spent time as a Data Science intern, where I went deep on SQL, Power BI, and Tableau.",
    "My goal is a software engineering role where I can keep building full-stack products — ideally somewhere that also lets me lean on what I've learned about cloud infrastructure and data.",
  ],
  goals: [
    "Land a Software Engineer / Full Stack Developer role",
    "Go deeper on system design and cloud architecture (AWS)",
    "Keep contributing to open-source and personal projects",
  ],
};

export type SkillCategory = {
  category: string;
  blurb: string;
  items: { name: string; level: number }[]; // level 1-5
};

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    blurb: "Languages I write logic in",
    items: [
      { name: "C++", level: 4 },
      { name: "Java", level: 3 },
      { name: "Python", level: 4 },
      { name: "Go", level: 3 },
      { name: "JavaScript", level: 4 },
      { name: "C", level: 3 },
    ],
  },
  {
    category: "Frontend",
    blurb: "Interfaces people touch",
    items: [
      { name: "React.js", level: 4 },
      { name: "Angular", level: 3 },
      { name: "HTML5", level: 5 },
      { name: "CSS3", level: 4 },
      { name: "Tailwind CSS", level: 4 },
      { name: "Bootstrap", level: 4 },
    ],
  },
  {
    category: "Backend",
    blurb: "Logic behind the scenes",
    items: [
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "REST APIs", level: 4 },
    ],
  },
  {
    category: "Database",
    blurb: "Where the data lives",
    items: [
      { name: "MongoDB", level: 4 },
      { name: "MySQL", level: 3 },
      { name: "SQLite", level: 3 },
    ],
  },
  {
    category: "Tools & Cloud",
    blurb: "What keeps the workflow honest",
    items: [
      { name: "Git / GitHub", level: 4 },
      { name: "Postman", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Power BI", level: 3 },
      { name: "AWS", level: 3 },
    ],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Data Science Intern",
    company: "TechnoGrowth Software Solutions Pvt. Ltd.",
    location: "Pune, India",
    period: "Dec 2025 — Feb 2026",
    highlights: [
      "Applied SQL for data querying, filtering, and day-to-day database management.",
      "Built interactive dashboards and reports in Power BI and Tableau for data visualization.",
      "Cleaned, transformed, and analyzed datasets to surface meaningful insights.",
      "Supported data-driven decisions by working closely with BI tooling and databases.",
    ],
    tags: ["SQL", "Power BI", "Tableau", "Data Analysis", "Dashboards"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    title: "BitLinks — URL Shortener",
    description:
      "A full-stack URL shortening platform with instant redirection and persistent storage.",
    tech: ["Next.js", "React.js", "MongoDB", "Tailwind CSS", "JavaScript"],
    features: [
      "Generates unique short URLs with instant redirection",
      "MongoDB integration for persistent data storage",
      "Responsive, user-friendly link-sharing interface",
    ],
    github: "https://github.com/dipakmane/bitlinks",
    demo: "#",
  },
  {
    title: "Students REST API",
    description:
      "A RESTful backend service in Go for managing student records end-to-end.",
    tech: ["Go (Golang)", "SQLite", "REST API", "Postman"],
    features: [
      "CRUD endpoints for creating and retrieving student records",
      "SQLite integration for efficient storage and retrieval",
      "Validated with Postman using JSON-based requests",
    ],
    github: "https://github.com/dipakmane/students-rest-api",
    demo: "#",
  },
  {
    title: "Netflix Clone",
    description:
      "A pixel-perfect, responsive recreation of the Netflix landing page.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    features: [
      "Pixel-perfect hero section and custom UI components",
      "Mobile-friendly, fully responsive layout",
      "Hand-built without any CSS framework",
    ],
    github: "https://github.com/dipakmane/netflix-clone",
    demo: "#",
  },
  {
    title: "To-Do List Application",
    description:
      "A task manager with creation, editing, deletion, and completion tracking.",
    tech: ["React.js", "Tailwind CSS", "Vite", "React Icons", "UUID"],
    features: [
      "Local Storage for persistent task data",
      "React Hooks for efficient state handling",
      "Create, edit, delete, and complete tasks",
    ],
    github: "https://github.com/dipakmane/todo-app",
    demo: "#",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  period: string;
  detail: string;
};

export const certifications: Certification[] = [
  {
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "AWS Academy",
    period: "Feb 2026 — Mar 2026",
    detail: "Cloud services, security, pricing, and architecture fundamentals.",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    period: "Sep 2025 — Nov 2025",
    detail: "Scored 63% — data analysis and Python fundamentals for data science.",
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "Google, via Eduskill",
    period: "Sep 2023 — Dec 2023",
    detail: "Foundations of Android app development through a guided virtual internship.",
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.E. Computer Engineering",
    institution: "SNJB's KBJ College of Engineering",
    location: "Chandwad, Nashik",
    period: "Aug 2023 — May 2027",
    grade: "CGPA: 7.59 / 10 (up to Semester VI)",
  },
  {
    degree: "XII (HSC)",
    institution: "K.N.D. Mahanor Junior College, Vadgaon",
    location: "Chhatrapati Sambhajinagar",
    period: "2021 — 2023",
    grade: "80.17%",
  },
  {
    degree: "X (CBSE)",
    institution: "S.B. Secondary and Higher Secondary School, Gondegaon",
    location: "Chhatrapati Sambhajinagar",
    period: "2020 — 2021",
    grade: "84.40%",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

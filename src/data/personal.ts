export const personalInfo = {
  name: "Jason Bokinz",
  title: "Full Stack Software Engineer",
  location: "New York",
  linkedin: "https://linkedin.com/in/jason-bokinz",
  github: "https://github.com/JasonBokinz",
  email: "jbokinz.dev@gmail.com",
};

export const hobbies = [
  { label: "Basketball", image: "/images/hobbies/basketball.png" },
  { label: "Lifting", image: "/images/hobbies/lifting.png" },
  { label: "Golfing", image: "/images/hobbies/golf.jpg" },
  { label: "Beach", image: "/images/hobbies/beach.jpg" },
];

export const languages = [
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "Ruby", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" },
  { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
];

export const education = {
  school: "Stony Brook University",
  degree: "Bachelor of Science in Computer Science",
  specialization: "Artificial Intelligence",
  graduationDate: "May 2025",
  gpa: "3.70",
  honors: "Magna Cum Laude",
  deansListCount: 8,
  highlights: [
    { label: "GPA", value: "3.70" },
    { label: "Honors", value: "Magna Cum Laude" },
    { label: "Dean's List", value: "8 Semesters" },
  ],
};

export interface Course {
  code: string;
  name: string;
}

export const courses: Course[] = [
  { code: "CSE 101", name: "Computer Science Principles" },
  { code: "CSE 114", name: "Intro to Object-Oriented Programming" },
  { code: "CSE 214", name: "Data Structures" },
  { code: "CSE 215", name: "Foundations of Computer Science" },
  { code: "CSE 216", name: "Programming Abstractions" },
  { code: "CSE 220", name: "Systems Fundamentals I" },
  { code: "CSE 300", name: "Technical Communications" },
  { code: "CSE 303", name: "Intro to Theory of Computation" },
  { code: "CSE 310", name: "Computer Networks" },
  { code: "CSE 312", name: "Legal Issues in Info Systems" },
  { code: "CSE 316", name: "Software Development" },
  { code: "CSE 320", name: "Systems Fundamentals II" },
  { code: "CSE 337", name: "Scripting Languages" },
  { code: "CSE 351", name: "Introduction to Data Science" },
  { code: "CSE 352", name: "Artificial Intelligence" },
  { code: "CSE 354", name: "Natural Language Processing" },
  { code: "CSE 355", name: "Computational Geometry" },
  { code: "CSE 373", name: "Analysis of Algorithms" },
  { code: "CSE 416", name: "Software Engineering" },
  { code: "AMS 210", name: "Applied Linear Algebra" },
  { code: "AMS 301", name: "Finite Mathematical Structures" },
  { code: "AMS 310", name: "Probability and Statistics" },
  { code: "MAT 203", name: "Calculus III with Applications" },
];

export const favoriteCourses = [
  {
    code: "CSE 316",
    name: "Software Development",
    description:
      "Built a full Reddit clone from scratch, iterating on the project with each assignment. Started with React and CSS fundamentals, then progressively added features like user authentication, post voting, and comment threads as we integrated MongoDB and learned more about full-stack web development.",
  },
  {
    code: "CSE 320",
    name: "Systems Fundamentals II",
    description:
      "Worked with C at a deep systems level. Built a file compressor and decompressor using Huffman encoding, re-implemented malloc, calloc, and free from scratch, and created a mailbox system using threads and mutexes that hammered home the importance of thread safety in concurrent programming.",
  },
  {
    code: "CSE 354",
    name: "Natural Language Processing",
    description:
      "Learned how large language models actually work under the hood, from tokenization to attention mechanisms. The final project was building our own LLM designed to help students learn abstract studying concepts, tying together everything from the course.",
  },
];

export const experience = {
  company: "West Palm Test Prep",
  product: "Whiz",
  productUrl: "https://whiz.study",
  role: "Software Engineer",
  period: "January 2024 - Present",
  summary:
    "Joined as an intern and grew into a full-time engineer on a small, fast-moving team building Whiz from the ground up. Whiz is an AI-powered test prep platform for SAT, PSAT, and AP exams that has scaled to over 50,000 students worldwide.",
  highlights: [
    "Built the platform from its earliest stages, shipping features to production daily as part of a tight-knit engineering team",
    "Engineered a scalable PostgreSQL schema supporting 8+ question types across 10+ exam formats",
    "Built an AI writing assistant using text embeddings that improved essay quality by 50%",
    "Architected an AI-based essay grading system with Express and RabbitMQ, reducing turnaround from weeks to minutes",
    "Led a team of engineers building an AI tutor using Next.js and OpenRouter for real-time, personalized feedback",
    "Implemented a gamified leveling system that increased feature engagement by 60%",
    "Built real-time notifications using Bun WebSockets, boosting return sessions by 30%",
    "Directed engineering interns to build a personalized SAT study timeline, resulting in 150-point average score increases",
    "Increased user retention by 40% through UX redesigns across the platform",
  ],
};

export const projects = [
  {
    name: "HoopMetrics",
    description:
      "An NBA analytics project that scrapes data from nba.com to perform in-depth statistical analysis on players, teams, and game trends. Goes beyond traditional box scores to uncover deeper performance insights using advanced metrics.",
    tech: ["Python", "Web Scraping", "Data Analysis", "NBA API"],
    github: "https://github.com/JasonBokinz/HoopMetrics",
  },
];

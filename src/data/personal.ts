export const personalInfo = {
  name: "Jason Bokinz",
  title: "Full Stack Software Engineer",
  location: "New York",
  linkedin: "https://linkedin.com/in/jason-bokinz",
  github: "https://github.com/JasonBokinz",
  email: "jbokinz.dev@gmail.com",
  calendly: "https://calendly.com/jbokinz-dev/30min",
};

export const hobbies = [
  { label: "Basketball", image: "/images/hobbies/basketball.png" },
  { label: "Lifting", image: "/images/hobbies/lifting.png" },
  { label: "Golfing", image: "/images/hobbies/golf.jpg" },
  { label: "Beach", image: "/images/hobbies/beach.jpg" },
];

export const languages = [
  { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
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
      "Full-stack web development course building progressively more complex applications.",
    projects: [
      "Reddit clone: iterative build from React/CSS fundamentals to auth, voting, comments, and MongoDB integration",
    ],
    tech: ["React", "CSS", "JavaScript", "MongoDB", "Node.js"],
  },
  {
    code: "CSE 320",
    name: "Systems Fundamentals II",
    description:
      "Deep systems programming in C covering memory management, concurrency, and low-level data structures.",
    projects: [
      "Huffman file compressor/decompressor",
      "Custom malloc, calloc, and free implementation",
      "Threaded mailbox system with mutexes",
    ],
    tech: ["C", "Valgrind", "pthreads", "Mutexes"],
  },
  {
    code: "CSE 354",
    name: "Natural Language Processing",
    description:
      "How LLMs work under the hood, from tokenization and embeddings to attention mechanisms.",
    projects: [
      "Built a custom LLM designed to help students learn abstract studying concepts",
    ],
    tech: ["Python", "PyTorch", "Transformers", "scikit-learn"],
  },
];

export const experiences = [
  {
    company: "West Palm Test Prep",
    productUrl: "https://whiz.study",
    productLabel: "whiz.study",
    logo: "/images/whiz/wptp-logo.png",
    location: "West Palm Beach, FL",
    summary:
      "AI-powered test prep platform for SAT, PSAT, and AP exams, used by 80,000+ students worldwide.",
    roles: [
      {
        title: "Software Engineer",
        period: "May 2025 - Present",
        summary: "Building and designing features with added ownership over architecture, team leadership, and technical direction.",
        highlights: [
          "Led a team of three engineers in building an AI tutor using Next.js and OpenRouter to provide real-time explanations, tailored feedback, and step-by-step guidance for SAT, PSAT, and AP questions",
          "Developed a role-based dashboard for a multi-tenant platform using Clerk, collaborating with the sales team and client organizations to tailor access controls, supporting onboarding for 30+ tutoring companies",
          "Directed and managed a team of four engineering interns to build a personalized SAT study timeline that adjusts to student goals and performance, resulting in an average score increase of 150 points",
          "Increased user retention by 40% by redesigning the exam layout, replacing popups with slide-in panels for tools like calculators and adding keyboard shortcuts to improve accessibility",
        ],
      },
      {
        title: "Software Engineer Intern",
        period: "January 2024 - April 2025",
        summary: "Writing code and shipping features daily, building the platform from its earliest stages.",
        highlights: [
          "Collaborated with product and content teams to create a personalized AI writing assistant using text embeddings, improving essay quality by 50% through inline suggestions and auto essay completions",
          "Architected and led development of an AI-based essay grading system using Express and RabbitMQ to process batches via prompt engineering, reducing turnaround time from weeks to minutes across 10+ exam types",
          "Implemented a practice mode that gathers missed and flagged questions from previous exams, leading to a 25% improvement in later test scores",
          "Increased feature engagement by 60% by leading the design and development of a gamified leveling system with backend progression logic and visual level-up effects",
          "Engineered a scalable PostgreSQL schema that supports over 8 question types, expanding test coverage and helping grow the user base by 250%",
          "Led the refactor of the exam question form using React and Tailwind to handle all question types in a shared component, cutting frontend complexity by 60% and improving code maintainability",
          "Drove the implementation of a real-time notification system using Bun WebSockets, coordinating across teams to increase return session rates by 30% and boost user engagement",
          "Expanded the iOS and Android mobile app using React Native to support 15+ AP exams by translating web app Node.js functions into Express backend endpoints",
        ],
      },
    ],
    // Sorted: languages → frameworks → databases/ORMs → infra/tools
    tech: [
      "TypeScript", "SQL",
      "React", "Next.js", "React Native", "Express", "Node.js", "Tailwind",
      "PostgreSQL", "Prisma", "Redis",
      "Clerk", "OpenRouter", "RabbitMQ", "Bun",
      "Claude", "ChatGPT", "Gemini",
    ],
    showcases: [
      // Add video showcases here as you get the mp4 files:
      // { title: "AI Tutor", description: "...", video: "/videos/ai-tutor.mp4" },
    ],
  },
];

export const projects = [
  {
    name: "HoopMetrics",
    description:
      "A Python desktop application that scrapes live data from nba.com using Selenium. Select any NBA team to view their full roster, coaching staff, and latest team updates. Explore franchise history including retired numbers, Hall of Fame inductees, all-time records, and championships. Compare any two players head-to-head with color-coded stat breakdowns.",
    tech: ["Python", "Selenium", "Tkinter", "Pillow"],
    github: "https://github.com/JasonBokinz/HoopMetrics",
  },
];

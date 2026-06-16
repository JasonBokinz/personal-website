export const personalInfo = {
  name: "Jason Bokinz",
  title: "Full Stack Software Engineer",
  location: "New York",
  linkedin: "https://linkedin.com/in/jason-bokinz",
  github: "https://github.com/JasonBokinz",
  email: "jbokinz.dev@gmail.com",
  calendly: "https://calendly.com/jbokinz-dev/30min",
};

export const hobbies: {
  label: string;
  image: string;
  scale?: number;
  objectPosition?: string;
}[] = [
  { label: "Basketball", image: "/images/hobbies/basketball.png" },
  { label: "Lifting", image: "/images/hobbies/lifting.png" },
  {
    label: "Golfing",
    image: "/images/hobbies/golf-v2.jpg",
    scale: 1.25,
    objectPosition: "center 30%",
  },
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

export interface FavoriteCourse {
  code: string;
  name: string;
  reflection: string;
}

export const favoriteCourses: FavoriteCourse[] = [
  {
    code: "CSE 320",
    name: "Systems Fundamentals II",
    reflection:
      "CSE 320 was the hardest class I took at Stony Brook, the kind with a reputation for pushing people out of the major. The work was low-level C and systems programming, and instead of just trying to pass, I pushed for perfection. I tested every edge case I could think of and tried to break my own code before the grader could. That standard showed up in the grades: I scored 100s on three of the projects, where much of the class was in the 40s and 60s, and I finished with an A. But the grade mattered less than what it built in me: staying calm under hard problems, planning my work across long deadlines, and always thinking about what could go wrong before it does.",
  },
  {
    code: "CSE 354",
    name: "Natural Language Processing",
    reflection:
      "This is the class that got me into AI. We went deep into how large language models actually work, with hands-on assignments in prompt engineering, text embeddings, retrieval, and why models hallucinate. For the first time I understood what was happening under the hood instead of just using the tools. We also covered different ways to benchmark these models, which is what led me to build my own RAG project outside of class to compare them. It's the reason I do the AI work I do today.",
  },
  {
    code: "CSE 416",
    name: "Software Engineering",
    reflection:
      "This was the first class that felt like a real software job instead of homework. We built one project over the semester with a deadline for each phase, designed our screens in Figma first and then built to match them, and worked as a team that split up the tasks. There was no set direction, so we picked our own stack and planned who did what, opened PRs, reviewed each other's code, and worked through merge conflicts. I came out of it knowing how to write code other people can read and how to ship as a team, not just on my own.",
  },
  {
    code: "CSE 316",
    name: "Software Development",
    reflection:
      "This is where I first learned front end. We built the same project over and over, starting bare with plain HTML, CSS, and vanilla JavaScript, then leveling up to React and Tailwind so I could see how the fundamentals work before the frameworks hide them. It's also where the bigger picture clicked: the difference between what runs on the server and what runs in the client, how each side handles rendering, and where React actually fits into it. It was the first end to end web app I ever built, and where I got comfortable owning a feature across the whole stack.",
  },
];

export interface ExperienceRole {
  title: string;
  period: string;
  highlights: string[];
  tech: string[];
}

export interface ExperienceShowcase {
  title: string;
  description: string;
  video: string;
}

export interface Experience {
  company: string;
  productUrl?: string;
  productLabel?: string;
  logo: string;
  logoBg?: "white";
  location: string;
  roles: ExperienceRole[];
  tech: string[];
  showcases: ExperienceShowcase[];
}

export const experiences: Experience[] = [
  {
    company: "West Palm Test Prep",
    productUrl: "https://whiz.study",
    productLabel: "whiz.study",
    logo: "/images/whiz/wptp-logo.png",
    location: "West Palm Beach, FL",
    roles: [
      {
        title: "Software Engineer (Intern → Full-Time, June 2025)",
        period: "January 2024 - Present",
        highlights: [
          "Launched **whiz.study**, an AI-powered EdTech platform serving **100,000+ users** across web and iOS, owning full-stack development in a **TypeScript** monorepo (**Next.js**, **React Native**, **Express**, **PostgreSQL**).",
          "Rebuilt the platform's **300,000+ line** monolith into a domain-driven architecture with a **3-engineer team** in under **4 months**, using **Claude Code** for large-scale refactoring.",
          "Led a team of **3 engineers** to ship an agentic **AI tutor** driving **~80%** of paid subscriptions, guiding students through problems by graphing equations, eliminating answer choices, and surfacing reference material.",
          "Built payment infrastructure spanning **Stripe** subscriptions, one-time payments, and a custom free-trial entitlement system, processing **1,600+ active paid subscriptions**.",
          "Shipped **Question Bank**, a targeted practice product for drilling specific concepts and question types, built on shared abstractions and a **20-member contract** scaffolded across **41 exam modules**.",
          "Engineered the codebase for agentic development, authoring architecture heuristics, extension checklists, and **CI-enforced architectural rules** that enable AI coding agents to make large changes safely.",
        ],
        tech: [
          "TypeScript",
          "React", "Next.js", "React Native", "Express", "Node.js", "Tailwind",
          "PostgreSQL", "Prisma",
          "Stripe",
          "OpenAI SDK", "OpenRouter",
          "GitHub Actions", "Claude Code",
        ],
      },
    ],
    tech: [],
    showcases: [],
  },
];

export interface Project {
  name: string;
  context?: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    name: "Retirement Planning Simulator",
    period: "Spring 2025",
    description:
      "**4-person team project**. A **Monte Carlo** retirement simulator spawning a parallel **Bun** worker per path, simulating **40–60 year** horizons through a **10-stage** annual pipeline into year-by-year success-probability projections.",
    highlights: [
      "Implemented financial algorithms including **Roth conversion** bracket-fill optimization, **Required Minimum Distribution** calculations, and ordered asset liquidation across **3 account types**.",
      "Automated IRS data ingestion with **Puppeteer** scrapers across **4 IRS sources** (tax brackets, deductions, capital gains, RMD tables), persisting year-stamped records to **PostgreSQL**.",
    ],
    tech: ["TypeScript", "Bun", "Next.js", "PostgreSQL"],
  },
  {
    name: "Dynamic Memory Allocator",
    period: "Fall 2024",
    description:
      "Implemented a custom dynamic memory allocator in **C**, replacing the standard library's **malloc**, **free**, **realloc**, and **memalign** with a hand-built heap manager operating directly on raw memory.",
    highlights: [
      "Designed **segregated free lists** partitioned by size class with a **first-fit** placement policy, using **boundary-tag** headers and footers to coalesce adjacent free blocks in **constant time**.",
      "Engineered block splitting without splinters, enforced **64-byte** payload alignment, and validated correctness with a **Criterion** unit test suite.",
    ],
    tech: ["C", "Criterion", "GDB", "Valgrind"],
  },
  {
    name: "RAG Hallucination Benchmarking",
    period: "Fall 2024",
    description:
      "**Solo** methodology study on reducing LLM hallucination in educational Q&A. Developed an end-to-end **RAG pipeline** using **OpenAI text-embedding-3-large** embeddings and **Pinecone** vector search, grounding **GPT-4o-mini** responses in retrieved reference material.",
    highlights: [
      "Benchmarked **zero-shot**, **few-shot**, and **chain-of-thought** prompting across **1,000+** **GPT-4o-mini** and **GPT-4o** responses, scoring factual consistency via **cosine similarity** against reference embeddings.",
      "Found retrieval grounding improved factual consistency across question types, with **chain-of-thought** prompting driving the largest gains on reasoning-heavy questions and diminishing returns on stronger models.",
    ],
    tech: ["Python", "OpenAI API", "Pinecone"],
  },
  {
    name: "HoopMetrics — NBA Team Data Explorer",
    period: "Summer 2024",
    description:
      "Built a **Python** desktop app that scrapes and displays live data for all **30 NBA teams** from NBA.com, organized into tabbed views for rosters, player and team stats, coaching staff, and franchise history.",
    highlights: [
      "Built a **head-to-head player comparison** view rendering two players' full stat lines side by side for direct comparison.",
      "Engineered **Selenium** scrapers pulling multiple live data feeds per team, with a team-ID lookup table to fetch each team's data efficiently.",
    ],
    tech: ["Python", "Selenium", "Tkinter", "Pillow"],
  },
];

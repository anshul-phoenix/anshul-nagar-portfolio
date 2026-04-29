export const profile = {
  name: 'Anshul Nagar',
  initials: 'AN',
  role: 'Full-Stack Engineer',
  subRole: 'AI-Driven Development',
  location: 'Pune, India',
  email: 'anshulnagar112233@gmail.com',
  phone: '+91 7415815549',
  linkedin: 'https://www.linkedin.com/in/anshul-nagar-084315197/',
  github: 'https://github.com/anshul456ch',
  resumeUrl: '/Resume.pdf',
  tagline: 'I ship production-grade web apps that load in under 250ms and scale beyond their roadmap.',
  heroLines: [
    'I build full-stack products with React, Vue, and Node —',
    'engineered for speed, scale, and the AI era.',
  ],
  metrics: [
    { value: '98%', label: 'Load time reduction', detail: '17s → <250ms' },
    { value: '60%', label: 'Performance gain', detail: 'on enterprise SPAs' },
    { value: '78%+', label: 'Test coverage', detail: 'shipped to production' },
    { value: '4+', label: 'Years experience', detail: 'across the full stack' },
  ],
};

export const aboutCopy = {
  paragraphs: [
    "I'm a Full-Stack Engineer who treats the browser, the API, the database, and the deploy pipeline as one continuous problem — and ships features end-to-end across all four.",
    "Over the last four years I've rebuilt legacy enterprise platforms into modern SPAs, cut load times by orders of magnitude, and architected reusable component systems adopted across multiple teams. I write TypeScript like the runtime depends on it, because it does.",
    "I'm also deep in the AI-driven development wave: I use Claude Code, Cursor, Devin, and MCP servers daily, and I build with them too — RAG pipelines on LangChain.js, local LLM inference with Ollama, and AI code-review tools that catch what humans miss.",
  ],
  highlights: [
    'Architected end-to-end full-stack features at Infosys',
    'Cut SPA load time from 17s → 250ms at Rakuten Symphony',
    'Mentor on TypeScript, architecture & AI-assisted workflows',
    'Certified in LangChain.js, RAG, and AI Fluency by Anthropic',
  ],
};

export const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Vue.js 3', 'Angular', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'SCSS', 'Vite', 'Webpack'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT / RBAC', 'WebSockets', 'GraphQL', 'Java (Basic)'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Mongoose ODM', 'Query Optimization', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Nginx', 'Linux'],
  },
  {
    category: 'AI / GenAI Engineering',
    items: ['LangChain.js', 'Ollama', 'RAG Pipelines', 'Vector Embeddings', 'OpenAI API', 'Anthropic API', 'LlamaIndex', 'Prompt Engineering'],
  },
  {
    category: 'AI Dev Tools',
    items: ['Claude Code', 'GitHub Copilot', 'Cursor', 'Devin', 'MCP Servers', 'Windsurf', 'Codeium', 'Replit AI'],
  },
  {
    category: 'Testing & Performance',
    items: ['Jest', 'Vitest', 'MSW', 'Karma', 'Code Splitting', 'Lazy Loading', 'Memoization', 'Core Web Vitals', 'Lighthouse'],
  },
];

export const projects = [
  {
    title: 'Internal Knowledge Assistant',
    subtitle: 'RAG Pipeline · Local LLM',
    description:
      'A full-stack semantic search assistant that turns sprawling internal docs into instant, grounded answers — running entirely on local infrastructure.',
    impact: 'Refined chunking + prompts to cut hallucinations and improve retrieval accuracy on a private corpus.',
    stack: ['React', 'Node.js', 'LangChain.js', 'Ollama', 'MongoDB', 'Vector Embeddings'],
    highlights: [
      'Designed end-to-end RAG pipeline: chunking → embeddings → vector search → LLM synthesis',
      'Stored embeddings in MongoDB for semantic retrieval against company docs',
      'Evaluated outputs and iterated on prompts to systematically reduce hallucinations',
    ],
    tag: 'AI / GenAI',
    accent: 'from-fuchsia-500/30 to-violet-500/30',
  },
  {
    title: 'AI-Powered Code Review Assistant',
    subtitle: 'LLM Tooling · Prompt Engineering',
    description:
      'A Node.js tool that reads React/TypeScript components and returns senior-engineer-grade feedback on structure, performance, and edge-case coverage.',
    impact: 'Caught logic errors and missing validations in AI-generated code, codifying a human-in-the-loop review standard.',
    stack: ['Node.js', 'LangChain.js', 'OpenAI API', 'Prompt Engineering', 'TypeScript'],
    highlights: [
      'Chain-of-thought prompts + few-shot examples for consistent senior-level feedback',
      'Structured output schema for actionable, machine-readable review comments',
      'Established a review pattern for shipping AI-assisted code with confidence',
    ],
    tag: 'AI / GenAI',
    accent: 'from-cyan-500/30 to-emerald-500/30',
  },
  {
    title: 'Cloud Native Platform UI',
    subtitle: 'React · Kubernetes · AWS',
    description:
      'Performance-engineered SPA for a Kubernetes-based cloud-native platform — slashed initial load from 17 seconds to under 250ms.',
    impact: '98% load time reduction · zero-downtime PHP-to-React migration · RBAC reducing unauthorized access to zero.',
    stack: ['React.js', 'Redux Toolkit', 'RTK Query', 'Node.js', 'PostgreSQL', 'AWS', 'Kubernetes'],
    highlights: [
      'Code splitting, lazy loading, and Lighthouse-guided wins for sub-250ms LCP',
      'Migrated legacy PHP apps to React SPAs with zero downtime and contract-driven APIs',
      'RBAC-aligned routing and protected API calls — zero unauthorized access incidents',
    ],
    tag: 'Enterprise',
    accent: 'from-violet-500/30 to-blue-500/30',
  },
  {
    title: 'ObjectStore (S3-Compatible) UI',
    subtitle: 'Vue.js 3 · Composition API',
    description:
      'Operator-grade UI for an S3-compatible object store — user/group management, site replication, and bucket operations at scale.',
    impact: 'Full Composition API rewrite with reusable primitives shipped across multiple downstream teams.',
    stack: ['Vue.js 3', 'Composition API', 'TypeScript', 'AWS S3 APIs', 'Vitest'],
    highlights: [
      'User & group management, site replication, bucket listing and settings flows',
      'Integrated directly with AWS S3-compatible REST APIs',
      'Component primitives reused across replication, IAM, and admin surfaces',
    ],
    tag: 'Enterprise',
    accent: 'from-emerald-500/30 to-cyan-500/30',
  },
  {
    title: 'Bare Metal Manager',
    subtitle: 'Angular · FPGA Lifecycle',
    description:
      'Angular UI for managing FPGA / Ansible lifecycle workflows on bare-metal hardware, with bulk import/export and a live virtual console.',
    impact: 'Bulk JSON/CSV ops on 1000+ records · API-driven virtual terminal for direct K8s cluster access.',
    stack: ['Angular', 'TypeScript', 'RxJS', 'Ansible', 'Kubernetes'],
    highlights: [
      'FPGA + Ansible lifecycle workflows with operator-friendly UX',
      'Bulk JSON/CSV import-export pipeline handling 1000+ records reliably',
      'API-driven virtual console terminal for live cluster access',
    ],
    tag: 'Enterprise',
    accent: 'from-orange-500/30 to-rose-500/30',
  },
  {
    title: 'Runtime Config Service',
    subtitle: 'Node.js · Express · AWS',
    description:
      'Express middleware that swaps environment variables at runtime — enabling zero-downtime config updates across AWS-hosted SPAs.',
    impact: 'Eliminated rebuilds for config changes; safer, faster rollouts in production.',
    stack: ['Node.js', 'Express.js', 'AWS', 'Docker'],
    highlights: [
      'Dynamic env var injection at runtime — no rebuild, no downtime',
      'Adopted across multiple SPAs in the cloud-native platform',
      'Hardened with validation and audit-friendly logging',
    ],
    tag: 'Backend',
    accent: 'from-amber-500/30 to-yellow-500/30',
  },
];

export const experience = [
  {
    company: 'Infosys Ltd',
    role: 'Associate Consultant · Full-Stack Engineer',
    period: 'Nov 2024 — Present',
    location: 'Pune, India',
    summary:
      'Architecting and shipping full-stack features end-to-end across Vue 3 / React SPAs, Node.js APIs, PostgreSQL & MongoDB, deployed on AWS.',
    bullets: [
      'Migrated legacy UI platforms to modern SPAs with Vue 3 (Composition API) and React, lifting performance by 60% and unlocking SSR-ready architecture.',
      'Designed scalable Node.js / Express REST APIs with JWT auth, RBAC middleware, and request validation — integrated with enterprise third-party services.',
      'Tuned PostgreSQL schemas and MongoDB collections via indexing, aggregation pipelines, and query optimization to drive down API response times.',
      'Built reusable TypeScript component libraries (React Hook Form + Zod + RTK Query) adopted across multiple project teams.',
      'Embedded Claude Code, Cursor, Copilot, Devin, and MCP servers into daily workflows — validating AI-generated code for correctness and security.',
      'Led code reviews and sprint planning; mentored juniors on architecture, TypeScript, and AI-assisted development.',
    ],
  },
  {
    company: 'Rakuten Symphony',
    role: 'Associate Software Engineer',
    period: 'Jan 2022 — Oct 2024',
    location: 'Indore, India',
    summary:
      'Cloud Native Platform (React) · ObjectStore (Vue 3) · Bare Metal Manager (Angular) — shipping operator-grade UIs on a Kubernetes platform.',
    bullets: [
      'Achieved 98% performance improvement: cut SPA load time from 17s to under 250ms via code splitting, lazy loading, and Lighthouse-driven optimizations.',
      'Built full-stack features with React (Redux Toolkit / RTK Query) on Node.js / Express APIs backed by PostgreSQL and MongoDB.',
      'Set up frontend quality toolchain — ESLint, Prettier, Husky, MSW, Vitest — driving 78%+ unit & integration test coverage.',
      'Migrated legacy PHP server-rendered apps to React SPAs with zero downtime, coordinating API contract evolution with backend teams.',
      'Implemented RBAC-based UI access control with role-specific routing and permission-aligned API calls — zero unauthorized access.',
      'Built Express middleware enabling dynamic runtime env var management for zero-downtime config updates on AWS.',
    ],
  },
];

export const certifications = [
  {
    name: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    url: 'https://verify.skilljar.com/c/iri75hrdh62d',
  },
  {
    name: 'Introduction to Agent Skills',
    issuer: 'Anthropic',
    url: 'https://verify.skilljar.com/c/uxghep5czcxt',
  },
  {
    name: 'Build LLM Apps with LangChain.js',
    issuer: 'DeepLearning.AI',
    url: 'https://learn.deeplearning.ai/accomplishments/3f68f154-84fc-40db-a751-07d22eb03911',
  },
  {
    name: 'JavaScript RAG Web Apps with LlamaIndex',
    issuer: 'DeepLearning.AI',
    url: 'https://learn.deeplearning.ai/accomplishments/c2c1352e-af48-49eb-96c1-cba0de048a6a',
  },
  {
    name: 'Neo4j Certified Professional',
    issuer: 'Neo4j GraphAcademy',
    url: 'https://graphacademy.neo4j.com/c/3feb8b69-fa36-48e6-a426-eeea530c7d14/',
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google',
    url: 'https://www.skills.google/course_templates/536',
  },
  {
    name: 'Introduction to Large Language Models',
    issuer: 'Google',
    url: 'https://www.skills.google/course_templates/539',
  },
  {
    name: 'Introduction to Responsible AI',
    issuer: 'Google',
    url: 'https://www.skills.google/course_templates/554',
  },
];

export const education = {
  degree: 'B.Tech, Information Technology',
  school: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore',
  period: '2018 — 2022',
};

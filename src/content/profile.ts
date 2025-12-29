// src/content/profile.ts

export type Link = {
    label: string;
    url: string;
  };
  
  export type ImpactCard = {
    title: string;
    description: string;
  };
  
  export type Experience = {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    location?: string;
    highlights: string[];
  };
  
  export type Project = {
    name: string;
    category: string;
    description: string;
    status: "Live" | "Beta" | "Building" | "TBD";
    whyItMatters: string;
    links: Link[];
  };
  
  export type SkillGroup = {
    category: string;
    skills: string[];
  };
  
  export type ThoughtLeadership = {
    title: string;
    description: string;
  };
  
  export type Profile = {
    name: string;
    title: string;
    location: string;
    heroStatement: string;
    proofPoints: string[];
  
    executiveSummary: string[];
  
    impact: ImpactCard[];
  
    experience: Experience[];
  
    parallelProjects: Project[];
  
    thoughtLeadership: ThoughtLeadership[];
  
    skills: SkillGroup[];
  
    contact: {
      email: string;
      phone: string;
      location: string;
      linkedin?: string;
    };
  
    photos: {
      src: string;
      alt: string;
    }[];
  
    chatAgent: {
      title: string;
      description: string;
    };
  };
  
  export const profile: Profile = {
    name: "Ignacio Solinas",
  
    title: "Director of Quality Engineering | AI-First QA Transformation Leader",
  
    location: "St. Augustine, Florida, USA",
  
    heroStatement:
      "Executive leader driving large-scale quality transformation, automation strategy, and engineering-driven QA systems across global organizations.",
  
    proofPoints: [
      "Built and led global QA organizations of 40+ engineers across the US, LATAM, and India",
      "Scaled automation, metrics, and CI/CD quality gates without increasing headcount",
      "Partnered with C-level leadership to align quality strategy with business outcomes",
    ],
  
    executiveSummary: [
      "I am a seasoned Quality Engineering executive with over two decades of experience leading QA organizations, modernizing testing practices, and embedding quality as a strategic capability across complex software ecosystems.",
  
      "Throughout my career, I have built and scaled global QA teams, introduced metrics-driven decision making, and led automation initiatives that reduced delivery risk while accelerating release velocity. My background spans both Waterfall and Agile environments, with a strong focus on SaaS platforms, CI/CD pipelines, and end-to-end system reliability.",
  
      "I specialize in transforming QA from a reactive testing function into a proactive, engineering-driven discipline—partnering closely with product, engineering, and executive leadership to align quality strategy with company objectives.",
    ],
  
    impact: [
      {
        title: "Global QA Leadership",
        description:
          "Built and developed a global QA organization of more than 40 professionals across multiple countries and time zones.",
      },
      {
        title: "QA Operating Model",
        description:
          "Established a comprehensive QA management system covering processes, deliverables, risk management, and performance metrics.",
      },
      {
        title: "Metrics-Driven Quality",
        description:
          "Introduced executive-level quality metrics and reporting to continuously improve SDLC outcomes and release readiness.",
      },
      {
        title: "Automation at Scale",
        description:
          "Leveraged automation to streamline test execution, data creation, and validation, reducing testing effort and delivery timelines.",
      },
      {
        title: "Leadership Through Change",
        description:
          "Successfully navigated senior leadership changes while keeping teams aligned with evolving business priorities.",
      },
      {
        title: "Organizational Resilience",
        description:
          "Implemented cross-training programs to balance workload and eliminate single points of failure.",
      },
    ],
  
    experience: [
      {
        company: "Newfold Digital",
        role: "QA Director",
        startDate: "Aug 2018",
        endDate: "Present",
        highlights: [
          "Led a distributed Quality Assurance organization of 40 engineers across the US, Argentina, and India, reporting directly to the CTO.",
          "Reorganized the QA function to improve efficiency while doubling automation capacity across functional, end-to-end, performance, and load testing.",
          "Implemented open-source automation tooling (TestNG, Selenium, Protractor, REST Assured, Docker) to reduce licensing costs and modernize the QA stack.",
          "Introduced executive-level quality metrics to support launch readiness decisions, including defect trends, coverage, and automation effectiveness.",
          "Managed departmental planning and reporting, including oversight of a $6M QA budget.",
        ],
      },
      {
        company: "Web.com",
        role: "QA Manager",
        startDate: "Jan 2013",
        endDate: "Aug 2018",
        highlights: [
          "Managed a QA team of 23 engineers in Argentina supporting development teams across the US and Canada.",
          "Oversaw delivery of multiple concurrent projects, including planning, execution tracking, reporting, and resource allocation.",
          "Led Quality Assurance efforts for a full company rebranding and major product relaunch for Network Solutions.",
          "Partnered closely with engineering and product teams using Agile (SCRUM) methodologies.",
          "Supported a broad technology stack including Java, .NET, JavaScript, PHP, Android, iOS, SQL, Oracle, HTML, CSS, and XML.",
        ],
      },
      {
        company: "Web.com",
        role: "Senior QA Analyst",
        startDate: "Jan 2010",
        endDate: "Jan 2013",
        highlights: [
          "Performed black-box and security testing for large-scale web applications.",
          "Designed and executed test cases and served as system point of contact for QA activities.",
          "Provided smoke testing support and release validation.",
          "Trained new team members and acted as SharePoint Service Administrator.",
          "Conducted requirements and documentation analysis to ensure test coverage.",
        ],
      },
      {
        company: "Verizon Business",
        role: "QA Semi-Senior Analyst",
        startDate: "Nov 2007",
        endDate: "Jan 2010",
        highlights: [
          "Acted as application point of contact and coordinated releases and conference calls.",
          "Automated test cases using SoapUI and contributed to scope and effort estimation.",
          "Trained new employees and supported distributed QA activities.",
          "Provided smoke testing and release verification.",
        ],
      },
      {
        company: "HSBC Bank",
        role: "QA Junior Analyst",
        startDate: "Apr 2003",
        endDate: "Nov 2007",
        highlights: [
          "Conducted white-box testing and reviewed code standards across multiple platforms.",
          "Provided performance improvement suggestions and technical documentation.",
          "Reviewed QA methodologies including SDLC and RBPM.",
          "Tested applications across Mainframe, iSeries, and Windows environments.",
        ],
      },
    ],
  
    parallelProjects: [
      {
        name: "CourtBuddy",
        category: "Product / Marketplace",
        description:
          "Tennis matchmaking and community platform designed to simplify finding players, organizing matches, and managing play.",
        status: "Live",
        whyItMatters:
          "Applies product thinking, user experience, and platform engineering to a real-world consumer application.",
        links: [
          { label: "Website", url: "https://www.courtbuddy.io/" },
        ],
      },
      {
        name: "QA Shift Left",
        category: "Thought Leadership / Platform",
        description:
          "An initiative focused on redefining Quality Assurance as an AI-first, engineering-driven discipline.",
        status: "Live",
        whyItMatters:
          "Represents a forward-looking vision for Quality Engineering and Quality as a Management discipline.",
        links: [{ label: "Website", url: "http://www.thefutureofqa.com/" }],
      },
    ],
  
    thoughtLeadership: [
      {
        title: "AI-First Quality Engineering",
        description:
          "Quality is no longer a manual verification step or a post-development activity. AI-first quality engineering treats quality as an intelligent system—one that continuously analyzes code changes, assesses risk, selects relevant validations, and learns from both test outcomes and production signals. AI augments human judgment by accelerating analysis and reducing blind spots, while deterministic systems retain final authority.",
      },
      {
        title: "Shift-Left as Strategic Advantage",
        description:
          "Embedding quality decisions earlier in the software lifecycle dramatically reduces downstream risk, cost, and rework. By shifting quality intelligence to pull requests and pre-merge workflows, teams detect issues when context is fresh and changes are small. This enables faster feedback, safer releases, and higher engineering throughput without sacrificing control.",
      },
      {
        title: "Engineering-Driven QA",
        description:
          "Modern QA must operate as an engineering discipline, not a reactive testing function. Engineering-driven QA focuses on code, systems, and automation rather than manual execution. Quality engineers design test infrastructure, define invariants, and build scalable validation systems that integrate directly into CI/CD pipelines and engineering workflows.",
      },
      {
        title: "Quality as a Product",
        description:
          "Quality systems should be designed, measured, and evolved like any other critical product. This includes clear ownership, explicit success metrics, and continuous improvement based on real usage and outcomes. Treating quality as a product ensures it delivers measurable business value—reduced incidents, faster delivery, and increased confidence at scale.",
      },
      {
        title: "Autonomous Testing at Scale",
        description:
          "Autonomous testing combines automation, AI agents, and self-healing infrastructure to scale quality without linear headcount growth. AI assists with test selection, failure classification, and maintenance, while humans focus on defining intent, risk boundaries, and system rules. The result is a resilient, scalable quality system that keeps pace with modern software delivery.",
      },
    ],
  
    skills: [
      {
        category: "Leadership & Strategy",
        skills: [
          "Global QA leadership",
          "Quality organization design",
          "Quality governance and operating models",
          "Executive-level risk communication and reporting",
          "Platform-level ownership of quality systems",
          "Stakeholder management",
          "Metrics-driven decision making",
        ],
      },
      {
        category: "Quality Engineering",
        skills: [
          "End-to-end testing",
          "Test planning and management",
          "Risk-based test strategies informed by code, CI/CD, and production signals",
          "Defect management",
          "SDLC optimization",
          "CI/CD quality gates",
        ],
      },
      {
        category: "Automation & Tooling",
        skills: [
          "CI/CD pipelines (Jenkins, GitHub Actions)",
          "AI-assisted test analysis and generation (LLM-driven agents)",
          "Autonomous test selection and execution strategies",
          "Self-healing test frameworks (selectors, timing, flaky test mitigation)",
          "API automation (REST Assured, contract testing)",
          "UI automation at scale (Selenium-based frameworks)",
          "Containerized test execution (Docker)",
          "AI tooling and workflows (Cursor, agent-based automation, prompt-driven development)",
        ],
      },
      {
        category: "Technical Foundations",
        skills: [
          "Strong understanding of software architecture and system design",
          "Code-level test analysis (Java-based test suites, assertions, coverage)",
          "SQL and data validation for backend systems",
          "Unix/Linux environments and scripting",
          "API-first and SaaS platform architectures",
          "Test observability and production feedback loops",
          "Metadata-driven test organization and coverage mapping",
        ],
      },
    ],
  
    contact: {
      email: "Ignacio.Solinas@hotmail.com",
      phone: "+1 904 377-7244",
      location: "St. Augustine, FL, USA",
      linkedin: "https://(add-link)",
    },
  
    photos: [
      { src: "/photos/photo-1.jpg", alt: "Ignacio Solinas professional photo" },
      { src: "/photos/photo-2.jpg", alt: "Ignacio Solinas speaking or working" },
      { src: "/photos/photo-3.jpg", alt: "Ignacio Solinas leadership context" },
      { src: "/photos/photo-4.jpg", alt: "Ignacio Solinas casual professional" },
      { src: "/photos/photo-5.jpg", alt: "Ignacio Solinas at event" },
      { src: "/photos/photo-6.jpg", alt: "Ignacio Solinas personal branding" },
    ],
  
    chatAgent: {
      title: "Ask about Ignacio",
      description:
        "AI assistant trained on Ignacio Solinas’ background, leadership experience, and projects.",
    },
  };
  
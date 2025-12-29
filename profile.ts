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
        status: "TBD",
        whyItMatters:
          "Applies product thinking, user experience, and platform engineering to a real-world consumer application.",
        links: [
          { label: "Website", url: "https://(add-link)" },
          { label: "Demo", url: "https://(add-link)" },
        ],
      },
      {
        name: "QA Shift Left",
        category: "Thought Leadership / Platform",
        description:
          "An initiative focused on redefining Quality Assurance as an AI-first, engineering-driven discipline.",
        status: "TBD",
        whyItMatters:
          "Represents a forward-looking vision for Quality Engineering and Quality as a Management discipline.",
        links: [{ label: "Website", url: "https://(add-link)" }],
      },
    ],
  
    thoughtLeadership: [
      {
        title: "AI-First Quality Engineering",
        description:
          "[PLACEHOLDER: Add description] How AI and automation agents transform quality assurance from manual testing to autonomous, intelligent quality systems.",
      },
      {
        title: "Shift-Left as Strategic Advantage",
        description:
          "[PLACEHOLDER: Add description] Embedding quality earlier in the SDLC to reduce cost, accelerate delivery, and improve outcomes.",
      },
      {
        title: "Engineering-Driven QA",
        description:
          "[PLACEHOLDER: Add description] Transforming QA from a reactive testing function into a proactive, code-first discipline that partners with engineering.",
      },
      {
        title: "Quality as a Product",
        description:
          "[PLACEHOLDER: Add description] Treating quality systems, metrics, and tooling as products that deliver measurable business value.",
      },
      {
        title: "Autonomous Testing at Scale",
        description:
          "[PLACEHOLDER: Add description] Leveraging automation, AI agents, and self-healing test infrastructure to scale quality without linear headcount growth.",
      },
    ],
  
    skills: [
      {
        category: "Leadership & Strategy",
        skills: [
          "Global QA leadership",
          "Quality organization design",
          "Stakeholder management",
          "Risk management",
          "Metrics-driven decision making",
        ],
      },
      {
        category: "Quality Engineering",
        skills: [
          "End-to-end testing",
          "Test planning and management",
          "Defect management",
          "SDLC optimization",
          "CI/CD quality gates",
        ],
      },
      {
        category: "Automation & Tooling",
        skills: [
          "Selenium",
          "TestNG",
          "Protractor",
          "REST Assured",
          "SoapUI",
          "Docker",
        ],
      },
      {
        category: "Technical Foundations",
        skills: [
          "SQL (Intermediate)",
          "Unix (Intermediate)",
          "Programming fundamentals",
          "SaaS platforms",
        ],
      },
      {
        category: "Methodologies",
        skills: ["Agile (SCRUM)", "Waterfall", "Hybrid delivery models"],
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
  
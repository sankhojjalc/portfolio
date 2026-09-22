export interface Organization {
  id: number;
  name: string;
  jobRole: string;
  yearOfService: string;
  tasks: string[];
}

export const organizations: Organization[] = [
  {
    id: 4,
    name: "Sber Bank",
    jobRole: "Software Engineer Senior",
    yearOfService: "Jan 2025 - Present",
    tasks: [
      "Designed and developed an AI - powered Cross - Border Payments & Compliance Copilot for internal banking operations, combining Generative AI, Retrieval- Augmented Generation, and agentic workflows to assist teams with transaction investigations, regulatory - policy discovery, document analysis, and case resolution.",
      "Architected Python / FastAPI - based AI services and LangGraph workflows integrating LLMs with internal banking systems through controlled tool calling, enabling agents to retrieve transaction information, customer / KYC context, supporting documents, and operational data during payment investigations.",
      "Designed a production - grade RAG architecture using dense embeddings, BM25-based keyword retrieval, metadata filtering, hybrid search, and reranking across banking policies, regulatory documents, operational procedures, and internal knowledge sources to generate grounded responses with supporting evidence.",
      "Implemented agent state management and human -in -the - loop workflows  allowing investigation processes to pause for review and approval before executing sensitive actions while maintaining workflow state across multiple reasoning and tool - execution steps.",
      "Designed secure AI integration patterns by separating LLM reasoning from deterministic authorization  enforcing Keycloak / RBAC policies before accessing customer or transaction data and restricting agents to explicitly authorized tools and resources.",
      "Implemented AI guardrails including structured Pydantic schemas, tool - level permission enforcement, prompt - injection protection, context isolation, output validation, and audit logging to support secure usage of LLMs within a regulated banking environment.",
      "Established evaluation and observability practices for AI workflows covering retrieval relevance, answer faithfulness, tool - call accuracy, workflow completion, latency, token consumption, failure rates, and human escalation patterns.",
      "Architected an AI - powered Pull Request review system using the organization's internal LLM platform to identify common coding issues and recommend baseline performance improvements before human review, reducing average PR review turnaround time by approximately 40%.",
      "Collaborated with banking, compliance, security, backend, and platform teams to integrate AI capabilities into the existing cross - border Internet Banking ecosystem while maintaining enterprise security and operational controls."
    ],
  },
  {
    id: 3,
    name: "Publicis Sapient",
    jobRole: "Senior Associate Engineer",
    yearOfService: "Aug 2021 - Dec 2024",
    tasks: [
      "Led development of scalable, configuration - driven applications for one of the UK's largest e-commerce platforms, combining React.js/TypeScript frontend systems with Python-based backend services supporting high-volume customer and product experiences serving 20M+ monthly active users.",
      "Designed and developed backend APIs and integration services using Python, FastAPI, PostgreSQL, and REST, supporting frontend applications and integrations with downstream product, catalogue, content, and enterprise services.",
      "Contributed to early Generative AI initiatives by developing an internal knowledge assistant using Retrieval- Augmented Generation, enabling teams to query product documentation, operational knowledge, FAQs, and support content using natural - language questions.",
      "Worked on document ingestion, chunking, embedding - based retrieval, prompt design, and LLM integration for the knowledge assistant while evaluating approaches for improving retrieval relevance and reducing unsupported model responses.",
      "Led development of Server - Side Rendered React applications and introduced reusable, configuration - driven UI architectures to support large - scale e - commerce experiences.",
      "Spearheaded transformation of the application into a Progressive Web Application, enabling offline capability, improved responsiveness, and a native - like experience across device categories.",
      "Improved application performance through Webpack bundle analysis, code splitting, caching, and Critical Rendering Path optimization, contributing to approximately 37 % improvement in page - load performance.",
      "Strengthened software quality through comprehensive unit and integration testing using Jest and React Testing Library, improving defect detection while incorporating developer - assistance tools such as GitHub Copilot into engineering workflows."
    ],
  },
  {
    id: 2,
    name: "Josh Software Pvt Ltd",
    jobRole: "Senior Software Developer",
    yearOfService: "Aug 2020 - Aug 2021",
    tasks: [
      "Designed and developed full-stack solutions for a leading Indian food delivery startup, focusing on performance optimization and operational stability.",
      "Delivered system design and application development with a strong emphasis on testing and operational security.",
      "Implemented real-time driver tracking on maps using WebSocket and library such as Pusher and data analytics to optimize delivery efficiency and customer satisfaction.",
      "Reviewed and debugged code written by team members, adhering to architecture standards and best practices",
      "Led a team of four developers, ensuring best practices in application performance, security, and applied continuous delivery methods using tools like Jenkins.",
      "Customized CSS frameworks such as Chakra UI, delivering responsive and accessible web applications.",
      "Worked on latest HTML5 along with the semantics and CSS, typescript.",
    ],
  },
  {
    id: 1,
    name: "Mindtree Ltd",
    jobRole: "Software Engineer",
    yearOfService: "Jan 2017 - Aug 2020",
    tasks: [
      "Developed a multi-tenant web app using React, Styled Components, and GraphQL using Apollo Client, maintaining high performance and operational stability.",
      "Applied strong knowledge of JavaScript and web frameworks to deliver robust and scalable front-end solutions.",
      "Revised, modularized, and upgraded legacy codebases to align with modern development standards, improving maintainability and security.",
      "Led initiatives to implement automated testing strategies, including unit, component, and end-to-end tests, ensuring comprehensive test coverage above 85%.",
      "Integrated accessibility features to accommodate differently-abled users, enhancing functionality and reducing operating costs.",
    ],
  },
];

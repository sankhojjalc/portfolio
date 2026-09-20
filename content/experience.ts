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
      "Developing AI-powered capabilities for a secure internet banking application supporting cross-border transactions between India and Russia, including a RAG-powered chatbot for customer and operational queries with sub-2-second response targets and integration into a React-based micro-frontend architecture.",
      "Designing a multi-agent compliance and fraud-triage system where a supervisor agent routes cases to specialised agents for KYC document verification, transaction-risk analysis, fraud assessment, and regulatory-policy retrieval, with human-in-the-loop approvals and end-to-end auditability.",
      "Leading development of GigaOCR, a multimodal document-intelligence solution for extracting and structuring information from scanned documents, images, handwritten forms, and invoices using Hugging Face Transformers, olmOCR, vLLM, and Qwen3-VL.",
      "Building and optimising LLM and multimodal inference pipelines, focusing on prompt engineering, structured extraction, response latency, model serving, output validation, and integration with downstream banking workflows.",
      "Integrating AI services into customer-facing banking interfaces using React, building reusable UI components for chatbot interactions, document processing, agent status flows, and human-review workflows while maintaining security and usability standards."


    ],
  },
  {
    id: 3,
    name: "Publicis Sapient",
    jobRole: "Senior Associate Engineer",
    yearOfService: "Aug 2021 - Dec 2024",
    tasks: [
      "Led end-to-end delivery of scalable, config-driven React applications for a UK e-commerce client, owning requirements, sprint planning, frontend architecture, module design, task delegation, code reviews, and integration of AI/data-driven capabilities.",
      "Designed and integrated API-driven intelligence layers by connecting financial analytics and business data services with the e-commerce application, transforming raw backend data into meaningful KPIs, trends, and actionable insights through interactive dashboards and frontend visualizations for business owners and leadership.",
      "Built reusable frontend components and integration workflows for intelligent e-commerce experiences, enabling the application to consume analytics and AI-ready services while maintaining a scalable, modular architecture.",
      "Optimized SEO, rendering, and application performance, contributing to a 42% increase in traffic and 37% faster page loads, while maintaining healthy Core Web Vitals across mobile and desktop.",
      "Delivered a mobile-first, accessible React PWA and improved product reliability through performance improvements, data-driven fixes, and automated unit testing using Jest and React Testing Library."
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

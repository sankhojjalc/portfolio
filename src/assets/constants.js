const DESKTOP = "DESKTOP";
const MOBILE = "MOBILE";
export const userName = "Sankhojjal Chatterjee";
export const greetings = "Hello, I'm";
export const downloadCV = "Download CV";
export const contactInfo = "Contact Info";
export const linkedInUrl = "https://linkedin.com/in/sankhojjalchatterjee";
export const githubUrl = "https://github.com/sankhojjalc";
export const gaTagId = "G-DJZE892FRP";
export const designations = [
  "Senior Software Engineer",
  "Full-Stack Developer",
  "Frontend Developer",
  "ReactJS Developer",
  "NextJs Developer",
  "NodeJs Developer",
];
export const gaCategories = {
  navigation: "NAVIGATION",
  viewResume: "VIEW_RESUME",
  viewContactInfo: "ViEW_CONTACT",
  viewGithub: "VIEW_GITHUB",
  viewLinkedIn: "VIEW_LINKEDIN",
  interactedWithCompanyIcon: "INTERACTED_WITH_COMPANY_ICON",
  companyModalViewed: "OPENED_COMPANY_MODAL",
};
export const navLinksDesktop = [
  {
    name: "About",
    path: "#about",
    category: gaCategories.navigation,
    action: gaCategories.navigation + DESKTOP,
  },
  {
    name: "WorkEx",
    path: "#experience",
    category: gaCategories.navigation,
    action: gaCategories.navigation + DESKTOP,
  },
  {
    name: "Skills",
    path: "#skills",
    category: gaCategories.navigation,
    action: gaCategories.navigation + DESKTOP,
  },
  {
    name: "Contacts",
    path: "#contact-me",
    category: gaCategories.navigation,
    action: gaCategories.navigation + DESKTOP,
  },
  // { name: "Projects", path: "#projects" },
];
export const navLinksMobile = [
  {
    name: "About",
    id: 1,
    path: "#about",
    category: gaCategories.navigation,
    action: gaCategories.navigation + MOBILE,
  },
  {
    name: "WorkEx",
    id: 2,
    path: "#experience",
    category: gaCategories.navigation,
    action: gaCategories.navigation + MOBILE,
  },
  {
    id: 3,
    name: "Skills",
    path: "#skills",
    category: gaCategories.navigation,
    action: gaCategories.navigation + MOBILE,
  },
  {
    id: 4,
    name: "Contact Me",
    path: "#contact-me",
    category: gaCategories.navigation,
    action: gaCategories.navigation + MOBILE,
  },
];
export const listOfOrganizations = [
  {
    id: 1,
    name: "Mindtree Ltd",
    imagePath: "/mindtree.png",
    jobRole: "Software Engineer",
    yearOfService: "Jan 2017 - Aug 2020",
    tasks: [
      "✅️Developed a multi-tenant web app using React, Styled Components, and GraphQL using Apollo Client, maintaining high performance and operational stability.",
      "✅️Applied strong knowledge of JavaScript and web frameworks to deliver robust and scalable front-end solutions.",
      "✅️Revised, modularized, and upgraded legacy codebases to align with modern development standards, improving maintainability and security.",
      "✅️Led initiatives to implement automated testing strategies, including unit, component, and end-to-end tests, ensuring comprehensive test coverage above 85%.",
      "✅️Integrated accessibility features to accommodate differently-abled users, enhancing functionality and reducing operating costs.",
    ],
    skills: [],
  },
  {
    id: 2,
    name: "Josh Software Pvt Ltd",
    imagePath: "/josh.png",
    jobRole: "Senior Software Developer",
    yearOfService: "Aug 2020 - Aug 2021",
    tasks: [
      "✅️Designed and developed full-stack solutions for a leading Indian food delivery startup, focusing on performance optimization and operational stability.",
      "✅️Delivered system design and application development with a strong emphasis on testing and operational security.",
      "✅️Implemented real-time driver tracking on maps using WebSocket and library such as Pusher and data analytics to optimize delivery efficiency and customer satisfaction.",
      "✅️Reviewed and debugged code written by team members, adhering to architecture standards and best practices",
      "✅️Led a team of four developers, ensuring best practices in application performance, security, and applied continuous delivery methods using tools like Jenkins.",
      "✅️Customized CSS frameworks such as Chakra UI, delivering responsive and accessible web applications.",
      "✅️Worked on latest HTML5 along with the semantics and CSS, typescript.",
    ],
    skills: [],
  },
  {
    id: 3,
    name: "Publicis Sapient",
    imagePath: "/publicisSapient.png",
    jobRole: "Senior Associate Engineer",
    yearOfService: "Aug 2021 - Present",
    tasks: [
      "✅️Leading the development of scalable, config-driven React Applications for a UK-based E-commerce client.",
      "✅️Streamlined operational efficiency by identifying areas for improvement, proposed actionable solutions, and wrote unit test cases with Jest and React Testing Library.",
      "✅️Integrated various APIs, including financial data analytics tools, to provide better insights for business owners and leadership teams.",
      "✅️Optimized SEO and enhanced website performance, leading to a 42% increase in traffic and a 37% improvement in page load times.",
      "✅️Gathered business requirements directly from stakeholders, conducted sprint planning, broke down tasks, assigned tasks, tracked project status, reviewed code, and designed modules.",
      "✅️Developed the application using a mobile-first approach, ensured accessibility with React PWA, and optimized, while maintaining web vitals for both mobile and desktop devices.",
    ],
    skills: [],
  },
];
export const contactMe = [
  {
    key: 1,
    data: {
      isImage: false,
      isTelephone: true,
      iconName: "phoneIcon",
      description: "+917003889627",
    },
  },
  {
    key: 2,
    data: {
      isImage: false,
      iconName: "mailIcon",
      description: "sankhojjal@gmail.com",
    },
  },
  {
    key: 3,
    data: {
      isImage: true,
      src: "https://img.icons8.com/color/48/linkedin.png",
      altText: "linkedIn-sankhojjal",
      description: "/sankhojjalchatterjee",
      style: "w-8 lg:w-10 h-8 lg:h-10",
    },
  },
];

const DESKTOP = "DESKTOP";
const MOBILE = "MOBILE";
export const userName = "Sankhojjal Chatterjee";
export const greetings = "Hello, I'm";
export const downloadCV = "Download CV";
export const contactInfo = "Contact Info";
export const linkedInUrl = "https://linkedin.com/in/sankhojjalchatterjee";
export const githubUrl = "https://github.com/sankhojjalc";
export const gaCategories = {
  navigation: "NAVIGATION",
  viewResume: "VIEW_RESUME",
  viewContactInfo: "ViEW_CONTACT",
  viewGithub: "VIEW_GITHUB",
  viewLinkedIn: "VIEW_LINKEDIN",
  interactedWithCompanyIcon: "INTERACTED_WITH_COMPANY_ICON",
  companyModalViewed: "OPENED_COMPANY_MODAL",
};
export const navLinks = [
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
export const listOfOrganizations = [
  {
    id: 1,
    name: "Mindtree Ltd",
    imagePath: "/mindtree.png",
    jobRole: "Software Engineer",
    yearOfService: "Jan 2017 - Aug 2020",
    tasks: [
      "Worked as Full stack junior developer in the domain of Travel, Transportation and Hospitality.",
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
      "Developed a robust React application for a leading Indian food delivery startup",
      "Developed live tracking of food delivery agents into the applications using WebSocket APIs. Eg: Pusher.",
      "Developed feature for live update of food status to the customer.",
      "Implemented pages such as for login, search, promotions, product details page, etc.",
      "Developed auto read SMS for mobile users which led to 33% more customer retention.",
      "Led a small team of developers, assigning tasks to the team and discussing the best approach for given problem statements/stories.",
      "Worked on latest HTML5 along with the semantics and CSS, typescript.",
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
      "Developing and scalable React Applications for their E-Commerce application, which includes writing innumerable atomic components and then integrating those to make large scale components.",
      "Integrating various Advertisement APIs into applications. Eg: Criteo, GAM, etc.",
      "Integrating several analytics tools such as Adobe Market Cloud for getting business insights.",
      "Integrating payment gateways such as Ingenico, Zain cash for payments on various applications.",
      "SEO optimization and performance of website which led to 42% increment in traffic with 37% increase on page load and several web vitals.",
      "Developing webpage with both LTR and RTL and i18n features.",
      "Performing in-depth and thorough code reviews of peer developers before merging into code of version control like Git.",
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

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  DotNet,
  html,
  css,
  reactjs,
  ChatBot,
  VueJs,
  Sql,
  Oracle,
  git,
  meta,
  starbucks,
  Weather,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  PRform,
  hamza,
  LeaveApp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "Education",
  //   title: "Education",
  // },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Dot Net Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "DotNet MVC",
    icon: DotNet,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Vue-Js",
    icon: VueJs,
  },
  {
    name: "SQL-Server",
    icon: Sql,
  },
  {
    name: "Oracle DB",
    icon: Oracle,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software /Web Developer",
    company_name: "Saif Group",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Worked on different Software. Developed “Document Management System” from scratch in which I used Dotnet MVC with Csharp, JavaScript, Vue-JS.",
      "Learned Detailed knowledge about procurement. Implemented some testing forms in Feeds-ERP SQA testing side by side.",
      "Worked on Oracle SQL Developer and SQL Server",
      "learning and implementing React js applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data miner",
    company_name: "Shiphype",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2020 - October 2020",
    points: [
      "Acted as an overseas employee of the company.",
      "Scraped & sorted the data of Retailers over the world.",
    ],
  },
  {
    title: "Content Writer",
    company_name: "Freelancing",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " 2020 - 2022",
    points: [
      "Developed related content for multiple platforms, such as websites, email marketing, product descriptions, videos, and blogs.",
      "Used search engine optimization (SEO) strategies in writing to maximize the online visibility of a website in search results.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Madiha is a problem-solver who goes the extra mile to meet deadlines and surpass expectations. She's an asset to any team and consistently foster a positive and collaborative work environment.",
    name: "Hamza Kiyani",
    designation: "Project Manager",
    company: "Face 44",
    image: hamza,
  },
  {
    testimonial:
      "Madiha Ashraf is very passionate and has great vision for her work. Her focus keeps everything  smoothly, and makes sure that whatever project she is working on meets the highest standards.",
    name: "Uroosa Kanwal",
    designation: "Web Developer",
    company: "Saif Group",
  },

];

const projects = [
  {
    name: "Purhase Requisition Form",
    description:
      "Web-based Purchase Requisition form for a software called ERP-Feeds that allows users to request item, including its description, quantity, Condtions, delivery timeline, and Specificatrion. It also Displays saved record in the data table where a user can perform CRUD operations ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Json",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: PRform,
    source_code_link: "https://github.com/MadihaAshraf/PR-React-Form/",
  },
  {
    name: "Chat Bot",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ChatBot,
    source_code_link: "https://github.com/MadihaAshraf/Chat-Bot/",
  },
  {
    name: "Weather Application",
    description:
      "Created a weather application that utilizes open APIs to provide real-time weather information and forecasts to users.",
    tags: [
      {
        name: "React-Js",
        color: "blue-text-gradient",
      },
      {
        name: "React-bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: Weather,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Leave Managment System",
    description:
      "A digital solution designed to streamline and automate the process of managing employee leave requests. It enables employees to submit leave applications, provides supervisors with tools to review and approve requests,and maintains a centralized record of leave data, simplifying the overall leave management process for organizations", 

    tags: [
      {
        name: "React-Js",
        color: "blue-text-gradient",
      },
      {
        name: "Node-Js",
        color: "green-text-gradient",
      },
      {
        name: "SQL-Server",
        color: "pink-text-gradient",
      },
    ],
    image: LeaveApp,
  },
  // {
  //   name: "Admin Dashboard",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };

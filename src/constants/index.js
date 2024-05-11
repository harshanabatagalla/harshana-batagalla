import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    ico99x,
    stc,
    uom,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Trainee Software Engineer",
      company_name: "99x",
      icon: ico99x,
      iconBg: "#fff",
      date: "January 2024 - July 2024",
      points: [
        "Joined a six-month internship during my third year as an undergraduate.",
        "Contributed to the development of new features, including the homepage, and enhancements for the 99x official website (https://99x.io), a CMS-based website built using Gatsby.",
        "Worked on the project portal of the company, a web application developed using Angular, .Net, and EF Core.",
        "Engaged in both front-end and back-end development of the project portal, gaining professional experience in Angular, .Net, EF Core, and SQL Server. ",
        "Collaborated with cross-functional teams, including designers, product managers, marketing personnel, and other developers, to create high-quality products.",
      ]  
    }
  ];
  const educations = [
    {
      title: "BSc.(Hons.) in Information Technology ( 2025 Expected )",
      company_name: "University of Moratuwa",
      icon: uom,
      iconBg: "#fff",
      date: "june 2021 - present",
      description: "Currently pursuing a BSc. (Hons.) in Information Technology, actively engaging in coursework and practical projects to enhance skills for impactful contributions in the dynamic tech industry."
    },
    {
      title: "G.C.E. A/L (Physical Science Stream)",
      company_name: "St. Thomas' College, Matale.",
      icon: stc,
      iconBg: "#fff",
      date: "2017-2019",
      description: "Completed Advanced Levels with a Z score of 1.6323. Studied Physics, Combined Mathematics , and Information and Communication Technology as main subjects."
    },
    {
      title: "G.C.E. O/L",
      company_name: "St. Thomas' College, Matale.",
      icon: stc,
      iconBg: "#fff",
      date: "2011 - 2016",
      description: "Completed with a score of 9 A-grades. My optional subjects were Geography, Eastern Music and ICT."
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, educations };
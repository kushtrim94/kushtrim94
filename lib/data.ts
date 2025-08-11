import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPersonChalkboard } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import goconfImg from "@/public/goconfImg.png";
import roteraImg from "@/public/roteraImg.png";
import myportfolioImg from "@/public/myportfolioImg.png";
import goconfadminImg from "@/public/goconfadminImg.png";
import nicheBotWidgetImg from "@/public/niche-bot.png";
import premiumCashBuyersImg from "@/public/pcb.png";
import nicheMastermindImg from "@/public/niche-mastermind.png";
import nicheDatabaseAdminImg from "@/public/niche-admin.png";
import dbarberImg from "@/public/dbarber.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    name: "Key Innovative Solutions",
    title: "Frontend Developer",
    location: "Debar, North Macedonia",
    description:
      "Built and maintained over 20 web apps for specific industries using React, Next.js, and TypeScript, writing clean and scalable code. Made websites more user-friendly and mobile-friendly, which helped increase user retention by 30%. Worked closely with designers to turn wireframes into accurate and accessible web pages. Improved app speed by 40% by using techniques like lazy loading and better state management. Added tools like Google Tag Manager to track users and boost SEO, leading to a 25% rise in organic traffic. Collaborated in an agile team, joining daily meetings and planning sessions, helping us deliver features 20% faster than planned.",
    icon: React.createElement(FaReact),
    date: "Aug 2024 - present",
  },
  {
    name: "Niche Solutions",
    title: "Client Project - Frontend Developer",
    location: "United States (Remote)",
    description:
      "As part of Key Innovative Solutions, I work on projects for Niche Solutions, developing innovative tools at the intersection of real estate, education, data, and software. I create user-friendly solutions that empower professionals in niche markets, driving growth and efficiency through advanced technology.",
    icon: React.createElement(FaPersonChalkboard),
    date: "Aug 2024 - present",
  },
  {
    name: "Digital School Macedonia",
    title: "Programming Instructor",
    location: "Debar,North Macedonia",
    description:
      "Instructed youth in tech education,Emphasized core programming skills,taught accredited courses.",
    icon: React.createElement(FaPersonChalkboard),
    date: "2023 - present",
  },
  {
    name: "GoConf",
    title: "React Developer",
    location: "Debar,North Macedonia",
    description:
      "As a React Developer at GoConf, I am actively contributing to the renement of  the user interface on the premier ICT conference discovery platform. My current role involves leveraging React.js to optimize frontend components, ensuring a  seamless and user-friendly experience for our audience.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    name: "Rottera Software Solution",
    title: "Frontend Developer",
    location: "Debar,North Macedonia",
    description:
      " As a Frontend Developer at Rottera Software, I contribute my skills to a vibrant team dedicated to excellence in software development. Our versatile projects include websites and mobile apps, with an ongoing exploration of new opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - 2024",
  },
  {
    name: "A1 Group",
    title: "Indirect Sale",
    location: "Debar, North Macedonia",
    description:
      "Managed indirect sales operations, including customer acquisition and relationship management.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "D Barber Shop - Modern Appointment Management Platform",
    description:
      "As a Full-Stack Developer, I architected and built a comprehensive barbershop appointment management system that revolutionizes how clients book services and how businesses manage their operations. Working independently, I developed the entire platform from concept to production deployment, creating a modern web application that serves as both a client-facing booking portal and a sophisticated admin management system. The platform transforms traditional barbershop operations through intelligent appointment scheduling, real-time availability checking, and automated workflow management. I solved complex challenges including Google Calendar bidirectional synchronization, guest booking systems without authentication barriers, and multilingual content delivery. The system features advanced Row Level Security (RLS) policies, comprehensive email notification workflows, and mobile-first responsive design that provides native app-like experiences across all devices.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Google Calendar API",
      "Resend API",
      "Framer Motion",
      "Row Level Security",
      "Next-Intl",
    ],
    imageUrl: dbarberImg,
    projectUrl: "https://dbarber.it",
  },
  {
    title: "Niche Mastermind",
    description:
      "As a Frontend Developer, I built a sophisticated real estate coaching platform that connects investors through interactive events and seamless onboarding experiences. I developed dynamic landing pages for mastermind events, created a multi-step client onboarding system with progress tracking, and implemented responsive video components with custom controls and thumbnail navigation. I focused on building reusable React components with TypeScript, integrating Calendly scheduling modals, and creating smooth user experiences across desktop and mobile devices. The platform features interactive video swipers, animated loading states, form validation, and a mobile-first responsive design using Tailwind CSS.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Swiper.js",
      "Headless UI",
    ],
    imageUrl: nicheMastermindImg,
    projectUrl: "https://www.getnichenow.com/",
    githubUrl: null,
  },
  {
    title: "Niche Bot Widget",
    description:
      "As a Frontend Developer, I built an intelligent AI-powered chat widget that transforms any website into a customer support platform. Working with our team, we created the entire Niche Bot system from scratch, including the custom AI backend. I focused on developing a universal integration solution using Web Components and Shadow DOM, ensuring seamless compatibility across all web frameworks and platforms with just a single line of code.",
    tags: ["React", "TypeScript", "Web Components", "WebSockets", "Tailwind"],
    imageUrl: nicheBotWidgetImg,
    projectUrl: "https://niche-bot.vercel.app/",
    githubUrl: null,
  },
  {
    title: "Premium Cash Buyers - Real Estate Platform",
    description:
      "As a Frontend Developer, I built a comprehensive real estate landing platform that converts homeowners into cash sale leads through optimized user experiences and advanced SEO implementation. Working independently, I developed the entire frontend ecosystem from multi-step forms to dynamic content management, focusing on performance and search engine visibility. I solved critical Google Search Console video indexing issues by implementing comprehensive VideoObject structured data, created dedicated watch pages, and built video sitemaps that improved discoverability. The platform features responsive design across 51+ static pages, location-based dynamic content, and a scalable blog system with category routing.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "SEO/Structured Data",
      "Responsive Design",
    ],
    imageUrl: premiumCashBuyersImg,
    projectUrl: "https://premiumcashbuyers.com/",
    githubUrl: null,
  },
  {
    title: "Niche Database Admin - Web Scraping Management Platform",
    description:
      "As a Frontend Developer, I built a comprehensive administrative dashboard for managing large-scale web scraping operations that process public notices and legal documents. Working independently, I developed the entire user interface from authentication flows to real-time analytics, focusing on user experience and responsive design. I implemented dynamic data visualization components for monitoring parser performance, intuitive CRUD interfaces for managing data sources and users, and a sophisticated educational bot monitoring system. The platform features multi-view data presentation options and real-time statistics visualization displaying metrics from millions of legal notices including foreclosures, tax sales, and probate records.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "SWR",
      "React Hook Form",
      "Zod",
      "Radix UI",
    ],
    imageUrl: nicheDatabaseAdminImg,
    projectUrl: "https://admin.niche-db.com/",
    githubUrl: null,
  },
  {
    title: "GoConf",
    description:
      " As a React Developer at GoConf, I am actively contributing to the renement of the user interface on the premier ICT conference discovery platform.",
    tags: ["React", "React Router", "Chakra Ui"],
    imageUrl: goconfImg,
    projectUrl: "https://goconf.io/",
    githubUrl: null,
  },
  {
    title: "GoConf Admin",
    description:
      "As a Developer at GoConf, I extended my expertise to the creation of streamlined admin panels. I focused on optimizing frontend components, ensuring efficient navigation, and enhancing the overall usability of admin interfaces for diverse projects within the GoConf platform.",
    tags: ["React", "Chakra Ui"],
    imageUrl: goconfadminImg,
    projectUrl: "https://admin.goconf.io",
    githubUrl: null,
  },
  {
    title: "Rottera",
    description:
      " My role specically involves frontend development, specializing in UI5, as part of our comprehensive approach covering Mobile, Backend, Database, and DevOps domains.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: roteraImg,
    projectUrl: "https://rottera.io",
    githubUrl: null,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Built a fully-fledged personal portfolio website utilizing the latest technologies:",
    tags: ["React", "Typescript", "Next.js", "Tailwind", "Framer", "Vercel"],
    imageUrl: myportfolioImg,
    projectUrl: "https://kushtrimmarke.dev",
    githubUrl: "https://github.com/kushtrimmarke/kushtrim-portfolio",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "GraphQL",
  "Framer Motion",
  "Material UI",
  "Bootstrap",
  "Styled Components",
  "Google Tag Manager",
  "Google Analytics",
  "Google Ads",
  "Shadn UI",
  "Chakra UI",
  "React Bootstrap",
  "SQL (My SQL)",
  "WordPress",
  "Vercel",
  "Firebase",
  "Bitbucket",
  "Gitlab",
  "Headless UI",
] as const;

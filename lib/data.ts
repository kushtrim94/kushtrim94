import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaPersonChalkboard } from 'react-icons/fa6';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import goconfImg from '@/public/goconfImg.png';
import roteraImg from '@/public/roteraImg.png';
import myportfolioImg from '@/public/myportfolioImg.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    name: 'Digital School Macedonia',
    title: 'Instructor',
    location: 'Debar,North Macedonia',
    description:
      'Instructed youth in tech education,Emphasized core programming skills,taught accredited courses.',
    icon: React.createElement(FaPersonChalkboard),
    date: '2023 - present',
  },
  {
    name: 'GoConf',
    title: 'React Developer',
    location: 'Debar,North Macedonia',
    description:
      'As a React Developer at GoConf, I am actively contributing to the renement of  the user interface on the premier ICT conference discovery platform. My current role involves leveraging React.js to optimize frontend components, ensuring a  seamless and user-friendly experience for our audience.',
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
  {
    name: 'Rottera Software Solution',
    title: 'Frontend Developer',
    location: 'Debar,North Macedonia',
    description:
      ' As a Frontend Developer at Rottera Software, I contribute my skills to a vibrant team dedicated to excellence in software development. Our versatile projects include websites and mobile apps, with an ongoing exploration of new opportunities.',
    icon: React.createElement(FaReact),
    date: '2022 - present',
  },
  {
    name: 'A1 Group',
    title: 'Indirect Sale',
    location: 'Debar, North Macedonia',
    description:
      'Managed indirect sales operations, including customer acquisition and relationship management.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    name: 'South East European University',
    title: 'Bachelor of Science In Computer Sciences',
    location: 'Tetovo,North Macedonia',
    description:
      'I graduated after 3 years of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2017',
  },
] as const;

export const projectsData = [
  {
    title: 'GoConf',
    description:
      ' As a React Developer at GoConf, I am actively contributing to the renement of the user interface on the premier ICT conference discovery platform.',
    tags: ['React','React Router', 'Chakra Ui'],
    imageUrl: goconfImg,
  },
  {
    title: 'Rottera',
    description:
      ' My role specically involves frontend development, specializing in UI5, as part of our comprehensive approach covering Mobile, Backend, Database, and DevOps domains.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    imageUrl: roteraImg,
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Built a fully-fledged personal portfolio website utilizing the latest technologies:',
    tags: ['React', 'Typescript', 'Next.js', 'Tailwind', 'Framer', 'Vercel'],
    imageUrl: myportfolioImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
  'Tailwind',
  'Prisma',
  'GraphQL',
  'Framer Motion',
  'Material UI',
  'Chakra UI',
  'React Bootstrap',
  'Vercel',
  'Firebase',
] as const;

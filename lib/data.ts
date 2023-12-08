import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaPersonChalkboard } from 'react-icons/fa6';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

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
    name: 'Digital School',
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
      'Contributor to the development and maintenance of web application, specializing in React.',
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
  {
    name: 'Rottera Software Solution',
    title: 'Frontend Developer',
    location: 'Debar,North Macedonia',
    description:
      'Collaborate with the development team to design and implement user interfaces for web applications using React.',
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
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
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

'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        I'm Kushtrim Marke, a React developer with 3 years of experience.{' '}
        <span className='font-medium'>I'm passionate</span> about creating
        responsive web solutions and optimizing user experiences.I'm always
        looking to learn new technologies and grow as a{' '}
        <span className='font-medium'>developer</span>.{' '}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className='font-medium'>React, Next.js</span>. I am also
        familiar with
        <span className='font-medium'>TypeScript and Prisma. </span> I am
        currently looking for a{' '}
        <span className='font-medium'>full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy playing
        basketball<span className='font-medium'></span>.{' '}
        <span className='font-medium'>
          "Tech-savvy developer by day basketball enthusiast by night."
        </span>{' '}
        I thrive on the challenges of coding and find joy in the camaraderie of
        a team sport. Dedicated to continuous learning and growth, both on and
        off the court.
      </p>
    </motion.section>
  );
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Kushtrim Marke, a{" "}
        <span className="font-medium">Full-Stack Developer</span> with
        <span className="font-medium"> 4+ years of experience</span> building
        scalable web applications. Currently working at{" "}
        <span className="font-medium">Key Innovative Solutions</span>, I
        specialize in creating high-performance, user-friendly solutions that
        drive real business results. I've successfully{" "}
        <span className="italic">increased user retention by 30%</span> and
        <span className="italic">improved app performance by 40%</span> through
        strategic optimization.
      </p>

      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is
        solving complex problems and seeing the immediate impact on user
        experience. I <span className="underline">thrive</span>
        on turning challenging requirements into elegant, maintainable
        solutions. My core expertise includes{" "}
        <span className="font-medium">React, Next.js, TypeScript</span>, and
        modern development practices including{" "}
        <span className="font-medium">
          performance optimization, SEO, and analytics integration
        </span>
        .
      </p>

      <p>
        I'm passionate about{" "}
        <span className="font-medium">continuous learning</span> and staying
        current with industry trends. Whether working on client projects for
        US-based companies or building innovative tools for niche markets, I
        bring both technical excellence and business understanding to every
        project.{" "}
        <span className="italic">Always eager to tackle new challenges</span>{" "}
        and contribute to impactful projects.
      </p>
    </motion.section>
  );
}

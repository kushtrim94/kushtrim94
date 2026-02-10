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
        I&apos;m Kushtrim Marke, a Frontend Developer with{" "}
        <span className="font-medium">5+ years of experience</span> building
        scalable, high-performance web applications. I specialize in{" "}
        <span className="font-medium">React, Next.js, and TypeScript</span>,
        crafting modern, accessible interfaces with a strong focus on{" "}
        <span className="font-medium">
          performance, SEO, responsive design, and analytics-driven improvements
        </span>
        .
      </p>

      <p className="mb-3">
        I enjoy turning complex requirements into clean, maintainable,
        production-ready solutions—whether that means designing reusable
        component systems, optimizing rendering and loading speed, or improving
        user flows end-to-end. I work comfortably in Agile, cross-functional
        teams, partnering closely with designers, product, and backend engineers
        to ship reliable features that move the product forward.
      </p>

      <p>
        I&apos;m passionate about continuous learning and modern frontend best
        practices, and I&apos;m always excited to contribute to products that
        deliver real value to users.
      </p>
    </motion.section>
  );
}

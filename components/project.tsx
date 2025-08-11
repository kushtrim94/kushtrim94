"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group h-full"
    >
      <div className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden h-full flex flex-col hover:bg-gray-200 transition-all duration-300 dark:bg-white/10 dark:hover:bg-white/20 hover:shadow-lg">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${title} project screenshot`}
            quality={95}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                aria-label={`Visit ${title} project`}
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                aria-label={`View ${title} source code`}
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed mb-4 flex-grow line-clamp-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 4).map((tag, index) => (
              <span
                className="bg-black/[0.7] px-2 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="text-gray-500 dark:text-white/50 text-xs self-center">
                +{tags.length - 4} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-auto">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 dark:bg-white/20 text-white text-xs rounded-lg hover:bg-gray-700 dark:hover:bg-white/30 transition-colors duration-200 flex-1 justify-center"
              >
                <FiExternalLink className="w-3 h-3" />
                View Project
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-gray-600 dark:bg-white/10 text-white text-xs rounded-lg hover:bg-gray-500 dark:hover:bg-white/20 transition-colors duration-200 flex-1 justify-center"
              >
                <FiGithub className="w-3 h-3" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

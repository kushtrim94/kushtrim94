"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [showAllTags, setShowAllTags] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const maxVisibleTags = 4;
  const visibleTags = showAllTags ? tags : tags.slice(0, maxVisibleTags);
  const remainingCount = tags.length - maxVisibleTags;

  const maxDescriptionLength = 200;
  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + "..."
      : description;
  const displayDescription = showFullDescription
    ? description
    : truncatedDescription;
  const shouldShowReadMore = description.length > maxDescriptionLength;

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
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            {title}
          </h3>

          <div className="mb-4 flex-grow">
            <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed">
              {displayDescription}
            </p>
            {shouldShowReadMore && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-blue-600 dark:text-blue-400 text-xs font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 mt-2"
              >
                {showFullDescription ? "Read less" : "Read more"}
              </button>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {visibleTags.map((tag, index) => (
              <span
                className="bg-black/[0.7] px-2 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </span>
            ))}
            {remainingCount > 0 && !showAllTags && (
              <button
                onClick={() => setShowAllTags(true)}
                className="bg-blue-600/80 hover:bg-blue-600 px-2 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full transition-colors duration-200"
              >
                +{remainingCount} more
              </button>
            )}
            {showAllTags && tags.length > maxVisibleTags && (
              <button
                onClick={() => setShowAllTags(false)}
                className="bg-gray-600/80 hover:bg-gray-600 px-2 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full transition-colors duration-200"
              >
                Show less
              </button>
            )}
          </div>

          {/* Action Button */}
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-gray-900 dark:bg-white/20 text-white text-xs rounded-lg hover:bg-gray-700 dark:hover:bg-white/30 transition-colors duration-200 justify-center mt-auto"
            >
              <FiExternalLink className="w-3 h-3" />
              View Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

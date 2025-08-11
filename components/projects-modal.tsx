"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCalendar, FiUser, FiBriefcase } from "react-icons/fi";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  const calendlyUrl = "https://calendly.com/kushtrimmarke12/available";
  const [showCalendly, setShowCalendly] = useState(false);

  // Listen for Calendly events
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data?.event && e.data.event.indexOf("calendly") === 0) {
        if (e.data.event === "calendly.event_scheduled") {
          // Meeting scheduled successfully
          setTimeout(() => {
            onClose();
            window.open("/projects", "_blank");
          }, 1500);
        }
      }
    };

    if (showCalendly) {
      window.addEventListener("message", handleCalendlyEvent);
    }

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, [showCalendly, onClose]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowCalendly(false);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <FiCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Schedule a Meeting
                  </h2>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    View exclusive projects
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <FiX className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className={showCalendly ? "h-[70vh]" : "auto"}>
              {!showCalendly ? (
                <div className="p-4">
                  <div className="text-center mb-4">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      View My Exclusive Projects Portfolio
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      I prefer to share my detailed project portfolio during a
                      personal conversation. This allows me to provide context
                      and discuss technical challenges.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="grid gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiBriefcase className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">
                          Detailed Project Walkthrough
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                          Architecture, challenges, and solutions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiUser className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">
                          Personalized Consultation
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                          Understanding your specific requirements
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setShowCalendly(true)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-center text-sm"
                    >
                      Schedule Meeting
                    </button>
                    <button
                      onClick={onClose}
                      className="px-4 py-2.5 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 text-sm font-medium"
                    >
                      Later
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-3">
                    15-30 minutes
                  </p>
                </div>
              ) : (
                <div className="w-full h-full">
                  <iframe
                    src={calendlyUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule a meeting with Kushtrim"
                    className="rounded-b-xl"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

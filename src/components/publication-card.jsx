"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaCalendar,
  FaUsers,
  FaChevronDown,
} from "react-icons/fa";

export default function PublicationCard({ publication, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="relative border-l-4 border-blue-500 bg-white dark:bg-[#242424] rounded-r-xl rounded-tl-sm p-5 shadow-sm hover:shadow-xl transition-shadow duration-400 overflow-hidden cursor-pointer group"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Subtle background glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated left bar on hover */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500"
          initial={{ scaleY: 0 }}
          whileHover={{ scaleY: 1 }}
          transition={{ duration: 0.3 }}
          style={{ originY: 0 }}
        />

        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 pr-3">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              {publication.title}
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
              <div className="flex items-center gap-1.5">
                <FaUsers className="text-blue-400" size={10} />
                <span>{publication.authors.join(", ")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCalendar className="text-blue-400" size={10} />
                <span>{publication.year}</span>
              </div>
            </div>

            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              {publication.venue}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                publication.type === "Conference"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                  : publication.type === "Dataset"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                    : "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
              }`}
            >
              {publication.type}
            </span>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400"
            >
              <FaChevronDown size={12} />
            </motion.div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {publication.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-md border border-gray-200 dark:border-gray-600/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable abstract */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-3 border-t border-gray-100 dark:border-gray-700/50 mt-1">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  {publication.abstract}
                </p>
                <motion.a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 border border-blue-200 dark:border-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaExternalLinkAlt size={10} /> View Publication
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!expanded && (
          <p className="text-xs text-gray-400 dark:text-gray-500 italic">
            Click to read abstract →
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

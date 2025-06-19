"use client"

import { motion } from "framer-motion"
import {  FaExternalLinkAlt, FaCalendar, FaUsers } from "react-icons/fa"

export default function PublicationCard({ publication, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="border-l-4 border-blue-500 bg-white dark:bg-[#2A2A2A] rounded-md p-4 shadow hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {publication.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <div className="flex items-center gap-1">
                <FaUsers className="text-xs" />
                <span>{publication.authors.join(", ")}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <FaCalendar className="text-xs" />
                <span>{publication.year}</span>
              </div>
              {/* <div className="flex items-center gap-1">
                <FaQuoteRight className="text-xs" />
                <span>{publication.citations} citations</span>
              </div> */}
            </div>
          </div>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${publication.type === "Journal" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>
            {publication.type}
          </span>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{publication.venue}</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{publication.abstract}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {publication.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {/* <a href={publication.pdfLink} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            <FaFileAlt className="w-3 h-3" /> PDF
          </a>
          <a href={publication.codeLink} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            <FaCode className="w-3 h-3" /> Code
          </a> */}
          <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            <FaExternalLinkAlt className="w-3 h-3" /> View
          </a>
        </div>
      </div>
    </motion.div>
  )
}

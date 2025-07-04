"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectCard({ title, description, image, video, tags, link, gitLink, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  const delay = index * 0.1

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#2A2A2A] shadow-lg"
    >

      {/* {tags?.includes("In Development") && (
        <div
          className="absolute top-8 left-24 z-20 px-4 py-2 transform -translate-x-1/2 -translate-y-1/2 
               font-semibold rounded-full shadow-lg 
               text-gray-900 
               bg-yellow-500 
               border-2 border-orange-500 
               animate-pulse">
          🚧 In Development
        </div>
      )} */}

      {tags?.includes("In Development") && (
        <div
          className="absolute top-8 left-24 z-20 px-4 py-2 transform -translate-x-1/2 -translate-y-1/2 
               font-semibold rounded-full shadow-md 
               text-gray-900 
               backdrop-filter backdrop-blur-md 
               border border-gray-500 dark:text-white">
          🛠 In Development
        </div>
      )}



      <div className="aspect-video overflow-hidden">
        {video ? (
          <motion.video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <motion.img
            src={image || "/placeholder.svg?height=200&width=400"}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
        )}

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"
          initial={{ opacity: 1 }} // Default: gradient is visible
          animate={{ opacity: isHovered ? 0 : 1 }} // On hover: fade out
          transition={{ duration: 0.3 }}
        />

      </div>

      <motion.div
        className="absolute top-0 right-0 m-4 z-10 flex gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {gitLink && (
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#2A2A2A] p-2 rounded-full shadow-lg"
            aria-label="GitHub Repository"
          >
            <Github size={16} className="text-orange-500" />
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#2A2A2A] p-2 rounded-full shadow-lg"
            aria-label="Live Project"
          >
            <ExternalLink size={16} className="text-orange-500" />
          </a>
        )}
      </motion.div>

      <div className="p-5 relative z-10">
        <motion.h3
          className="text-xl font-bold text-gray-800 dark:text-white mb-2"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}

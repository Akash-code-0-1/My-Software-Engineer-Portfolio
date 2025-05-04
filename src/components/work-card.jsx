"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface WorkCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  delay?: number
}

export default function WorkCard({ title, description, image, tags, link, delay = 0 }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
          <motion.div animate={{ rotate: isHovered ? 45 : 0 }} transition={{ duration: 0.3 }}>
            <ArrowUpRight className="text-orange-500" size={20} />
          </motion.div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>

      <motion.div
        className="absolute top-3 right-3 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100"
        initial={{ scale: 0.8 }}
        animate={{ scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <ExternalLink size={16} className="text-orange-500" />
      </motion.div>
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"

// Sample home projects data
const developmentProjects = [
  {
    id: 1,
    title: "Personal Blog",
    description: "A personal blog built with Next.js and MDX for sharing technical articles and tutorials.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 2,
    title: "Smart Home Dashboard",
    description: "A dashboard for controlling and monitoring smart home devices with real-time updates.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "IoT", "WebSockets"],
    link: "#",
  },
  {
    id: 3,
    title: "Recipe Collection",
    description: "A personal collection of recipes with search, filtering, and meal planning features.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Vue.js", "Firebase", "Progressive Web App"],
    link: "#",
  },
  {
    id: 4,
    title: "Home Budget Tracker",
    description: "A budget tracking application for personal finances with expense categorization and reports.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Chart.js", "Local Storage"],
    link: "#",
  },
]

export default function DevelopmentTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Home Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          Personal projects and experiments I've built at home. These projects reflect my interests and allow me to
          explore new technologies and creative ideas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6">
        {developmentProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}

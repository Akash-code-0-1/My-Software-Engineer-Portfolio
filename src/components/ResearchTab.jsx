"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"

// Sample team projects data
const researchProjects = [
  {
    id: 1,
    title: "Enterprise CRM",
    description:
      "A comprehensive customer relationship management system for enterprise clients with advanced analytics.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    link: "#",
  },
  {
    id: 2,
    title: "Healthcare Platform",
    description:
      "A healthcare management platform for hospitals and clinics with patient records and appointment scheduling.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Angular", "Express", "MongoDB", "Socket.io"],
    link: "#",
  },
  {
    id: 3,
    title: "Educational LMS",
    description:
      "A learning management system for educational institutions with course management and student tracking.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Django", "PostgreSQL", "AWS"],
    link: "#",
  },
  {
    id: 4,
    title: "Inventory Management",
    description: "An inventory management system for retail businesses with barcode scanning and reporting features.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Vue.js", "Laravel", "MySQL", "Redis"],
    link: "#",
  },
  {
    id: 5,
    title: "Team Collaboration Tool",
    description: "A team collaboration tool with task management, file sharing, and communication features.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "GraphQL", "MongoDB", "WebSockets"],
    link: "#",
  },
]

export default function ResearchTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Team Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          Collaborative projects I've worked on with talented teams. These projects demonstrate my ability to work
          effectively in team environments and contribute to complex, multi-faceted solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {researchProjects.map((project, index) => (
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

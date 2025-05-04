"use client"

import { motion } from "framer-motion";
import ProjectCard from "./project-card";
// import ProjectCard from "./project-card"

// Sample work data
const workProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website with animated transitions and dark mode support.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Firebase", "Material UI"],
    link: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data with interactive maps.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["JavaScript", "OpenWeather API", "Chart.js"],
    link: "#",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "A social media platform with user profiles, posts, comments, and real-time notifications.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React Native", "Express", "MongoDB", "Socket.io"],
    link: "#",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A fitness tracking application that monitors workouts, nutrition, and progress over time.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Flutter", "Firebase", "Google Fit API"],
    link: "#",
  },
]

export default function WorkTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Work</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          Explore my latest projects and professional work. These projects showcase my skills in web development,
          design, and problem-solving across various domains and technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workProjects.map((project, index) => (
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

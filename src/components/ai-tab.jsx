"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"

// Sample AI projects data
const aiProjects = [
  {
    id: 1,
    title: "AI Image Generator",
    description: "An AI-powered image generation tool that creates unique images based on text descriptions.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "OpenAI API", "Canvas", "WebGL"],
    link: "#",
  },
  {
    id: 2,
    title: "Sentiment Analysis Tool",
    description: "A sentiment analysis tool that analyzes text and determines the emotional tone with high accuracy.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "TensorFlow", "Flask", "React"],
    link: "#",
  },
  {
    id: 3,
    title: "Chatbot Platform",
    description: "An intelligent chatbot platform that provides natural language responses to user queries.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "GPT-4", "Vercel AI SDK", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 4,
    title: "Recommendation Engine",
    description: "A recommendation engine that suggests products or content based on user behavior and preferences.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "Scikit-learn", "FastAPI", "React"],
    link: "#",
  },
  {
    id: 5,
    title: "Voice Assistant",
    description: "A voice-controlled assistant that can perform tasks and answer questions through natural speech.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React Native", "TensorFlow.js", "WebSpeech API"],
    link: "#",
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "An AI-powered content generation tool for creating blog posts, product descriptions, and more.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    link: "#",
  },
]

export default function AiTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">AI Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          Artificial intelligence and machine learning projects I've developed. These projects showcase my expertise in
          cutting-edge AI technologies and their practical applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
        {aiProjects.map((project, index) => (
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

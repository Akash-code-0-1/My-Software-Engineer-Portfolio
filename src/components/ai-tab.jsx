"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"
import { SiTensorflow, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiOpencv, SiKeras, SiPython, SiJupyter } from "react-icons/si";
import { FaRobot } from "react-icons/fa";

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
      {/* Heading */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          <FaRobot className="inline-block text-purple-600 dark:text-purple-400 mr-2" />
          Artificial Intelligence
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          My journey in AI is about solving real-world problems using smart algorithms and deep learning models. From vision to language, I blend data with logic to build intelligent systems that matter.
        </p>
      </motion.div>

      {/* Skill Icons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {[SiPython, SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiNumpy, SiPandas, SiOpencv, SiJupyter].map((Icon, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-gray-700 dark:text-gray-200"
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <Icon size={40} />
            <span className="text-sm mt-1">{Icon.name.replace("Si", "")}</span>
          </motion.div>
        ))}
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

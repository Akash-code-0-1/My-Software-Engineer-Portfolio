"use client"

import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import { FaPython, FaJava } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";


const programmingProjects = [
  {
    id: 1,
    title: "Sorting Algorithm Visualizer",
    description:
      "An interactive visualizer for sorting algorithms like Bubble Sort, Merge Sort, and Radix Sort with speed control and animations for better understanding.",
    video: "/sortViz.mp4",
    tags: ["React", "CSS", "JavaScript", "Data Structures"],
    link: "https://sortingvisualizer-six.vercel.app/",
    gitLink: "https://github.com/Akash-code-0-1/SortViz",
  },
  {
    id: 2,
    title: "Graph Algorithm Visualizer",
    description:
      "A graph algorithm visualizer with support for BFS, DFS, and more. Built with dynamic UI controls and real-time pathfinding animations.",
    video: "/graph-visualizer.mp4",
    tags: ["Next.js", "Algorithms", "Graph Theory", "Tailwind CSS"],
    link: "https://graphalgorithmvisualizer.vercel.app/",
    gitLink: "https://github.com/Akash-code-0-1/Graph-Algorithms-Visualization",
  },
  {
    id: 3,
    title: "Code Execution Visualizer",
    description:
      "A code execution visualizer that simulates line-by-line code behavior with animations and real-world analogies, designed for beginners to understand how code flows.",
    video: "/code-visualizer.mp4",
    tags: ["React", "Tailwind", "JavaScript", "Education"],
    link: "https://sortingvisualizer-six.vercel.app/",
    gitLink: "https://github.com/Akash-code-0-1/SortViz",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website with animated transitions and dark mode support.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://sortingvisualizer-six.vercel.app/",
    gitLink: "https://github.com/Akash-code-0-1/SortViz",
  },
  {
    id: 5,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Firebase", "Material UI"],
    link: "https://sortingvisualizer-six.vercel.app/",
    gitLink: "https://github.com/Akash-code-0-1/SortViz",
  },
];

const languages = [
  {
    name: "C",
    icon: SiC,
    color: "text-blue-600", // Blue
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "text-indigo-600", // Indigo
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-500", // Yellow (top), blue (bottom)
  },
  {
    name: "Java",
    icon: FaJava,
    color: "text-red-600", // Red
  },
];


export default function ProgrammingTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <section className="py-10 lg:px-0">

          <h1 className="text-center lg:text-left text-3xl font-bold text-gray-900 dark:text-white mb-7">
            Programming
          </h1>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-center lg:text-left mb-6">
            Programming is more than a skill—it's a passion. I actively solve real-world problems through code and continually sharpen my skills on platforms like LeetCode, GitHub, and Codeforces. This section reflects my growth as a software engineer, showcasing consistency, problem-solving abilities, and a strong commitment to clean, efficient code.
          </p>

          {/* Animated Colorful Icons */}
          <motion.div
            className="flex justify-center lg:justify-start gap-10 flex-wrap mt-8 mb-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {languages.map((lang, index) => {
              const Icon = lang.icon;
              return (
                <motion.div
                  key={lang.name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.6, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center group"
                >
                  <Icon
                    size={50}
                    className={`${lang.color} transition-transform duration-300`}
                  />
                  <span className="text-sm mt-2 text-gray-700 dark:text-gray-200 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {lang.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* LeetCode Profile */}
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl p-4">
              <img
                src="https://assets.leetcode.com/users/TanvirAhmedAkash/avatar_1729030317.png" // Replace with your LeetCode avatar URL
                alt="LeetCode Profile"
                className="w-16 h-16 rounded-full border-2 border-yellow-500"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">LeetCode</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Explore my coding journey and problem-solving progress.</p>
                <a
                  href="https://leetcode.com/u/TanvirAhmedAkash/" // Replace with your LeetCode profile URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 dark:text-yellow-400 text-sm font-medium hover:underline"
                >
                  View Profile →
                </a>
              </div>
            </div>

            {/* GitHub Profile */}
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl p-4">
              <img
                src="https://avatars.githubusercontent.com/u/139063114?v=4" // GitHub auto-provides profile images
                alt="GitHub Profile"
                className="w-16 h-16 rounded-full border-2 border-gray-500"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">GitHub</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dive into my projects, contributions, and open-source work.</p>
                <a
                  href="https://github.com/Akash-code-0-1" // Replace with your GitHub profile URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 text-sm font-medium hover:underline"
                >
                  View Profile →
                </a>
              </div>
            </div>

            {/* Codeforces Profile */}
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl p-4">
              <img
                src="https://userpic.codeforces.org/3569247/title/bddbc81da28fd039.jpg" // Replace with your Codeforces avatar
                alt="Codeforces Profile"
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Codeforces</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Competitive programming, contests, and algorithmic thinking.</p>
                <a
                  href="https://codeforces.com/profile/tanvir_ah" // Replace with your Codeforces profile URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                >
                  View Profile →
                </a>
              </div>
            </div>
          </div>
        </section>

        <h1 className="text-center lg:text-left text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Projects
        </h1>


      </motion.div>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programmingProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            video={project.video}
            tags={project.tags}
            link={project.link}
            gitLink={project.gitLink}
            delay={index}
          />
        ))}
      </div>
    </motion.div>
  )
}

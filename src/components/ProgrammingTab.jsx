"use client";

import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const programmingProjects = [
  {
    id: 1,
    title: "Sorting Algorithm Visualizer",
    description:
      "An interactive visualizer for sorting algorithms like Bubble Sort, Merge Sort, and Radix Sort with speed control and animations for better understanding.",
    video: "/SortViz.mp4",
    tags: ["React", "CSS", "JavaScript", "Data Structures"],
    link: "https://sortingvisualizer-six.vercel.app/",
    gitLink: "https://github.com/Akash-code-0-1/SortViz",
  },
  {
    id: 2,
    title: "Graph Algorithm Visualizer",
    description:
      "A graph algorithm visualizer with support for BFS, DFS, and more. Built with dynamic UI controls and real-time pathfinding animations.",
    video: "/graph.mp4",
    tags: ["Next.js", "Algorithms", "Graph Theory", "Tailwind CSS"],
    link: "https://graphalgorithmvisualizer.vercel.app/",
    gitLink: "https://github.com/Akash-code-0-1/Graph-Algorithms-Visualization",
  },
  {
    id: 4,
    title: "Bus Ticket Management System",
    description:
      "A terminal-based bus ticket management system built using C++. It allows users to book, cancel, and view tickets with route and seat management.",
    video: "/busTicket.mp4",
    tags: ["C++", "OOP", "File Handling", "Linked List", "stack"],
    link: "",
    gitLink: "https://github.com/Akash-code-0-1/Bus-Ticket-Management-C-",
  },
  {
    id: 5,
    title: "Student Activity Planner",
    description:
      "A simple terminal-based student activity planner developed in C. It helps students manage their daily tasks, assignments, and schedules efficiently.",
    video: "/activityPlanner.mp4",
    tags: ["C", "Struct", "File Handling"],
    link: "",
    gitLink: "https://github.com/Akash-code-0-1/Student-Activity-Planner-C-",
  },
];

const languages = [
  {
    name: "C++",
    icon: SiCplusplus,
    color: "text-indigo-600 dark:text-indigo-400",
  },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProgrammingTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.section
        className="py-8 lg:px-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-center lg:text-left text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Programming
          </h1>
          <p className="text-gray-500 dark:text-gray-400 lg:text-[17px] max-w-3xl text-center lg:text-left mb-8 leading-relaxed">
            Programming is more than a skill—it's a passion. I actively solve
            real-world problems through code and continually sharpen my skills
            on platforms like LeetCode, GitHub, and Codeforces.
          </p>
        </motion.div>

        {/* Language icons */}
        <motion.div
          className="flex justify-center lg:justify-start gap-8 flex-wrap mb-10"
          variants={containerVariants}
        >
          {languages.map((lang) => {
            const Icon = lang.icon;
            return (
              <motion.div
                key={lang.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.5, y: 20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 300, damping: 18 },
                  },
                }}
                whileHover={{ scale: 1.2, y: -6 }}
                className="flex flex-col items-center group cursor-default"
              >
                <motion.div className="relative p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 transition-colors duration-300 shadow-sm group-hover:shadow-md">
                  <Icon size={36} className={lang.color} />
                </motion.div>
                <span className="text-xs mt-2 text-gray-600 dark:text-gray-400 font-semibold group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                  {lang.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Profile cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12"
          variants={containerVariants}
        >
          {/* LeetCode */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            className="flex items-center gap-4 bg-white dark:bg-[#242424] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg rounded-2xl p-4 transition-shadow duration-300 group"
          >
            <div className="relative">
              <img
                src="https://assets.leetcode.com/users/TanvirAhmedAkash/avatar_1729030317.png"
                alt="LeetCode Profile"
                className="w-14 h-14 rounded-xl border-2 border-yellow-400 object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-[8px] font-bold text-black">
                LC
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors">
                LeetCode
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 leading-tight">
                Problem solving & coding progress
              </p>
              <a
                href="https://leetcode.com/u/TanvirAhmedAkash/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 dark:text-yellow-400 text-xs font-semibold hover:underline inline-flex items-center gap-1"
              >
                View Profile →
              </a>
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            className="flex items-center gap-4 bg-white dark:bg-[#242424] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg rounded-2xl p-4 transition-shadow duration-300 group"
          >
            <div className="relative">
              <img
                src="https://avatars.githubusercontent.com/u/139063114?v=4"
                alt="GitHub Profile"
                className="w-14 h-14 rounded-xl border-2 border-gray-400 object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center text-[8px] font-bold text-white">
                GH
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors">
                GitHub
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 leading-tight">
                Projects, contributions & open-source
              </p>
              <a
                href="https://github.com/Akash-code-0-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 text-xs font-semibold hover:underline inline-flex items-center gap-1"
              >
                View Profile →
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-center lg:text-left text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
        >
          Projects
        </motion.h2>
      </motion.section>

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
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

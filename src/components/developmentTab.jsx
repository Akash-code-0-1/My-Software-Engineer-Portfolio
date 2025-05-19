"use client";

import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJavascript, SiMysql, SiGit } from "react-icons/si";


const webDevProjects = [
  {
    id: 1,
    title: "Full-Stack Social Media WebApp",
    description:
      "A feature-rich full-stack social media application developed using MySQL, Node.js, HTML, CSS, JavaScript, and React.js. It includes user authentication, post sharing, likes, comments, and responsive design.",
    tags: ["MySQL", "Node.js", "React.js", "HTML", "CSS", "JavaScript", "Full-Stack"],
    link: "#", // Replace with your actual link
  },
  {
    id: 2,
    title: "HandsOn – Social Work Platform",
    description:
      "HandsOn is a community-driven platform for organizing and joining social work initiatives. Built with Next.js and Tailwind CSS, it features modern UI components, real-time data display, and responsive layouts.",
    tags: ["Next.js", "Tailwind CSS", "React", "Community Platform"],
    video: "/handsOn.mp4", 
    link: "#", // Replace with your actual link
  },
  {
    id: 3,
    title: "Genesis – Fire Safety & Security WebApp",
    description:
      "Genesis is a fully responsive web application designed to centralize fire safety and security management. Built with React.js, Tailwind CSS, and Vite, it delivers modular architecture and seamless user experience.",
    video: "/genesis.mp4", // Optional: replace with real video if you have
    tags: ["React.js", "Vite", "Tailwind CSS", "Responsive UI"],
    link: "https://lnkd.in/eyHrCn4j",
  },
  {
    id: 4,
    title: "Good Chef Institute – Frontend Website",
    description:
      "A modern and responsive frontend website developed for Good Chef Institute using React.js, TypeScript, Vite, Tailwind CSS, and React Router. Focused on performance, accessibility, and smooth UX.",
    tags: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    video: "/cheifInstitute.mp4", 
    link: "https://lnkd.in/dnwk5rZi",
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description:
      "The portfolio you're currently viewing. Developed with React.js and Tailwind CSS, featuring dark mode, animations with Framer Motion, and responsive design for all screen sizes.",
    video: "/portfolio-showcase.mp4", // Optional: replace with real video if you have
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Portfolio", "Responsive Design"],
    link: "https://yourportfolio.vercel.app/", // Replace with actual portfolio URL
  },
  {
    id: 6,
    title: "Reading Table – Study Organizer App",
    description:
      "A productivity-focused web app for students to create to-do lists, track study time, set revision reminders, and upload reading materials. Built with React.js and Tailwind CSS.",
    tags: ["React.js", "Tailwind CSS", "Student Tools", "To-Do", "Time Tracker", "File Upload"],
    link: "#", // Replace with your actual link
  },
];


export default function WebDevTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <section className="py-10 lg:px-0">
          <h1 className="text-center lg:text-left text-3xl font-bold text-gray-900 dark:text-white mb-7">
            Web Development
          </h1>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-center lg:text-left mb-6">
            Web development is at the heart of my software engineering journey. From building dynamic user interfaces to managing backend services, I specialize in crafting full-stack applications using modern tools and frameworks. My goal is to build accessible, scalable, and maintainable digital experiences.
          </p>

          {/* Skills Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
            <div className="flex flex-col items-center text-orange-600 dark:text-orange-400">
              <FaHtml5 size={40} />
              <span className="text-sm mt-1">HTML5</span>
            </div>
            <div className="flex flex-col items-center text-blue-600 dark:text-blue-400">
              <FaCss3Alt size={40} />
              <span className="text-sm mt-1">CSS3</span>
            </div>
            <div className="flex flex-col items-center text-cyan-500">
              <SiTailwindcss size={40} />
              <span className="text-sm mt-1">Tailwind</span>
            </div>
            <div className="flex flex-col items-center text-yellow-500 dark:text-yellow-400">
              <SiJavascript size={40} />
              <span className="text-sm mt-1">JavaScript</span>
            </div>
            <div className="flex flex-col items-center text-cyan-600">
              <FaReact size={40} />
              <span className="text-sm mt-1">React</span>
            </div>
            <div className="flex flex-col items-center text-gray-900 dark:text-white">
              <SiNextdotjs size={40} />
              <span className="text-sm mt-1">Next.js</span>
            </div>
            <div className="flex flex-col items-center text-green-600 dark:text-green-400">
              <FaNodeJs size={40} />
              <span className="text-sm mt-1">Node.js</span>
            </div>
            <div className="flex flex-col items-center text-blue-800 dark:text-blue-300">
              <SiMysql size={40} />
              <span className="text-sm mt-1">MySQL</span>
            </div>
            <div className="flex flex-col items-center text-red-600 dark:text-red-400">
              <SiGit size={40} />
              <span className="text-sm mt-1">Git</span>
            </div>
          </div>
        </section>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {webDevProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            video={project.video}
            tags={project.tags}
            link={project.link}
            delay={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

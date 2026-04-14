"use client";

import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiNestjs,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiFastapi,
  SiGithubactions,
  SiRedis,
  SiSocketdotio,
  SiPostman,
} from "react-icons/si";

const webDevProjects = [
  // ✅ unchanged (your projects stay exactly same)
  {
    id: 1,
    title: "Full-Stack Social Media WebApp",
    description:
      "A feature-rich full-stack social media application developed using MySQL, Node.js, HTML, CSS, JavaScript, and React.js. It includes user authentication, post sharing, likes, comments, and responsive design.",
    tags: [
      "MySQL",
      "Node.js",
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Full-Stack",
    ],
    video: "/socialMedia.mp4",
    gitLink:
      "https://github.com/Akash-code-0-1/Complete-Social-Media-Web-Application",
  },
  {
    id: 2,
    title: "HandsOn – Social Work Platform",
    description:
      "HandsOn is a community-driven platform for organizing and joining social work initiatives. Built with Next.js and Tailwind CSS, it features modern UI components, real-time data display, and responsive layouts.",
    tags: ["Next.js", "Tailwind CSS", "React", "Community Platform"],
    video: "/handsOn.mp4",
    gitLink:
      "https://github.com/Akash-code-0-1/HandsON-Community-Volunteers-WebApplication",
  },
  {
    id: 3,
    title: "Genesis – Fire Safety & Security WebApp",
    description:
      "Genesis is a fully responsive web application designed to centralize fire safety and security management. Built with React.js, Tailwind CSS, and Vite, it delivers modular architecture and seamless user experience.",
    video: "/genesis.mp4",
    tags: ["React.js", "Vite", "Tailwind CSS", "Responsive UI"],
    link: "https://akashgenesisweb.netlify.app/",
    gitLink: "https://github.com/Akash-code-0-1/Genesis_Website",
  },
  {
    id: 4,
    title: "Good Chef Institute – Frontend Website",
    description:
      "A modern and responsive frontend website developed for Good Chef Institute using React.js, TypeScript, Vite, Tailwind CSS, and React Router. Focused on performance, accessibility, and smooth UX.",
    tags: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    video: "/cheifInstitute.mp4",
    link: "https://good-chef-institute-website.vercel.app/",
    gitLink: "https://github.com/Akash-code-0-1/chef_institute",
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description:
      "The portfolio you're currently viewing. Developed with React.js and Tailwind CSS, featuring dark mode, animations with Framer Motion, and responsive design for all screen sizes.",
    video: "",
    image: "/portfolio.PNG",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Portfolio",
      "Responsive Design",
    ],
    link: "",
    gitLink:
      "https://mdtanvirahmed.vercel.app/",
  },
  {
    id: 6,
    title: "Reading Table – Study Organizer App",
    description:
      "A productivity-focused web app for students to create to-do lists, track study time, set revision reminders, and upload reading materials. Built with React.js and Tailwind CSS.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Student Tools",
      "To-Do",
      "Time Tracker",
      "File Upload",
    ],
    image: "/tracker.png",
    link: "https://all-in-1-student-tracker.vercel.app/",
  },
];

// 🔥 UPDATED TECH STACK (Backend Highlight)
const techStack = [
  {
    title: "Frontend",
    items: [
      { Icon: FaReact, name: "React.js", color: "text-cyan-500" },
      {
        Icon: SiNextdotjs,
        name: "Next.js",
        color: "text-black dark:text-white",
      },
      { Icon: SiRedux, name: "Redux", color: "text-purple-500" },
    ],
  },
  {
    title: "Backend",
    highlight: true,
    items: [
      { Icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
      { Icon: SiNestjs, name: "NestJS", color: "text-red-600" },
      { Icon: SiFastapi, name: "FastAPI", color: "text-green-500" },
      { Icon: SiPrisma, name: "Prisma", color: "text-indigo-500" },

      { Icon: SiSocketdotio, name: "Socket.IO", color: "text-gray-600" },
      { Icon: SiRedis, name: "Redis", color: "text-red-500" },

      { Icon: SiPostman, name: "Postman", color: "text-orange-500" },

      { name: "Load Balancing" },
      { name: "Database Design" },
      { name: "System Design" },
    ],
  },
  {
    title: "Database",
    items: [
      { Icon: SiMysql, name: "MySQL", color: "text-blue-600" },
      { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-500" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { Icon: FaDocker, name: "Docker", color: "text-blue-500" },
      {
        Icon: SiGithubactions,
        name: "CI/CD",
        color: "text-gray-700 dark:text-white",
      },
      { Icon: FaAws, name: "AWS", color: "text-yellow-500" },
      { Icon: FaGitAlt, name: "Git", color: "text-orange-500" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WebDevTab() {
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
        <motion.h1
          variants={itemVariants}
          className="text-center lg:text-left text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
        >
          Software Development
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-500 dark:text-gray-400 max-w-2xl text-center lg:text-left mb-8 leading-relaxed"
        >
          Software development is at the heart of my software engineering
          journey. From building dynamic user interfaces to managing backend
          services, I specialize in crafting full-stack applications using
          modern tools and frameworks.
        </motion.p>

        {/* 🔥 UPDATED TECH SECTION */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
        >
          {techStack.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`
                relative rounded-2xl p-5 transition-all duration-300
                border bg-white/60 dark:bg-gray-900/60 backdrop-blur-md
                ${
                  group.highlight
                    ? "border-orange-400/40 shadow-lg shadow-orange-500/10"
                    : "border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl"
                }
              `}
            >
              {/* Backend Badge */}
              {group.highlight && (
                <div
                  className="absolute -top-3 right-3 text-[10px] px-2 py-1 rounded-full 
                  bg-orange-500 text-white font-medium shadow-md"
                >
                  Core
                </div>
              )}

              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 tracking-wide">
                {group.title}
                {group.highlight && (
                  <span className="ml-2 text-orange-500 text-[10px]">
                    (Primary Focus)
                  </span>
                )}
              </h3>

              <div className="flex flex-wrap gap-4">
                {group.items.map((item) => {
                  const Icon = item.Icon;
                  const isConcept = !Icon;

                  return (
                    <div
                      key={item.name}
                      className="flex flex-col items-center group"
                    >
                      <div
                        className={`
                          p-3 rounded-xl transition-all duration-300 shadow-sm
                          ${
                            isConcept
                              ? "bg-gray-100 dark:bg-gray-800 text-[11px] font-medium px-3 py-2"
                              : group.highlight
                                ? "bg-orange-50 dark:bg-orange-900/20 group-hover:shadow-orange-500/20"
                                : "bg-gray-50 dark:bg-gray-800/60 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20"
                          }
                        `}
                      >
                        {Icon ? (
                          <Icon
                            size={26}
                            className={`${item.color} transition-transform group-hover:scale-110`}
                          />
                        ) : (
                          item.name
                        )}
                      </div>

                      {Icon && (
                        <span className="text-[11px] mt-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-500 transition-colors text-center">
                          {item.name}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Glow */}
              {group.highlight && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none 
                  bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 blur-xl opacity-60"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ✅ Projects unchanged */}
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
            gitLink={project.gitLink}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

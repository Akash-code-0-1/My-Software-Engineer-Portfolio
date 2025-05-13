"use client";

import { motion } from "framer-motion";
import ProjectCard from "./project-card";

const webDevProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A fully responsive portfolio website with dark mode, smooth animations using Framer Motion, and a sleek modern design powered by Tailwind CSS.",
    video: "/portfolio-showcase.mp4",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    link: "https://yourportfolio.vercel.app/",
  },
  {
    id: 2,
    title: "Startup Landing Page",
    description:
      "Designed a stunning landing page template for tech startups with animated hero sections, feature cards, testimonials, and contact forms.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce Storefront",
    description:
      "A modern and performant e-commerce frontend built with Next.js, Tailwind, and fake API integration. Includes product pages, filtering, and cart functionality.",
    video: "/ecommerce-demo.mp4",
    tags: ["Next.js", "React", "Tailwind CSS", "REST API"],
    link: "#",
  },
  {
    id: 4,
    title: "Blog Platform (Medium Clone)",
    description:
      "A Medium-like blog platform with dynamic routing, markdown support, and an elegant, minimalistic UI for writers and readers.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "React", "Tailwind CSS", "Markdown"],
    link: "#",
  },
  {
    id: 5,
    title: "UI Component Library",
    description:
      "Created a reusable UI component library with cards, modals, buttons, and forms. Fully customizable and built with Tailwind and Headless UI.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Tailwind CSS", "Component Design", "Accessibility"],
    link: "#",
  },
  {
    id: 6,
    title: "Admin Dashboard",
    description:
      "A clean admin dashboard layout with charts, tables, sidebar navigation, and authentication screens. Perfect for business apps.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Tailwind CSS", "Chart.js", "Responsive UI"],
    link: "#",
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
            Web development is where design meets functionality. From building elegant UIs to deploying scalable applications, I specialize in crafting seamless digital experiences using modern tools like HTML, CSS, React, Next.js, and Tailwind CSS. This section highlights my work across a range of web technologies that reflect both creativity and engineering discipline.
          </p>
        </section>

        <h1 className="text-center lg:text-left text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Projects
        </h1>
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

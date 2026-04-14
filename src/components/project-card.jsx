"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  image,
  video,
  tags,
  link,
  gitLink,
  index,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const delay = index * 0.08;

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#242424] shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-100 dark:border-gray-800"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0"
        animate={{
          boxShadow: isHovered
            ? "0 0 40px rgba(249, 115, 22, 0.12), 0 0 80px rgba(249, 115, 22, 0.06)"
            : "0 0 0px rgba(249, 115, 22, 0)",
        }}
        transition={{ duration: 0.4 }}
      />

      {tags?.includes("In Development") && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 left-4 z-20 px-3 py-1 font-semibold rounded-full shadow-lg text-xs
               text-gray-900 dark:text-white
               bg-white/80 dark:bg-black/60
               backdrop-blur-md 
               border border-orange-400/50 flex items-center gap-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          In Development
        </motion.div>
      )}

      <div className="aspect-video overflow-hidden relative">
        {video ? (
          <motion.video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ) : (
          <motion.img
            src={image || "/placeholder.svg?height=200&width=400"}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}

        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
          animate={{ opacity: isHovered ? 0.3 : 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Scanline effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 4px)",
          }}
        />
      </div>

      {/* Action buttons */}
      <motion.div
        className="absolute top-4 right-4 z-10 flex gap-2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -8 }}
        transition={{ duration: 0.25 }}
      >
        {gitLink && (
          <motion.a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/95 dark:bg-[#1a1a1a]/95 p-2.5 rounded-xl shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700"
            aria-label="GitHub Repository"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={15} className="text-gray-700 dark:text-gray-200" />
          </motion.a>
        )}
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 p-2.5 rounded-xl shadow-lg"
            aria-label="Live Project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={15} className="text-white" />
          </motion.a>
        )}
      </motion.div>

      <div className="p-5 relative z-10">
        <div className="flex items-start justify-between mb-2">
          <motion.h3
            className="text-lg font-bold text-gray-800 dark:text-white leading-snug flex-1 pr-2"
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.div
            animate={{
              rotate: isHovered ? 45 : 0,
              opacity: isHovered ? 1 : 0.4,
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={18} className="text-orange-500 flex-shrink-0" />
          </motion.div>
        </div>

        <motion.p
          className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 text-sm leading-relaxed"
          animate={{ opacity: isHovered ? 1 : 0.75 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-1.5"
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 4, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {tags
            .filter((t) => t !== "In Development")
            .map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-0.5 text-xs font-medium rounded-md bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-800/40"
              >
                {tag}
              </span>
            ))}
        </motion.div>
      </div>

      {/* Bottom accent bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Subtle corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-400/10 to-transparent rounded-bl-full" />
      </motion.div>
    </motion.div>
  );
}

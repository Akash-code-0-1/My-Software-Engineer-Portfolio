import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import profile_pic from "../images/profile.jpg";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Backend Developer",
];

const TypewriterText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          65,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <span className="text-orange-500 dark:text-orange-400 font-bold">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-[1em] bg-orange-500 ml-0.5 align-middle"
      />
    </span>
  );
};

const FloatingDot = ({ x, y, delay, size = 4 }) => (
  <motion.div
    className="absolute rounded-full bg-orange-400/20 dark:bg-orange-400/10 pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
    animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
    transition={{
      duration: 3 + delay,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const tags = [
    "Software Development",
    "Artificial Intelligence",
    "Problem Solving",
    "Backend Engineering",
  ];

  return (
    <motion.div
      ref={sectionRef}
      id="hero-section"
      style={{ opacity }}
      className="mt-10 bg-white dark:bg-[#1E1E1E] relative overflow-hidden flex flex-col justify-between px-4 sm:px-8 md:px-16 lg:px-48"
    >
      {/* Background decorative elements */}
      <FloatingDot x={8} y={20} delay={0} size={6} />
      <FloatingDot x={85} y={15} delay={1} size={4} />
      <FloatingDot x={92} y={55} delay={0.5} size={8} />
      <FloatingDot x={5} y={70} delay={1.5} size={5} />
      <FloatingDot x={78} y={80} delay={2} size={3} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-8 lg:mt-16 relative z-10">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0 relative"
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.85, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ margin: "-6px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full border-2 border-dashed border-orange-300/40 dark:border-orange-500/30" />
          </motion.div>

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-orange-400/10 dark:bg-orange-500/10 blur-2xl scale-125 pointer-events-none" />

          <motion.div
            className="relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={profile_pic}
              alt="Profile Pic"
              className="h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] lg:h-[300px] lg:w-[300px] xl:h-[380px] xl:w-[380px] object-cover rounded-full shadow-2xl shadow-black/20 dark:shadow-black/50 ring-4 ring-white dark:ring-gray-800"
            />
          </motion.div>

          {/* Status badge */}
          <motion.div
            className="absolute bottom-4 right-4 bg-white dark:bg-[#2a2a2a] rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2 border border-gray-100 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Open to work
          </motion.div>
        </motion.div>

        {/* Profile Content */}
        <motion.div
          style={{ y: textY }}
          className="text-center lg:text-left max-w-xl relative z-10"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700/50 rounded-full px-3 py-1 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span>👋</span> Hello, I'm Tanvir
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-[42px] xl:leading-tight font-bold text-gray-800 dark:text-white mb-3 font-spaceGrotesk">
            An Aspiring <br className="hidden lg:block" />
            <TypewriterText />
          </h1>

          <motion.p
            className="text-sm xl:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed font-spaceGrotesk font-normal mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Passionate about solving complex problems with innovative solutions,
            I specialize in AI, web application development, and cutting-edge
            technologies. Driven by a relentless curiosity to create impactful
            digital experiences.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center lg:justify-start gap-3 mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[
              {
                href: "https://linkedin.com",
                src: "https://cdn-icons-png.flaticon.com/512/1384/1384014.png",
                alt: "LinkedIn",
                label: "LinkedIn",
              },
              {
                href: "https://github.com/Akash-code-0-1",
                src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
                alt: "GitHub",
                label: "GitHub",
              },
            ].map(({ href, src, alt, label }) => (
              <motion.a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-200 group"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-5 w-5 rounded-sm dark:bg-white dark:p-0.5"
                />
                <span className="group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Tag Pills */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-10 lg:justify-start lg:mt-24 lg:ml-[-60px] xl:ml-0 xl:mt-32 2xl:ml-12 pb-10 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.7 },
          },
        }}
      >
        {tags.map((label) => (
          <motion.button
            key={label}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="bg-black dark:bg-white dark:text-black text-white text-sm py-2 px-5 rounded-full shadow-md hover:shadow-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            {label}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

import React, { useState, useEffect } from "react";
import darkmode from "../images/moon.png";
import lightmode from "../images/sun.png";
import profile_pic_logo from "../images/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ darkMode, toggleDisplayMode }) => {
  const [showProfilePic, setShowProfilePic] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowProfilePic(heroBottom <= 60);
        setScrolled(heroBottom <= 60);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`navbar fixed top-0 w-full h-[60px] flex justify-center items-center z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-[#1e1e1e]/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800/50"
          : "bg-white dark:bg-[#1e1e1e]"
      }`}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex justify-between w-3/4 h-[40px] items-center">
        <div className="left_section flex items-center gap-2">
          <AnimatePresence>
            {showProfilePic && (
              <motion.img
                src={profile_pic_logo}
                alt="Profile"
                className="h-[36px] w-[36px] rounded-full object-cover ring-2 ring-orange-400/60"
                initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6, rotate: 10 }}
                transition={{ duration: 0.3, ease: "backOut" }}
              />
            )}
          </AnimatePresence>
          <motion.h1
            className="text-[20px] font-bold text-black dark:text-white tracking-tight"
            layout
          >
            Tanvir
          </motion.h1>
          <AnimatePresence>
            {scrolled && (
              <motion.span
                className="text-xs text-orange-500 font-medium hidden sm:block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                · Software Engineer
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="right_section">
          <motion.button
            onClick={toggleDisplayMode}
            className="relative h-[38px] w-[38px] flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={darkMode ? "light" : "dark"}
                src={darkMode ? lightmode : darkmode}
                alt="Toggle Display Mode"
                className="h-[20px] w-[20px]"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

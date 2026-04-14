"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavItem = ({ icon, label, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const expanded = isHovered || isActive;

  return (
    <div
      className="relative w-full py-2.5 flex justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Active indicator */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-r-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 32, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      <motion.div
        layout
        className={`flex items-center rounded-xl overflow-hidden transition-colors duration-200 ${
          expanded
            ? "bg-white dark:bg-[#2a2a2a] shadow-md px-3 py-2"
            : "justify-center py-2"
        } ${isActive ? "border-l-2 border-orange-500" : ""}`}
        animate={{
          width: expanded ? 148 : 38,
          boxShadow: expanded
            ? isActive
              ? "0 4px 20px rgba(249, 115, 22, 0.2)"
              : "0 2px 12px rgba(0,0,0,0.1)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{
            scale: expanded ? 1.1 : 1,
            rotate: isActive ? 0 : isHovered ? 8 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>

        <AnimatePresence>
          {expanded && (
            <motion.span
              className="ml-2.5 font-semibold text-sm text-gray-800 dark:text-white whitespace-nowrap"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.18 }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const navItems = [
  {
    key: "programming",
    label: "Programming",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 6L4 12L8 18"
          stroke="#F97316"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 6L20 12L16 18"
          stroke="#F97316"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "development",
    label: "Development",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="14"
          rx="2"
          stroke="#F97316"
          strokeWidth="2"
        />
        <path
          d="M8 20H16"
          stroke="#F97316"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 8L8 10L10 12"
          stroke="#F97316"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 8L16 10L14 12"
          stroke="#F97316"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "ai",
    label: "AI",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 3C7.34315 3 6 4.34315 6 6V18C6 19.6569 7.34315 21 9 21"
          stroke="#EAB308"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 3C16.6569 3 18 4.34315 18 6V18C18 19.6569 16.6569 21 15 21"
          stroke="#EAB308"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 3V21"
          stroke="#EAB308"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    key: "others",
    label: "Experience",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4H8V6C8 7.65685 9.34315 9 11 9H13C14.6569 9 16 10.3431 16 12V14H20V20H4V4Z"
          stroke="#F97316"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="flex flex-col h-[100vh] lg:w-[200px] bg-white dark:bg-[#1E1E1E]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col items-center justify-center h-full ml-4">
        <div className="flex flex-col space-y-1 w-full">
          {navItems.map((item) => (
            <NavItem
              key={item.key}
              icon={item.icon}
              label={item.label}
              isActive={activeSection === item.key}
              onClick={() => setActiveSection(item.key)}
            />
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Bottom Nav */}
      <div className="flex lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#1E1E1E]/95 backdrop-blur-md justify-around py-2 shadow-lg z-50 border-t border-gray-100 dark:border-gray-800">
        {navItems.map((item) => (
          <NavItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            isActive={activeSection === item.key}
            onClick={() => setActiveSection(item.key)}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

const NavItem = ({ icon, label, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full py-3 flex justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-md" />
      )}


      {/* <div
        className={`flex items-center transition-all duration-300 ease-in-out rounded-md ${isHovered
            ? "bg-white dark:bg-[#1E1E1E] shadow-blue px-3 py-2 justify-start"
            : "justify-center"
          } ${isActive ? "bg-white shadow-blue" : ""}`}
        style={{
          width: isHovered ? "150px" : "32px",
          boxShadow:
            isActive || isHovered
              ? "0 0 15px rgba(59, 130, 246, 0.5)"
              : "none",
          overflow: "hidden",
          borderLeft: isActive ? "3px solid #3B82F6" : "none",
        }}
      > */}

      <div
        className={`flex items-center transition-all duration-300 ease-in-out rounded-md ${(isHovered || isActive)
            ? "bg-white dark:bg-[#1E1E1E] shadow-blue px-3 py-2 justify-start"
            : "justify-center"
          }`}
        style={{
          width: isHovered || isActive ? "150px" : "32px",
          boxShadow:
            isHovered || isActive
              ? "0 0 5px rgba(59, 130, 246, 0.5)"
              : "none",
          overflow: "hidden",
          borderLeft: isActive ? "3px solid #3B82F6" : "none",
        }}
      >



        {icon}

        <span
          className={`ml-2 font-medium text-black dark:text-white whitespace-nowrap transition-all duration-300 ${isHovered || isActive ? "opacity-100 max-w-[100px]" : "opacity-0 max-w-0"
            }`}
        >
          {label}
        </span>


        {/* <span
          className={`ml-2 font-medium text-gray-800 whitespace-nowrap transition-all duration-300 ${
            isHovered ? "opacity-100 max-w-[100px]" : "opacity-0 max-w-0"
          }`}
        >
          {label}
        </span> */}

      </div>
    </div>
  );
};

export default function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="flex flex-col h-[100vh] lg:w-[200px] bg-white dark:bg-[#1E1E1E] w-32">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex  flex-col items-center justify-center h-full ml-6 ">
        <div className="flex flex-col space-y-6 w-full">
          <NavItem
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6H20" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12H20" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 18H20" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 6V6.01" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 12V12.01" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 18V18.01" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            label="Work"
            isActive={activeSection === "work"}
            onClick={() => setActiveSection("work")}
          />
          <NavItem
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#4B5563" strokeWidth="2" />
                <path d="M9 22V12H15V22" stroke="#4B5563" strokeWidth="2" />
              </svg>
            }
            label="Home"
            isActive={activeSection === "home"}
            onClick={() => setActiveSection("home")}
          />
          <NavItem
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#FFD700" strokeWidth="2" />
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#FFD700" strokeWidth="2" />
              </svg>
            }
            label="Team"
            isActive={activeSection === "team"}
            onClick={() => setActiveSection("team")}
          />
          <NavItem
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#4B5563" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" stroke="#4B5563" strokeWidth="2" />
                <circle cx="12" cy="12" r="2" fill="#4B5563" />
              </svg>
            }
            label="AI"
            isActive={activeSection === "ai"}
            onClick={() => setActiveSection("ai")}
          />
        </div>
      </div>

      {/* Mobile/Tablet Bottom Nav */}
      <div className="flex lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1E1E1E] justify-around py-2 shadow-md z-50">
        <NavItem
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#4B5563" strokeWidth="2" />
              <path d="M9 22V12H15V22" stroke="#4B5563" strokeWidth="2" />
            </svg>
          }
          label="Home"
          isActive={activeSection === "home"}
          onClick={() => setActiveSection("home")}
        />
        <NavItem
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6H20" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 12H20" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 18H20" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 6V6.01" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 12V12.01" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 18V18.01" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
          label="Work"
          isActive={activeSection === "work"}
          onClick={() => setActiveSection("work")}
        />
        <NavItem
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#FFD700" strokeWidth="2" />
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#FFD700" strokeWidth="2" />
            </svg>
          }
          label="Team"
          isActive={activeSection === "team"}
          onClick={() => setActiveSection("team")}
        />
        <NavItem
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#4B5563" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" stroke="#4B5563" strokeWidth="2" />
              <circle cx="12" cy="12" r="2" fill="#4B5563" />
            </svg>
          }
          label="AI"
          isActive={activeSection === "ai"}
          onClick={() => setActiveSection("ai")}
        />
      </div>
    </div>
  );
}

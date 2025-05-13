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
          borderLeft: isActive ? "3px solid #3B82F6" : "none",`
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
    <div className="flex flex-col h-[100vh] lg:w-[200px] bg-white dark:bg-[#1E1E1E]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex  flex-col items-center justify-center h-full ml-6 ">
        <div className="flex flex-col space-y-6 w-full">
          <NavItem
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 6L4 12L8 18" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 6L20 12L16 18" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            label="Programming"
            isActive={activeSection === "programming"}
            onClick={() => setActiveSection("programming")}
          />
          <NavItem
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="14" rx="2" stroke="#FF9800" strokeWidth="2" />
                <path d="M8 20H16" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 8L8 10L10 12" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 8L16 10L14 12" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            }
            label="Development"
            isActive={activeSection === "development"}
            onClick={() => setActiveSection("development")}
          />

          <NavItem
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 3C7.34315 3 6 4.34315 6 6V18C6 19.6569 7.34315 21 9 21" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                <path d="M15 3C16.6569 3 18 4.34315 18 6V18C18 19.6569 16.6569 21 15 21" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 3V21" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
              </svg>

            }
            label="AI"
            isActive={activeSection === "ai"}
            onClick={() => setActiveSection("ai")}
          />


          <NavItem
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 11C15.6569 11 17 9.65685 17 8C17 6.34315 15.6569 5 14 5C12.3431 5 11 6.34315 11 8C11 9.65685 12.3431 11 14 11Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 10L21 15" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 4H9C10.6569 4 12 5.34315 12 7V17C12 18.6569 10.6569 20 9 20H5V4Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>



            }
            label="Research"
            isActive={activeSection === "research"}
            onClick={() => setActiveSection("research")}
          />


          <NavItem
            icon={

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H8V6C8 7.65685 9.34315 9 11 9H13C14.6569 9 16 10.3431 16 12V14H20V20H4V4Z" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            }
            label="Others"
            isActive={activeSection === "others"}
            onClick={() => setActiveSection("others")}
          />
        </div>
      </div>

      {/* Mobile/Tablet Bottom Nav */}
      <div className="flex lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1E1E1E] justify-around py-2 shadow-md z-50">
        <NavItem
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 6L4 12L8 18" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 6L20 12L16 18" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
          label="Programming"
          isActive={activeSection === "programming"}
          onClick={() => setActiveSection("programming")}
        />
        <NavItem
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="14" rx="2" stroke="#FF9800" strokeWidth="2" />
              <path d="M8 20H16" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
              <path d="M10 8L8 10L10 12" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 8L16 10L14 12" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          }
          label="Development"
          isActive={activeSection === "development"}
          onClick={() => setActiveSection("development")}
        />

        <NavItem
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 3C7.34315 3 6 4.34315 6 6V18C6 19.6569 7.34315 21 9 21" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 3C16.6569 3 18 4.34315 18 6V18C18 19.6569 16.6569 21 15 21" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 3V21" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
            </svg>


          }
          label="AI"
          isActive={activeSection === "ai"}
          onClick={() => setActiveSection("ai")}
        />


        <NavItem
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 11C15.6569 11 17 9.65685 17 8C17 6.34315 15.6569 5 14 5C12.3431 5 11 6.34315 11 8C11 9.65685 12.3431 11 14 11Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 10L21 15" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 4H9C10.6569 4 12 5.34315 12 7V17C12 18.6569 10.6569 20 9 20H5V4Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>



          }
          label="Research"
          isActive={activeSection === "research"}
          onClick={() => setActiveSection("research")}
        />


        <NavItem
          icon={

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 4H8V6C8 7.65685 9.34315 9 11 9H13C14.6569 9 16 10.3431 16 12V14H20V20H4V4Z" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          }
          label="Others"
          isActive={activeSection === "others"}
          onClick={() => setActiveSection("others")}
        />
      </div>
    </div>
  );
}

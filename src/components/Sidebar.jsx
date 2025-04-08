"use client"

import { useState } from "react"

const NavItem = ({ icon, label, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full py-3 flex justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-md" />}
      <div
        className={`flex items-center transition-all duration-300 ease-in-out rounded-md ${isHovered ? "bg-white shadow-blue px-3 py-2 justify-start" : "justify-center"
          } ${isActive ? "bg-white shadow-blue" : ""}`}
        style={{
          width: isHovered ? "150px" : "32px",
          boxShadow: isActive
            ? "0 0 15px rgba(59, 130, 246, 0.5)"
            : isHovered
              ? "0 0 15px rgba(59, 130, 246, 0.5)"
              : "none",
          overflow: "hidden",
          borderLeft: isActive ? "3px solid #3B82F6" : "none",
        }}
      >
        {icon}
        <span
          className={`ml-2 font-medium text-gray-800 whitespace-nowrap transition-all duration-300 ${isHovered ? "opacity-100 max-w-[100px]" : "opacity-0 max-w-0"
            }`}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

export default function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="flex flex-col h-[100vh] bg-white w-28 border-r">
      {/* Profile */}
      {/* <div className="flex flex-col items-center pt-6">
        <div className="relative w-10 h-10 overflow-hidden rounded-full">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <span className="mt-2 text-xs font-medium">Tanvir</span>
      </div> */}

      {/* Navigation - Centered vertically */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex flex-col space-y-6 w-full">
          <NavItem
            icon={
              <div className="flex items-center justify-center w-8 h-8 bg-indigo-500 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
            }
            label="Code"
            isActive={activeSection === "code"}
            onClick={() => setActiveSection("code")}
          />
          <NavItem
            icon={
              <div className="flex items-center justify-center w-8 h-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M13 5.07089C12.6724 5.02417 12.3387 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13C20 12.6613 19.9758 12.3276 19.9291 12"
                    stroke="#4B5563"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.1213 1.87868C14.3147 1.68532 14.6353 1.68532 14.8284 1.87868L16.1213 3.17157C16.3147 3.36493 16.3147 3.68551 16.1213 3.87868L12.2426 7.75736C12.1756 7.82441 12.0892 7.86587 11.9978 7.87822L9.91007 8.14393C9.76268 8.16335 9.61656 8.10077 9.52513 7.97923C9.4337 7.85768 9.40657 7.69759 9.45607 7.55251L10.1218 5.52513C10.1342 5.43371 10.1756 5.34744 10.2426 5.28039L14.1213 1.87868Z"
                    fill="#4B5563"
                    stroke="#4B5563"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            }
            label="Projects"
            isActive={activeSection === "projects"}
            onClick={() => setActiveSection("projects")}
          />
          <NavItem
            icon={
              <div className="flex items-center justify-center w-8 h-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6H20" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 12H20" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 18H20" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 6V6.01" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 12V12.01" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 18V18.01" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            }
            label="Work"
            isActive={activeSection === "work"}
            onClick={() => setActiveSection("work")}
          />
          <NavItem
            icon={
              <div className="flex items-center justify-center w-8 h-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="#4B5563"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22V12H15V22"
                    stroke="#4B5563"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            }
            label="Home"
            isActive={activeSection === "home"}
            onClick={() => setActiveSection("home")}
          />
          <NavItem
            icon={
              <div className="flex items-center justify-center w-8 h-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            }
            label="Team"
            isActive={activeSection === "team"}
            onClick={() => setActiveSection("team")}
          />
          <NavItem
            icon={
              <div className="flex items-center justify-center w-8 h-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#4B5563"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                    stroke="#4B5563"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                    fill="#4B5563"
                  />
                </svg>
              </div>
            }
            label="AI"
            isActive={activeSection === "ai"}
            onClick={() => setActiveSection("ai")}
          />
        </div>
      </div>

      {/* Empty space at bottom to balance the layout */}
      <div className="pb-6"></div>
    </div>
  )
}


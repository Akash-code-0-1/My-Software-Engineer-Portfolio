// import Navbar from "./components/Navbar";
// import { useState, useEffect, useRef } from "react";
// import HeroSection from "./components/HeroSection";
// import Sidebar from "./components/Sidebar";
// import DevelopmentTab from "./components/developmentTab";
// import ProgrammingTab from "./components/ProgrammingTab";
// import AITab from "./components/ai-tab";
// import OthersTab from "./components/OthersTab";


// import { motion } from "framer-motion";
// import {
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [activeSection, setActiveSection] = useState("programming");

//   const mainContentRef = useRef(null);

//   const renderContent = () => {
//     switch (activeSection) {
//       case "programming":
//         return <ProgrammingTab />;
//       case "development":
//         return <DevelopmentTab />;
//       case "ai":
//         return <AITab />;
//       case "others":
//         return <OthersTab />;
//       default:
//         return <div>Select a section</div>;
//     }
//   };

//   useEffect(() => {
//     let saveMode = localStorage.getItem("displayMode");
//     if (!saveMode) {
//       saveMode = "light";
//       setDarkMode(false);
//       localStorage.setItem("displayMode", saveMode);
//     } else {
//       setDarkMode(saveMode === "dark");
//     }
//   }, []);

//   const toggleDisplayMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem("displayMode", newMode ? "dark" : "light");
//   };

//   useEffect(() => {
//     if (mainContentRef.current) {
//       mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [activeSection]);

//   return (
//     <div className={`${darkMode ? "dark" : ""} dark:bg-[#1E1E1E]`}>
//       <Navbar darkMode={darkMode} toggleDisplayMode={toggleDisplayMode} />
//       <HeroSection />

//       <div className="flex h-[calc(100vh)] bg-white dark:bg-[#1E1E1E]">
//         <Sidebar
//           activeSection={activeSection}
//           setActiveSection={setActiveSection}
//         />

//         <main
//           ref={mainContentRef}
//           className="flex overflow-y-auto mt-[50px] lg:mt-[70px] 2xl:mt-[100px] p-5 lg:pl-5 2xl:pl-20 bg-white dark:bg-[#1E1E1E] text-black dark:text-white w-full"
//         >
//           {renderContent()}
//         </main>

//       </div>



// {/* ── Contact / Footer Section ── */}
//       <footer className="w-full bg-white dark:bg-[#1E1E1E] py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-gray-800">
//         <div className="max-w-6xl mx-auto">
//           <motion.section
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-purple-50/40 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 rounded-3xl p-8 sm:p-10 border border-blue-100 dark:border-blue-900/40 shadow-sm"
//           >
//             {/* Background Decorative Blur */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-300/20 dark:from-blue-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none blur-2xl" />

//             {/* Header */}
//             <div className="flex items-center gap-3 mb-8">
//               <div className="p-2.5 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
//                 <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
//                   Get In Touch
//                 </h2>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   Let's build something great together
//                 </p>
//               </div>
//             </div>

//             {/* Content Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               {/* Left Column: Description & Contact Items */}
//               <div>
//                 <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
//                   I'm always open to discussing new opportunities, collaborations,
//                   or just having a chat about technology. Feel free to reach out!
//                 </p>

//                 <div className="space-y-3.5">
//                   {[
//                     {
//                       Icon: Mail,
//                       text: "mdtanvirahmedakash.1@gmail.com",
//                       href: "mailto:mdtanvirahmedakash.1@gmail.com",
//                       color: "text-blue-500",
//                     },
//                     {
//                       Icon: Phone,
//                       text: "+880 1852842578",
//                       href: "tel:+8801852842578",
//                       color: "text-emerald-500",
//                     },
//                     {
//                       Icon: MapPin,
//                       text: "Dhaka, Bangladesh",
//                       href: null,
//                       color: "text-orange-500",
//                     },
//                   ].map(({ Icon, text, href, color }) => (
//                     <motion.div
//                       key={text}
//                       className="flex items-center gap-3.5 group"
//                       whileHover={{ x: 4 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <div className="p-2 bg-white dark:bg-[#252525] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
//                         <Icon className={`h-4 w-4 ${color}`} />
//                       </div>
//                       {href ? (
//                         <a
//                           href={href}
//                           className="text-sm text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                         >
//                           {text}
//                         </a>
//                       ) : (
//                         <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
//                           {text}
//                         </span>
//                       )}
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right Column: Status Card & CTA */}
//               <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-start lg:items-end gap-4 bg-white/60 dark:bg-[#252525]/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
//                 <div className="flex items-center gap-2">
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
//                   </span>
//                   <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
//                     Available for new roles
//                   </span>
//                 </div>
//                 <p className="text-xs text-gray-500 dark:text-gray-400 lg:text-right max-w-xs">
//                   Looking for full-time Software Engineering roles or freelance development projects.
//                 </p>
//                 <a
//                   href="mailto:mdtanvirahmedakash.1@gmail.com"
//                   className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-xl transition-all shadow-sm shadow-blue-500/20 active:scale-95"
//                 >
//                   Send an Email
//                 </a>
//               </div>
              
//             </div>
//           </motion.section>

//         </div>
//       </footer>



//     </div>
//   );
// }

// export default App;



import Navbar from "./components/Navbar";
import { useState, useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";
import DevelopmentTab from "./components/developmentTab";
import ProgrammingTab from "./components/ProgrammingTab";
import AITab from "./components/ai-tab";
import OthersTab from "./components/OthersTab";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("development");

  const mainContentRef = useRef(null);

  const renderContent = () => {
    switch (activeSection) {
      case "programming":
        return <ProgrammingTab />;
      case "development":
        return <DevelopmentTab />;
      case "ai":
        return <AITab />;
      case "others":
        return <OthersTab />;
      default:
        return <div>Select a section</div>;
    }
  };

  useEffect(() => {
    let saveMode = localStorage.getItem("displayMode");
    if (!saveMode) {
      saveMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", saveMode);
    } else {
      setDarkMode(saveMode === "dark");
    }
  }, []);

  const toggleDisplayMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("displayMode", newMode ? "dark" : "light");
  };

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeSection]);

  return (
    <div className={`${darkMode ? "dark" : ""} dark:bg-[#1E1E1E]`}>
      <Navbar darkMode={darkMode} toggleDisplayMode={toggleDisplayMode} />
      <HeroSection />

      <div className="flex h-[calc(100vh)] bg-white dark:bg-[#1E1E1E]">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* ── Main Scrollable Area (Takes remaining width beside Sidebar) ── */}
        <main
          ref={mainContentRef}
          className="flex flex-col flex-1 overflow-y-auto mt-[50px] lg:mt-[70px] 2xl:mt-[100px] p-5 lg:pl-5 2xl:pl-20 bg-white dark:bg-[#1E1E1E] text-black dark:text-white w-full"
        >
          {/* Active Tab Content */}
          <div className="w-full flex-1">
            {renderContent()}
          </div>

{/* ── Contact / Footer Section ── */}
          <footer className="w-full mt-16 pb-12">
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden w-full bg-white dark:bg-[#242424] rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 dark:border-[#333333] shadow-sm"
            >
              {/* Subtle Warm Glow (Matches Orange Branding) */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-orange-400/10 via-amber-300/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none blur-3xl" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/40 rounded-xl">
                  <Mail className="h-5 w-5 text-orange-500 dark:text-orange-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Get In Touch
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Let's discuss opportunities, tech, or collaborations
                  </p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Column: Bio & Contact Details */}
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-lg">
                    I'm always open to discussing new engineering opportunities, collaborations,
                    or just having a chat about technology. Feel free to reach out!
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        Icon: Mail,
                        text: "mdtanvirahmedakash.1@gmail.com",
                        href: "mailto:mdtanvirahmedakash.1@gmail.com",
                      },
                      {
                        Icon: Phone,
                        text: "+880 1852842578",
                        href: "tel:+8801852842578",
                      },
                      {
                        Icon: MapPin,
                        text: "Dhaka, Bangladesh",
                        href: null,
                      },
                    ].map(({ Icon, text, href }) => (
                      <motion.div
                        key={text}
                        className="flex items-center gap-3.5 group"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-2 bg-gray-50 dark:bg-[#1E1E1E] rounded-xl border border-gray-200/70 dark:border-[#333333] group-hover:border-orange-200 dark:group-hover:border-orange-800 transition-colors">
                          <Icon className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                        </div>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-gray-700 dark:text-gray-200 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                          >
                            {text}
                          </a>
                        ) : (
                          <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                            {text}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
{/* Right Column: Solid Minimalist Action */}
<div className="flex flex-col justify-center lg:border-l lg:border-gray-200/70 dark:lg:border-[#333333] lg:pl-10 space-y-4">
  <div>
    <span className="text-xs font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400">
      Collaboration
    </span>
    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
      Have a project in mind?
    </h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
      I'm currently available for full-time Software Engineering roles, freelance projects, or open-source collaborations.
    </p>
  </div>

  <div className="pt-2">
    <a
      href="mailto:mdtanvirahmedakash.1@gmail.com"
      className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 active:scale-95 rounded-xl transition-all shadow-sm shadow-orange-500/20"
    >
      <Mail className="h-4 w-4" />
      <span>Send an Email</span>
    </a>
  </div>
</div>


              </div>
            </motion.section>

            {/* Copyright */}
            <div className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} Tanvir. All rights reserved.
            </div>
          </footer>


        </main>
      </div>
    </div>
  );
}

export default App;
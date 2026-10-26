import Navbar from "./components/Navbar";
import { useState, useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";
import DevelopmentTab from "./components/developmentTab";
import ProgrammingTab from "./components/ProgrammingTab";
import AITab from "./components/ai-tab";
import OthersTab from "./components/OthersTab";


import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("programming");

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

        <main
          ref={mainContentRef}
          className="flex overflow-y-auto mt-[50px] lg:mt-[70px] 2xl:mt-[100px] p-5 lg:pl-5 2xl:pl-20 bg-white dark:bg-[#1E1E1E] text-black dark:text-white w-full"
        >
          {renderContent()}
        </main>
        
      </div>

                    {/* ── Contact ── */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/40"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="flex items-center gap-3 mb-7">
            <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              Get In Touch
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations,
                or just having a chat about technology. Feel free to reach out!
              </p>
              <div className="space-y-4">
                {[
                  {
                    Icon: Mail,
                    text: "mdtanvirahmedakash.1@gmail.com",
                    color: "text-blue-500",
                  },
                  {
                    Icon: Phone,
                    text: "+880 1852842578",
                    color: "text-green-500",
                  },
                  {
                    Icon: MapPin,
                    text: "Dhaka, Bangladesh",
                    color: "text-orange-500",
                  },
                ].map(({ Icon, text, color }) => (
                  <motion.div
                    key={text}
                    className="flex items-center gap-3 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 bg-white dark:bg-[#2a2a2a] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <Icon className={`h-4 w-4 ${color}`} />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
    </div>
  );
}

export default App;

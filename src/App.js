import Navbar from "./components/Navbar";
import { useState, useEffect, useRef } from "react";
import Hero_Section from "./components/Hero_Section";
import Sidebar from "./components/Sidebar";
import DevelopmentTab from "./components/developmentTab";
import ProgrammingTab from "./components/ProgrammingTab";
import ResearchTab from "./components/ResearchTab";
import AITab from "./components/ai-tab";
import OthersTab from "./components/OthersTab";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("programming");

  const mainContentRef = useRef(null); // ✅ scroll ref

  const renderContent = () => {
    switch (activeSection) {
      case "programming":
        return <ProgrammingTab />;
      case "development":
        return <DevelopmentTab />;
      case "research":
        return <ResearchTab />;
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

  // ✅ scroll to top when active section changes
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeSection]);

  return (
    <div className={`${darkMode ? "dark" : ""} dark:bg-[#1E1E1E]`}>
      <Navbar darkMode={darkMode} toggleDisplayMode={toggleDisplayMode} />
      <Hero_Section />

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
    </div>
  );
}

export default App;

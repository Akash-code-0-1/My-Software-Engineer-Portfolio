import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Hero_Section from "./components/Hero_Section";
import Sidebar from "./components/Sidebar";
import HomeTab from "./components/home-tab";
import WorkTab from "./components/Work-tab";
import TeamTab from "./components/team-tab";
import AITab from "./components/ai-tab";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <HomeTab />;
      case "work":
        return <WorkTab />;
      case "team":
        return <TeamTab />;
      case "ai":
        return <AITab />;
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

  return (
    <div className={`${darkMode ? "dark" : ""} dark:bg-[#1E1E1E]`}>
      <Navbar darkMode={darkMode} toggleDisplayMode={toggleDisplayMode} />
      <Hero_Section />

      <div className="flex h-[calc(100vh)] bg-white dark:bg-[#1E1E1E]">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <main className="flex overflow-y-auto p-6 bg-white dark:bg-[#1E1E1E] text-black dark:text-white">
          {renderContent()}
        </main>

      </div>
    </div>
  );
}

export default App;


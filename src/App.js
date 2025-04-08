import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Hero_Section from "./components/Hero_Section";
import Home_page from "./components/Home_page";
import Sidebar from "./components/Sidebar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
    <div className={`${darkMode ? "dark" : ""} dark:bg-black`}>
      <Navbar darkMode={darkMode} toggleDisplayMode={toggleDisplayMode} />
      <Hero_Section />
      <Sidebar />
      

    </div>
  );
}

export default App;


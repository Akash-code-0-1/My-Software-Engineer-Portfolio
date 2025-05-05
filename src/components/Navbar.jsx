import React, { useState, useEffect } from "react";
import darkmode from "../images/moon.png";
import lightmode from "../images/sun.png";
import profile_pic from "../images/akash.png"; // Import profile image

const Navbar = ({ darkMode, toggleDisplayMode }) => {
  const [showProfilePic, setShowProfilePic] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowProfilePic(heroBottom <= 60); // Adjust based on navbar height
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar top-0 fixed w-full h-[60px] flex justify-center items-center bg-white dark:bg-[#1e1e1e] z-10">
      <div className="flex justify-between w-3/4 h-[40px] items-center">
        <div className="left_secction flex items-center">
          {showProfilePic && (
            <img
              src={profile_pic}
              alt="Profile"
              className="h-[40px] w-[40px] rounded-full mr-2"
            />
          )}
          <h1 className="text-[20px] font-spaceGrotesk font-bold text-black dark:text-white">
            Tanvir
          </h1>
        </div>
        <div className="right_section">

          <img
            onClick={toggleDisplayMode}
            src={darkMode ? lightmode : darkmode}
            alt="Toggle Display Mode"
            className="h-[30px] w-[30px] cursor-pointer"
          />

        </div>
      </div>
    </div>
  );
};

export default Navbar;

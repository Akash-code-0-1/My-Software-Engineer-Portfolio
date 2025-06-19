import React from "react";
import profile_pic from "../images/akash.png";
// import { useEffect, useRef } from "react"


const Hero_Section = () => {

    return (
        <div id="hero-section"
            className="mt-10 bg-white dark:bg-[#1E1E1E] flex flex-col justify-between px-4 sm:px-8 md:px-16 lg:px-48">
            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-8 lg:mt-16">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <img
                        src={profile_pic}
                        alt="Profile Pic"
                        className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px] object-cover rounded-full shadow-lg shadow-black/30 dark:shadow-white/20"
                    />

                </div>


                {/* Profile Content */}
                <div className="text-center lg:text-left max-w-xl">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-[40px] xl:leading-normal  font-bold text-gray-800 mb-4 font-spaceGrotesk dark:text-white">
                        An Aspiring <br /> Software Engineer
                    </h1>
                    <p className="text-[12px] xl:text-[15px] text-black leading-relaxed font-spaceGrotesk font-normal dark:text-[#F2F2F2]">
                        Passionate about solving complex problems with innovative solutions, I specialize in
                        AI, web application development, and cutting-edge technologies. Driven by a relentless
                        curiosity to create impactful digital experiences.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start gap-4 mt-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                                alt="LinkedIn"
                                className="h-6 w-6 md:h-8 md:w-8 rounded-full dark:bg-white border"
                            />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                alt="GitHub"
                                className="h-6 w-6 md:h-8 md:w-8 rounded-full dark:bg-white border"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Button Links Section */}
            <div className="flex flex-wrap justify-center gap-4 mt-10 sm:mt-10 md:mt-10 md:justify-center lg:justify-start lg:mt-32 lg:ml-[-60px] xl:ml-0 xl:mt-40 2xl:ml-12 pb-8">
                <button className="bg-black dark:bg-white dark:text-black text-white text-sm md:text-balance py-2 px-4 rounded-full shadow hover:bg-gray-700">
                    Problem Solving
                </button>
                <button className="bg-black dark:bg-white dark:text-black text-white text-sm md:text-balance  py-2 px-4 rounded-full shadow hover:bg-gray-700">
                    Artificial Intelligence
                </button>
                <button className="bg-black dark:bg-white dark:text-black text-white text-sm md:text-balance  py-2 px-4 rounded-full shadow hover:bg-gray-700">
                    Web Development
                </button>
                <button className="bg-black dark:bg-white dark:text-black text-white text-sm md:text-balance  py-2 px-4 rounded-full shadow hover:bg-gray-700">
                    Research
                </button>
            </div>
        </div>
    );
};

export default Hero_Section;

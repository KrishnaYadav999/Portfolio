"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import krishna from "../images/Screenshot (183).png";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from "next/link";

const MainContent: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:space-x-12 px-6 lg:px-24 py-12 bg-white dark:bg-black text-gray-900 dark:text-white lg:mt-16">
      {/* Dotted Pattern */}
      <div className="absolute top-1/3 right-0 lg:right-12 transform translate-y-4 z-0">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <g fill="none" stroke="#8E83F3" strokeWidth="2">
            {Array.from({ length: 10 }).map((_, row) =>
              Array.from({ length: 10 }).map((_, col) => (
                <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="2"></circle>
              ))
            )}
          </g>
        </svg>
      </div>

      {/* Left Content */}
      <div className="relative z-10 text-center lg:text-left max-w-lg space-y-6">
        <p className="text-sm text-gray-500">📍 Mumbai, ON</p>
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          I Build Custom{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf]">Website Solutions</span>
          <br /> That Help Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf]">Business Grow</span>
        </h1>
        <p>I help you increase conversion and performance in every possible way.</p>

        {/* Buttons */}
        <div className="flex justify-center lg:justify-start space-x-4">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 px-6 py-3"
          >
            <Link href="/pages/cv">
              <span>See my cv</span>
            </Link>
          </HoverBorderGradient>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 px-6 py-3"
          >
            <Link href="/pages/works">
              <span>See my work</span>
            </Link>
          </HoverBorderGradient>
        </div>

        {/* Dark Mode Toggle */}
        <div className="mt-4">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 hidden bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="relative w-60 h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden z-10">
          <Image src={krishna} alt="Hero Img" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default MainContent;

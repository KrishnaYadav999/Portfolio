"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "./ui/sparkle";

export function SparklesPreview() {
  const [particleColor, setParticleColor] = useState("#000000"); // Default color

  useEffect(() => {
    // Check for dark mode after component mounts
    const isDarkMode = document.documentElement.classList.contains("dark");
    setParticleColor(isDarkMode ? "#FFFFFF" : "#000000");
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md transition-all duration-500 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black ">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-extrabold text-center text-gray-900 dark:text-white relative z-20 tracking-tight drop-shadow-lg">
        About Us
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm opacity-70 dark:opacity-50" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 opacity-90 dark:opacity-70" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm opacity-60 dark:opacity-40" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 opacity-80 dark:opacity-60" />

        {/* Core component with color based on mode */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={particleColor} // Use the state value
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] dark:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,black)]"></div>
      </div>
    </div>
  );
}

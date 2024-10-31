"use client"; // Add this line
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"; // Import the Image component

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // State for theme
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dark/light mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Persist theme on page reload
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="p-4 dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link
            href="/"
            className="bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf] bg-clip-text text-transparent"
          >
            krishna
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf] bg-clip-text text-transparent"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/pages/about"
            className={`${
              pathname === "/about"
                ? "bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf] bg-clip-text text-transparent"
                : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/pages/works"
            className={`${
              pathname === "/works"
                ? "bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf] bg-clip-text text-transparent"
                : ""
            }`}
          >
            Works
          </Link>
          <Link
            href="/pages/contact"
            className={`${
              pathname === "/contact"
                ? "bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf] bg-clip-text text-transparent"
                : ""
            }`}
          >
            Contact
          </Link>
          <Link
            href="/pages/cv"
            className={`${
              pathname === "/pages/cv"
                ? "bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf] bg-clip-text text-transparent"
                : ""
            }`}
          >
            CV
          </Link>
        </div>

        {/* Dark/Light Mode Image Toggle */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="focus:outline-none">
            {theme === "light" ? (
              <Image
                src="/images/day-and-night.png"
                alt="Switch to Dark Mode"
                width={24} // Set appropriate width
                height={24} // Set appropriate height
              />
            ) : (
              <Image
                src="/images/day.png"
                alt="Switch to Light Mode"
                width={24} // Set appropriate width
                height={24} // Set appropriate height
              />
            )}
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "block p-2 bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf] bg-clip-text text-transparent"
                : "block p-2"
            }
          >
            Home
          </Link>
          <Link
            href="/pages/about"
            className={
              pathname === "/pages/about"
                ? "block p-2 bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf] bg-clip-text text-transparent"
                : "block p-2"
            }
          >
            About
          </Link>
          <Link
            href="/pages/works"
            className={
              pathname === "/pages/works"
                ? "block p-2 bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf] bg-clip-text text-transparent"
                : "block p-2"
            }
          >
            Works
          </Link>
          <Link
            href="/pages/contact"
            className={
              pathname === "/pages/contact"
                ? "block p-2 bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf] bg-clip-text text-transparent"
                : "block p-2"
            }
          >
            Contact
          </Link>
          <Link
            href="/pages/cv"
            className={
              pathname === "/pages/cv"
                ? "block p-2 bg-gradient-to-r from-[#7f00ff] to-[#ab1aaf] bg-clip-text text-transparent"
                : "block p-2"
            }
          >
            CV
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

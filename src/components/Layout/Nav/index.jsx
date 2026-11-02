'use client';

import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/Home/logo.webp";
import Link from "next/link";
import GetQuote from "../../Button/GetQuote";
import SocialLink from "../../SocialLink";

const Nav = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 transition-colors duration-300 ease-in-out z-50 bg-white md:bg-transparent ${
          isScrolled ? "md:bg-white shadow-md" : ""
        }`}
      >
        <div
          className={`flex items-center justify-end pr-8 sm:pr-8 lg:pr-24 relative left-2 transition-all duration-300 overflow-hidden ${
            isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-10 opacity-100 py-1"
          }`}
        >
          <SocialLink className="text-gray-500" />
        </div>
        <div className="flex justify-between items-center px-4 sm:px-4 md:px-16 lg:px-20 py-4">
          <Link href="/">
            <img 
              src={logo.src || logo} 
              alt="Logo" 
              className="h-16 sm:h-16 md:h-20 lg:h-20" 
            />
          </Link>
          
          <button 
            onClick={toggleSidebar}
            className="z-50 p-2"
            style={{ 
              background: "none", 
              border: "none", 
              cursor: "pointer" 
            }}
          >
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                style={{
                  width: "24px",
                  height: "3px",
                  backgroundColor: "rgb(32, 68, 162)",
                  margin: "4px 0",
                  borderRadius: "2px",
                  transition: "0.3s"
                }}
              />
            ))}
          </button>
        </div>
      </nav>
      <GetQuote />
    </>
  );
};

export default Nav;
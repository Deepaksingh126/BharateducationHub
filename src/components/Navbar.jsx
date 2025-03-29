import React, { useState, useEffect } from "react";
import accountIcon from "../assets/account-avatar.png";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/study-material", label: "Study Material" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const getCurrentPageLabel = () => {
    const currentLink = navLinks.find(link => link.path === currentPath);
    return currentLink ? currentLink.label : "Menu";
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-blue-950 shadow-md sticky top-0 z-50">
      <div className="logo">
        <p className="text-2xl font-bold text-white">BharatEducationHub</p>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {getCurrentPageLabel()}
      </button>

      {/* Navigation Links */}
      <div className={`nav-links md:flex gap-8 ${
        isOpen 
          ? 'absolute top-full left-0 right-0 flex flex-col bg-blue-950 p-4 shadow-lg' 
          : 'hidden md:flex'
      }`}>
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className="text-white hover:text-blue-300 hover:border-b-2 hover:border-blue-300 font-medium transition-all duration-300"
            onClick={() => {
              setCurrentPath(link.path);
              setIsOpen(false);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
      
      <div className="account">
        <img src={accountIcon} alt="Account" className="w-10 h-10 rounded-full cursor-pointer hover:shadow-lg transition-shadow duration-300" />
      </div>
    </nav>
  );
};

export default Navbar;

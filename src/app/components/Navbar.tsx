import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-3 w-full flex justify-center items-center text-white z-50">
      <div className="relative flex flex-col items-center">
        {/* Hamburger button (only on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl mb-2 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menu container with your original style */}
        <div
          className={`flex flex-col md:flex-row md:space-x-6 rounded-2xl border border-white px-10 py-1 bg-[linear-gradient(to_top,rgba(0,34,255,0.4),rgba(0,4,21,0.4))] transition-all duration-300 ${
            isOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <a href="/" className="hover:text-[#20E9FF] transition-colors duration-300">
            Home
          </a>
          <a href="#projects" className="hover:text-[#20E9FF] transition-colors duration-300">
            Projects
          </a>
          <a href="#experience" className="hover:text-[#20E9FF] transition-colors duration-300">
            Experience
          </a>
          <a href="#about" className="hover:text-[#20E9FF] transition-colors duration-300">
            About
          </a>
          <a href="#contact" className="hover:text-[#20E9FF] transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

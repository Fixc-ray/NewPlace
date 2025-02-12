// Navbar.js
import { useState, useEffect } from "react";
import { Home, Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./App.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 z-50 bg-white ${
        scrolled ? "sm:bg-white" : "sm:bg-transparent"
      }`}
    >
      <div className="container mx-auto grid grid-cols-3 items-center">
        {/* Left Column: Hamburger Toggle */}
        <div className="text-left">
          <button
            className={`ham bg-transparent p-2 ${
              scrolled ? "sm:text-black" : "sm:text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Center Column: Logo */}
        <div className="text-center">
          <a
            href="/"
            className={`text-lg sm:text-2xl font-bold ${
              scrolled ? "sm:text-black" : "sm:text-white"
            }`}
          >
            New Haven Place
          </a>
        </div>

        {/* Right Column: CTA Button */}
        <div className="text-right">
          {/* Link to the Booking page */}
          <Link to="/booking">
            <button className="ham bg-[#825f35] text-white text-xs p-1 sm:text-sm sm:p-2">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white text-black text-center space-y-4 p-4">
          <li>
            <a
              href="#home"
              className="block text-black hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/socials"
              className="block text-black hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-black hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              What We Offer
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="block text-black hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

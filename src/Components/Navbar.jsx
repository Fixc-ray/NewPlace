import { useState, useEffect } from "react";
import { Home, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok } from "react-icons/fa"; // Import Instagram and TikTok icons
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
      className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 z-50 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto grid grid-cols-3 items-center">
        {/* Left Column: Hamburger Toggle */}
        <div className="text-left">
          <button
            className={`ham bg-transparent p-2 ${
              scrolled ? "text-black" : "text-white"
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
            style={{ fontFamily: "'Mate', 'Mouse Memoirs', 'PT Serif', serif" }}
            className={`text-2xl sm:text-2xl font-bold ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            New Haven Suites
          </a>
        </div>

        {/* Right Column: CTA Button */}
        <div className="text-right">
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
          {/* Social Media Icons */}
          <li>
            <div className="flex justify-center items-center gap-4">
              <a
                href="https://www.instagram.com/new.haven.suites/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@new_haven_suites?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
}

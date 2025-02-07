import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user has scrolled more than 0 pixels
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 z-10 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto grid grid-cols-3 items-center">
        {/* Left Column: Logo */}
        <div className="text-left">
          <a href="#" className={`text-lg sm:text-2xl font-bold ${
        scrolled ? "text-black" : "text-white"
      }`}>
            New Haven Place
          </a>
        </div>

        {/* Center Column: Navigation Links (shown on medium screens and up) */}
        <div className="hidden md:flex justify-center space-x-6">
          <a href="#" className={`${scrolled ? "text-black" : "text-white"}`}>
            Home
          </a>
          <a
            href="about"
            className={`${scrolled ? "text-black" : "text-white"}`}
          >
            About
          </a>
          <a href="#" className={`${scrolled ? "text-black" : "text-white"}`}>
            Services
          </a>
          <a href="#" className={`${scrolled ? "text-black" : "text-white"}`}>
            Contact
          </a>
        </div>

        {/* Right Column: Mobile Menu Toggle (for small screens) and CTA Button for larger screens */}
        <div className="text-right">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden bg-[#756745] p-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {/* CTA Button (shown on medium screens and up) */}
          <button className="hidden md:inline-block bg-[#825f35] text-white p-2">
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Menu (shown when isOpen is true) */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black/50 backdrop-blur-lg text-center space-y-4 p-4 md:hidden">
          <li>
            <a href="#" className="block text-white hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block text-white hover:text-yellow-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block text-white hover:text-yellow-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block text-white hover:text-yellow-300">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

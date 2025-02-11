import { useState, useEffect } from "react";
import { Home, Menu, X } from "lucide-react";
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

  // Open the external Airbnb link in a new tab
  const Book = () => {
    window.open(
      "https://www.airbnb.com/rooms/1349261162979951446?guests=1&adults=1&s=67&unique_share_id=b3ff539c-44b9-4625-81e3-31adc2bb498f&source_impression_id=p3_1739257035_P3lljSXZmlVnBv_-",
      "_blank"
    );
  };

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
          <button
            className="ham bg-[#825f35] text-white text-xs p-1 sm:text-sm sm:p-2"
            onClick={Book}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Dropdown Menu: Displayed when isOpen is true */}
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

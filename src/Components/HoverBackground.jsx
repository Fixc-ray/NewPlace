import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import g7 from "../assets/g7.jpg";
import g6 from "../assets/g6.jpg";
import "../index.css";

const HoverBackground = () => {
  const [background, setBackground] = useState(g7);
  const [text, setText] = useState("Welcome to Paradise");
  const [scale, setScale] = useState(0.5);
  const [paragraph, setParagraph] = useState(
    "Welcome to Paradise, where luxury meets tranquility. Nestled in the heart of the city, our exquisite hotel offers a perfect blend of modern comfort and timeless elegance. Whether you're here for business or leisure, our hotel provides the perfect setting for a memorable stay."
  );

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition <= 1700) {
        setScale(0.5);
      } else if (scrollPosition >= 900) {
        setScale(1);
      } else if (scrollPosition >= 2000) {
        setScale(0.5);
      } else {
        const newScale = 1 + ((scrollPosition - 1000) / 200) * 0.5;
        setScale(newScale);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const DiscoverMore = () => {
    navigate("/Details");
  };

  return (
    <div
      className="home relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-between text-white text-center transition-all duration-500 px-4"
      style={{
        backgroundImage: `url(${background})`,
        transform: `scale(${scale})`,
        opacity: scale,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Heading */}
      <div className="relative z-10 mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{text}</h1>
        <p className="text-base sm:text-lg mt-4 sm:mt-6 px-2 sm:px-10 md:px-20 lg:px-36">
          {paragraph}
        </p>
      </div>

      {/* Discover More Button */}
      <button
        className="relative z-10 px-6 py-3 mt-4 text-base sm:text-lg font-semibold bg-[#756745] text-black 
          hover:bg-[#756745] hover:scale-105 transition duration-300 
          shadow-lg hover:shadow-[#756745] rounded-md"
        onClick={DiscoverMore}
      >
        Discover More
      </button>

      {/* Buttons at Bottom */}
      <div className="relative z-10 absolute bottom-6 sm:bottom-10 flex flex-col sm:flex-row gap-4 sm:gap-10">
        <a
          className="text-base sm:text-lg font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded transition duration-300 text-white cursor-pointer"
          onMouseEnter={() => {
            setBackground(g6);
            setText("Discover the Hidden Gems");
            setParagraph(
              "Welcome to Paradise, where luxury meets tranquility. Nestled in the heart of the city, our exquisite hotel offers a perfect blend of modern comfort and timeless elegance. Whether you're here for business or leisure, our hotel provides the perfect setting for a memorable stay."
            );
          }}
        >
          Explore
        </a>

        <a
          className="text-base sm:text-lg font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded transition duration-300 text-white cursor-pointer"
          onMouseEnter={() => {
            setBackground(g7);
            setText("Experience the Luxury");
            setParagraph(
              "From curated local experiences to breathtaking views, every moment at New Haven is crafted to delight. Enjoy personalized concierge services, and an ambiance that feels like a five-star getaway—but with the warmth of home."
            );
          }}
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default HoverBackground;

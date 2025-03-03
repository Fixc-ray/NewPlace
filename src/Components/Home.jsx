import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { FaCar, FaUmbrellaBeach, FaShieldAlt, FaWifi, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  // Replace these URLs with your actual image links
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczOmltU9QMKHzsea8omp_SeN3-7krTUe7pUh-w_jGYEdFGJ0sZUfJdFOy0r-IeQ6XJQlUqOHcDl8o74uBl3-AyAenypw_aHJyixMAThL7eGUhQ2awXGttqTVCcYFFuq3Q46cXgkgoo6K9awYafyBxbMccw=w828-h552-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNpksqO1X004SDyx2iRGtg7BzUc5AlqfCOn-s54JPV4fKn_jy8KfrSmimzpSWdRERuQxfmimfz8d9dZX1WPHFSW2p5C8ODFQx3gwztT3fqJG12kmgTPy6bMuS83hM6yzozGbYmhgEdHP04z-YkiFEXvZQ=w828-h552-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPxMmDFeO81KCkLeuybhLH6j-odH3yp-_UxqDZYU3ldiNXk-7H3dfPpKr55jQ11Eu9Slk34Acb189GuyE-JW8C6ydP16m1BWaAFq6fKHQJNmf0BsTHo6-fm74LFPBHmF-YhtmRHwYAeg-UNaim7aVD5dA=w828-h552-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczP7Bq5OLt9VijypWM6tApKSd6QO3ULphBxrH49CdusDXG0_G_xwYHvc1Lrq2hIA9leowQ_IPkvUaHL7v9_J1Y2HI0OzPzplBONvmAwqichnIhF2CK4HkAjpcgg40M2jEt-vp62AoLhsaU23GWeuZkN80w=w828-h552-s-no-gm?authuser=0",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  const Book = () => {
    window.open(
      "https://www.airbnb.com/rooms/1349261162979951446?guests=1&adults=1&s=67&unique_share_id=b3ff539c-44b9-4625-81e3-31adc2bb498f&source_impression_id=p3_1739257035_P3lljSXZmlVnBv_-",
      "_blank"
    );
  };

  const handleContactClick = () => {
    const businessWhatsAppNumber = "254115995295";
    const message = "Hello, I would like to inquire about your services.";
    const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="home" className="home w-full h-screen top-0 relative rounded">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center sm:items-start sm:pt-16 h-full px-4 sm:px-8 md:px-12 lg:px-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-xs md:text-2xl lg:text-5xl font-bold text-white mb-1 sm:mb-3"
        >
          Find Your Dream
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl sm:text-md md:text-md lg:text-5xl font-bold text-white mb-2 sm:mb-4"
        >
          Stay Today
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6 max-w-xl"
        >
          A serene Bnb offering breathtaking views, perfect for those seeking
          tranquility. Nestled in a picturesque location for a peaceful
          ambiance. Ideal for relaxation or creative retreats.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-2 sm:justify-start"
        >
          <button
            className="bg-white text-black border border-white font-bold rounded transition duration-300 text-xs sm:text-sm px-4 py-2 hover:bg-black hover:text-white"
            onClick={Book}
          >
            Find Stay
          </button>
          <button
            className="bg-transparent text-white border border-white font-bold rounded transition duration-300 text-xs sm:text-sm px-4 py-2 hover:bg-white hover:text-black"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mt-28"
        >
          <div className="absolute bottom-4 right-4 bg-white rounded-lg w-40 sm:w-48 md:w-80 p-3 sm:p-4 shadow-lg">
            <h3 className="text-black font-bold text-xs sm:text-sm md:text-lg mb-1 sm:mb-2 text-center">
              What We Offer
            </h3>
            <p className="text-center text-black text-xs sm:text-sm md:text-base font-medium">
              Enjoy a magnificent stay with us.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 text-black mt-2">
              <div className="flex flex-col items-center text-xs sm:text-sm">
                <FaCar className="text-lg sm:text-xl mb-1 text-[#756745]" />
                <span>Parking</span>
              </div>
              <div className="flex flex-col items-center text-xs sm:text-sm">
                <FaUmbrellaBeach className="text-lg sm:text-xl mb-1 text-[#756745]" />
                <span>Pergola</span>
              </div>
              <div className="flex flex-col items-center text-xs sm:text-sm">
                <FaShieldAlt className="text-lg sm:text-xl mb-1 text-[#756745]" />
                <span>Security</span>
              </div>
              <div className="flex flex-col items-center text-xs sm:text-sm">
                <FaWifi className="text-lg sm:text-xl mb-1 text-[#756745]" />
                <span>Free WiFi</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="arrow absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <FaChevronDown size={30} className="text-white animate-bounce" />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { motion } from "framer-motion";
import g4 from "../assets/g4.jpg";
import "./App.css";
import { FaCar, FaUmbrellaBeach, FaShieldAlt, FaWifi } from "react-icons/fa";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="w-full rounded h-screen relative">
          <div
            className="absolute inset-0 bg-cover bg-center mr-4"
            style={{ backgroundImage: `url(${g4})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
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
              A serene BnB offering breathtaking views, perfect for those
              seeking tranquility. Nestled in a picturesque location for a
              peaceful ambiance. Ideal for relaxation or creative retreats.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="flex flex-col mr-38 justify-start sm:flex-row gap-2 sm:justify-start"
            >
              <button
                className="bg-white text-black border border-white font-bold rounded transition duration-300 text-xs sm:text-sm hover:bg-white hover:text-black"
                onClick={() => alert("Explore Menu Clicked!")}
              >
                Explore Menu
              </button>
              <button
                className="bg-transparent text-white border border-white font-bold rounded transition duration-300 text-xs sm:text-sm hover:bg-white hover:text-black"
                onClick={() => alert("Contact Us Clicked!")}
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
              <div className="absolute bottom-0 sm:bottom-1 right-1 sm:right-1 bg-white rounded-lg w-40 sm:w-48 md:w-80 p-3 sm:p-4">
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
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;

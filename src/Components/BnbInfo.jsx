import React from "react";
import { motion } from "framer-motion";

const BnbInfo = () => {
  return (
    <motion.section
      className="home py-12 bg-white p-4"
      initial={{ opacity: 0, y: 20 }} // Start invisible, slightly below
      animate={{ opacity: 1, y: 0 }} // Fade in & move up
      transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
    >
      <div className="flex flex-col mx-auto md:flex-row items-start">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-xl sm:text-4xl lg:text-4xl font-bold text-gray-800">
            Discover Your Perfect
          </h2>
          <h2 className="text-xl sm:text-4xl lg:text-4xl font-bold text-[#756745]">
            Vacation Stay With Us
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-600 text-base sm:text-lg">
            Escape to our charming BnB, where every detail is designed to help you relax and unwind.
            Enjoy cozy rooms, personalized service, and a peaceful atmosphere that feels like home.
            Whether you're seeking a quiet retreat or an adventurous getaway, experience the perfect blend of comfort and style.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default BnbInfo;

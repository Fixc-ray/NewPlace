import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BnbInfo = () => {
  // Initialize scale state for the text
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // The following conditions are copied from your HoverBackground component.
      // You may wish to tweak these conditions to suit your desired scaling behavior.
      if (scrollPosition <= 200) {
        setScale(0.5);
      } else if (scrollPosition >= 300) {
        setScale(1);
      } else if (scrollPosition >= 200) {
        setScale(0.5);
      } else {
        const newScale = 1 + ((scrollPosition - 1000) / 200) * 0.5;
        setScale(newScale);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      className="home py-12 bg-white p-4"
      initial={{ opacity: 0, y: 20 }}            
      whileInView={{ opacity: 1, y: 0 }}           
      viewport={{ once: true, amount: 0.2 }}       
      transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
    >
      <motion.div style={{ transform: `scale(${scale})` }}>
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
      </motion.div>
    </motion.section>
  );
};

export default BnbInfo;

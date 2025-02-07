import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import About from "./About";
import "./App.css";
import BnbInfo from "./BnbInfo";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Home from "./Home";
import HoverBackground from "./HoverBackground";
import Navbar from "./Navbar";

// Fade-in animation settings
const fadeIn = {
  initial: { opacity: 0, y: 20 }, // Start invisible, slightly below
  animate: { opacity: 1, y: 0 }, // Fade in & move up
  transition: { duration: 1.2, ease: "easeOut" }, // Smooth transition
};

function App() {
  return (
    <div>
      {/* Navbar stays fixed */}
      <Navbar />

      {/* Wrap each component with motion.div for fade-in */}
      <motion.div {...fadeIn}>
        <Home />
      </motion.div>

      <motion.div {...fadeIn}>
        <BnbInfo />
      </motion.div>

      <motion.div {...fadeIn}>
        <Gallery />
      </motion.div>

      <motion.div {...fadeIn}>
        <About />
      </motion.div>

      <motion.div {...fadeIn}>
        <HoverBackground />
      </motion.div>

      <motion.div {...fadeIn}>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;

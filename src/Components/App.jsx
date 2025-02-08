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


function App() {
  return (
    <div>
      <Navbar />
        <Home />
        <BnbInfo />
        <Gallery />
        <About />
        <HoverBackground />
        <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import BnbInfo from "./BnbInfo";
import Gallery from "./Gallery";
import About from "./About";
import RoomDetails from "./RoomDetailed"
import Footer from "./Footer";
import "./App.css";
import HoverBackground from "./HoverBackground";
import Socials from "./Socials";


function App() {
  return (
    <Router>
      <div>
        {/* Navbar is always visible */}
        <Navbar />

        {/* Define your routes */}
        <Routes>
          {/* Main/Home page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <BnbInfo />
                <Gallery />
                <About />
                <HoverBackground />
                <Footer />
              </>
            }
          />

          {/* Route for the HoverBackground page */}
          <Route path="/Details" element={<RoomDetails />} />
          <Route path="/socials" element={<Socials />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

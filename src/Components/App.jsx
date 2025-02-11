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
        <Navbar />
        <Routes>
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
          <Route path="/Details" element={<RoomDetails />} />
          <Route path="/socials" element={<Socials />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import BnbInfo from "./BnbInfo";
import Gallery from "./Gallery";
import About from "./About";
import RoomDetails from "./RoomDetailed";
import Footer from "./Footer";
import HoverBackground from "./HoverBackground";
import Socials from "./Socials";
import BookingForm from "./BookingForm";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <AppContent user={user} setUser={setUser} />
    </Router>
  );
}

// Separate component to handle location check
function AppContent({ user, setUser }) {
  const location = useLocation();
  const hideNavbarOn = ["/dashboard"];

  // Check if the current route is in the list of routes where navbar should be hidden
  const shouldShowNavbar = !hideNavbarOn.includes(location.pathname);

  return (
    <div>
      {shouldShowNavbar && <Navbar />}
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
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/Details" element={<RoomDetails />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/signup" element={<Signup onSignup={setUser} />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;

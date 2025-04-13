import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="home bg-[#141414] text-white p-8">
      <div className="container mx-auto">
        {/* First Row - Address, Phone, Email */}
        <div className="grid grid-cols-1 gap-8 mb-8 justify-items-center text-center sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="mr-2" />
              Where to Find Us
            </h3>
            <p>Mamboleo, Kisumu</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center justify-center mb-4">
              <FaPhoneAlt className="mr-2" />
              Call Us
            </h3>
            <p>0115995295</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center justify-center mb-4">
              <FaEnvelope className="mr-2" />
              Email Us
            </h3>
            <p>havenserenity3@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        {/* Second Row - Brand Info and Social Media Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center text-center">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold">New Haven Suites</h3>
            <p className="text-sm mt-2">
              Your trusted partner for the perfect vacation stay.
            </p>
          </div>

          {/* Instagram Column */}
          <div>
            <h3 className="text-lg font-semibold">Follow us on Instagram</h3>
            <a
              href="https://www.instagram.com/new.haven.suites/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-white text-[#E1306C] p-3 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* TikTok Column */}
          <div>
            <h3 className="text-lg font-semibold">Follow us on TikTok</h3>
            <a
              href="https://www.tiktok.com/@new_haven_suites?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-white text-black p-3 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

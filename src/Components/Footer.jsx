import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="home bg-[#141414] text-white py-8">
      <div className="container mx-auto">
        {/* First Row - Address, Phone, Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2" />
              Where to Find Us
            </h3>
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center mb-4">
              <FaPhoneAlt className="mr-2" />
              Call Us
            </h3>
            <p>0115995295</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center mb-4">
              <FaEnvelope className="mr-2" />
              Email Us
            </h3>
            <p>havenserenity3@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold">New Haven</h3>
            <p className="text-sm mt-2">
              Your trusted partner for the perfect vacation stay.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

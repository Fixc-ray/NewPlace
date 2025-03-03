import React from "react";
import g3 from "../assets/g3.jpg";

const About = () => {
  return (
    <section id="about" className="home bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 p-4 text-left">
            <div className="mt-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Luxury Apartments in Kisumu
              </h3>
              <p className="text-white">
                Stay in our upscale BnB, just 6 km from Kisumu International Airport.
                Perfect for business or leisure, we offer:
              </p>
              <ul className="list-disc list-inside text-white mt-4">
                <li>
                  <strong>Two-Bedroom Apartments:</strong> KES 5,500 per night
                </li>
                <li>
                  <strong>One-Bedroom Apartments:</strong> KES 3,500 per night
                </li>
                <li>
                  <strong>Parking:</strong> Secure and spacious
                </li>
                <li>
                  <strong>Security:</strong> 24/7 surveillance with electric fencing
                </li>
                <li>
                  <strong>Modern Interiors:</strong> Open kitchens and elegant furnishings
                </li>
                <li>
                  <strong>Roof-Top Area:</strong> Pergola and barbecue for relaxation
                </li>
                <li>
                  <strong>Location:</strong> Close to the airport and main attractions
                </li>
              </ul>
              <p className="text-white mt-4">
                Enjoy luxury and affordability during your stay in Kisumu!
              </p>
            </div>
          </div>

          {/* Image Section with Dark Overlay */}
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-black opacity-50 rounded"></div>
            <img
              src={g3}
              alt="About us"
              className="w-full h-auto rounded shadow-lg filter brightness-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

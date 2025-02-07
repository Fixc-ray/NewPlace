import React from "react";
import g5 from "../assets/g5.jpg";

const About = () => {
  return (
    <section id="about" className="home bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 p-4 text-left">
            <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
            <p className="text-white mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet.
            </p>
            <p className="text-white">
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
              semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
          </div>

          {/* Image Section with Dark Overlay */}
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-black opacity-50 rounded"></div>
            <img
              src={g5}
              alt="About us"
              className="w-full h-auto rounded shadow-lg filter brightness-50 rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

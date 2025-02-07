import React from "react";
// Replace these imports with your actual image paths
import Front from "../assets/Front.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";

const Gallery = () => {
  return (
    <section className="container home mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Huge Image */}
        <div className="md:w-1/2">
          <img
            src={Front}
            alt="Left Huge"
            className="w-full h-full rounded shadow-lg filter brightness-50 rounded"
          />
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {/* Top Row: Two Small Images */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <img
                src={g1}
                alt="Right Top 1"
                className="w-full h-auto rounded shadow-lg filter brightness-50 rounded"
              />
            </div>
            <div className="w-1/2">
              <img
                src={g2}
                alt="Right Top 2"
                className="w-full h-auto rounded shadow-lg filter brightness-50 rounded"
              />
            </div>
          </div>
          <div>
            <img
              src={g3}
              alt="Right Bottom"
              className="w-full h-auto rounded shadow-lg filter brightness-50 rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

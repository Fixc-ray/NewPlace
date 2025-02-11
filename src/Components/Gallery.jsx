import React from "react";
import Front from "../assets/Front.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const Navigate = useNavigate()

  const Gallery = () =>{
    Navigate("/socials")
  }
  return (
    <section className="container p-4">
      <h2 className="text-black font-bold lg:text-4xl mb-8 text-gray-800">View Our Gallery</h2>
      <div className=" home p-4 flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <img
            src={Front}
            alt="Left Huge"
            className="w-full h-full rounded shadow-lg filter brightness-50"
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
                className="w-full h-auto rounded shadow-lg filter brightness-50"
              />
            </div>
            <div className="w-1/2">
              <img
                src={g2}
                alt="Right Top 2"
                className="w-full h-auto rounded shadow-lg filter brightness-50"
              />
            </div>
          </div>
          {/* Bottom Image */}
          <div>
            <img
              src={g3}
              alt="Right Bottom"
              className="w-full h-auto rounded shadow-lg filter brightness-50"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          className="bg-[#825f35] text-white py-2 px-6 rounded hover:bg-[#6b4b28] transition-colors"
          onClick={Gallery}
        >
          View Us
        </button>
      </div>
    </section>
  );
};

export default Gallery;

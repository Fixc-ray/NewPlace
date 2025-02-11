import React from 'react';
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";
import g9 from "../assets/g9.jpg";
import g10 from "../assets/g10.jpg";
import g11 from "../assets/g11.jpg";
import g12 from "../assets/g12.jpg";
import g13 from "../assets/g13.jpg";
import g14 from "../assets/g14.jpg";
import g15 from "../assets/g15.jpg";
import g16 from "../assets/g16.jpg";
import g17 from "../assets/g17.jpg";
import g18 from "../assets/g18.jpg";
import g19 from "../assets/g19.jpg";
import g20 from "../assets/g20.jpg";
import g21 from "../assets/g21.jpg";
import g22 from "../assets/g22.jpg";
import g23 from "../assets/g23.jpg";
import g24 from "../assets/g24.jpg";
import g25 from "../assets/g25.jpg";
import g26 from "../assets/g26.jpg";
import g27 from "../assets/g27.jpg";
import g28 from "../assets/g28.jpg";
import "./App.css";

const images = [
  { id: 1, src: g1, size: "large" },
  { id: 2, src: g2, size: "small" },
  { id: 3, src: g3, size: "small" },
  { id: 4, src: g4, size: "large" },
  { id: 5, src: g5, size: "small" },
  { id: 6, src: g6, size: "small" },
  { id: 7, src: g7, size: "large" },
  { id: 8, src: g8, size: "small"},
  { id: 9, src: g9, size: "small"},
  { id: 10, src: g10, size: "small"},
  { id: 11, src: g11, size: "Large"},
  { id: 12, src: g12, size: "small"},
  { id: 13, src: g13, size: "small"},
  { id: 14, src: g14, size: "large"},
  { id: 15, src: g15, size: "small"},
  { id: 16, src: g16, size: "small"},
  { id: 17, src: g17, size: "large"},
  { id: 18, src: g18, size: "small"},
  { id: 19, src: g19, size: "large"},
  { id: 20, src: g20, size: "small"},
  { id: 21, src: g21, size: "small"},
  { id: 22, src: g22, size: "large"},
  { id: 23, src: g23, size: "small"},
  { id: 24, src: g24, size: "small"},
  { id: 25, src: g25, size: "large"},
  { id: 26, src: g26, size: "large"},
  { id: 27, src: g27, size: "small"},
  { id: 28, src: g28, size: "small"},

];

function Socials() {
  return (
    <section className="home p-4">
      <h2 className="text-2xl font-bold mb-4">Our Socials Gallery</h2>
      <div className="home grid grid-cols-4 gap-4 auto-rows-[150px]">
        {images.map((img) => (
          <div
            key={img.id}
            className={`overflow-hidden rounded ${
              img.size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            }`}
          >
            <img
              src={img.src}
              alt={`social-${img.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Socials;

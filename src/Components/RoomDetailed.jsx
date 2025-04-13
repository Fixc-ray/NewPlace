import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import Rooms from "../assets/Rooms.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";

function RoomComponent() {
  // Updated room data with unique, slightly varied descriptions including shared core amenities.
  const rooms = [
    {
      id: 1,
      name: "Superior Room",
      subheading: "111 m² / 1,200ft²  | Up to 2 Guests | Nature View",
      image: g2,
      description:
        "Our stylish Superior Room offers a cozy retreat with a fully equipped kitchen, a modern bathroom with a warm shower, and a private toilet. Enjoy sweeping city views and a plush king bed, perfect for couples or solo travelers seeking comfort and elegance.",
      pricing: {
        twoBedrooms: "Not Available",
        oneBedroom: "Ksh 3500 per night",
      },
    },
    {
      id: 2,
      name: "Deluxe Room",
      subheading: "111 m² / 1,200ft²  | Up to 2 Guests | Nature View",
      image: g3,
      description:
        "Blending comfort with sophistication, the Deluxe Room features a contemporary interior, a well-appointed kitchen, a warm shower, and a private toilet. Ideal for small families or guests who appreciate a bit more space while enjoying stunning cityscapes.",
      pricing: {
        twoBedrooms: "Not Available",
        oneBedroom: "Ksh 3500 per night",
      },
    },
    {
      id: 3,
      name: "Balcony Deluxe",
      subheading: "111 m² / 1,200ft²  | Up to 4 Guests | Balcony View",
      image: g6,
      description:
        "Relax in the Balcony Deluxe—complete with an open kitchen setup, private bathroom with a warm shower, and your own toilet. Step out onto the balcony for a breath of fresh air as you soak in the city views, ideal for a tranquil and stylish escape.",
      pricing: {
        twoBedrooms: "Ksh 5000 per night",
        oneBedroom: "Not Available",
      },
    },
    {
      id: 4,
      name: "Executive Suite",
      subheading: "111 m² / 1,200ft² | Up to 4 Guests | Nature View",
      image: g7,
      description:
        "The Executive Suite is our most spacious option, offering refined comfort with a fully fitted kitchen, warm water shower, and a private toilet. With generous space and beautiful city and garden views, it’s perfect for families or professionals needing more room.",
      pricing: {
        twoBedrooms: "Ksh 5000 per night",
        oneBedroom: "Not Available",
      },
    },
  ];

  // activeUnit tracks which room unit/section is currently in view.
  const [activeUnit, setActiveUnit] = useState(null);
  // sectionRefs stores references for each room section.
  const sectionRefs = useRef({});

  useEffect(() => {
    // Create an Intersection Observer instance.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When an entry is at least 50% visible, update the active unit.
          if (entry.isIntersecting) {
            setActiveUnit(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each section.
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup on unmount.
    return () => observer.disconnect();
  }, [rooms]);


const MoreDetails =()=> {
  alert("More Room Details To Be Added Soon")
} 
  return (
    <div>
      {/* Top Hero Section */}
      <div className="home w-full h-screen relative rounded">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${Rooms})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-6xl font-bold text-white">Rooms</h1>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <FaChevronDown size={30} className="text-white animate-bounce" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 text-black">
        <h2 className="text-2xl font-bold mb-6 text-center">
          BnB Room Details
        </h2>
        <div className="sm:px-6 lg:px-8">
          {/* Grid with Left Nav & Right Rooms Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Navigation Panel - Hidden on Mobile */}
            <nav className="hidden md:block md:col-span-1 p-4 sticky top-40 self-start">
              <ul className="space-y-3">
                {rooms.map((room) => (
                  <li key={room.id}>
                    <a
                      href={`#unit-${room.id}`}
                      className={`block px-3 py-2 rounded transition-colors ${
                        activeUnit === `unit-${room.id}`
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {room.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Rooms Cards Section */}
            <div className="md:col-span-3 space-y-6">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  id={`unit-${room.id}`}
                  ref={(el) =>
                    (sectionRefs.current[`unit-${room.id}`] = el)
                  }
                  className="mb-40 overflow-hidden flex flex-col md:flex-row"
                >
                  {/* Left: Room Image */}
                  <div className="md:w-full">
                    <img
                      src={room.image}
                      alt={`Room ${room.id}`}
                      className="w-full h-110 object-cover"
                    />
                  </div>

                  {/* Right: Room Details */}
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {room.name}
                      </h3>

                      {/* Subheading */}
                      <p className="text-sm text-gray-600 mb-3">
                        {room.subheading}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-gray-800 mb-6 leading-relaxed">
                        {room.description}
                      </p>

                      {/* Pricing */}
                      <div className="space-y-1">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">2 Bedrooms:</span>{" "}
                          {room.pricing.twoBedrooms}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">1 Bedroom:</span>{" "}
                          {room.pricing.oneBedroom}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button onClick={MoreDetails} className="px-4 py-2 text-sm font-semibold border border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors">
                        MORE DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* End of Rooms Cards Section */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomComponent;

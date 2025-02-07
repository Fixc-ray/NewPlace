import React, { useState } from "react";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";

const PropertyPrices = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const allRooms = [
    {
      id: "one",
      title: "One Bedroom",
      price: "Ksh 3500 per night",
      image: g1,
    },
    {
      id: "two",
      title: "Two Bedroom",
      price: "Ksh 5000 per night",
      image: g2,
    },
    {
      id: "three",
      title: "Three Bedroom",
      price: "Contact us for pricing",
      image: g3,
    },
  ];

  const roomsToDisplay = selectedRoom
    ? allRooms.filter((room) => room.id === selectedRoom)
    : allRooms;

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Property Prices
        </h2>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={() => setSelectedRoom("one")}
            className="px-6 py-2 bg-[#756745] text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            One Bedroom
          </button>
          <button
            onClick={() => setSelectedRoom("two")}
            className="px-6 py-2 bg-[#756745] text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Two Bedroom
          </button>
          <button
            onClick={() => setSelectedRoom("three")}
            className="px-6 py-2 bg-[#756745] text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Three Bedroom
          </button>
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {roomsToDisplay.map((room) => (
            <div
              key={room.id}
              className="bg-gray-100 rounded shadow flex flex-col items-center"
            >
              <div className="relative w-full h-48 overflow-hidden rounded mb-2">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
                {/* Price overlay */}
                <div className="absolute bottom-0 left-0 bg-white/70 text-black px-2 py-1 text-sm rounded-tr">
                  {room.price}
                  <h3 className="text-xl font-bold mb-1">{room.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyPrices;

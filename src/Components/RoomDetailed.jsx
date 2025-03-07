import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Rooms from "../assets/Rooms.jpg";
import g2 from "../assets/g2.jpg";      
import g3 from "../assets/g3.jpg";    
import g6 from "../assets/g6.jpg";       
import g7 from "../assets/g7.jpg";

function RoomComponent() {
  // Each room now has its own image.
  const rooms = [
    { id: 1, hasBalcony: true, image: g2 },
    { id: 2, hasBalcony: true, image: g3 },
    { id: 3, hasBalcony: true, image: g6 },
    { id: 4, hasBalcony: false, image: g7 }, 
  ];

  return (
    <div>
      <div className="home w-full h-screen relative rounded">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${Rooms})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-6xl font-bold text-white">Rooms</h1>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <FaChevronDown size={30} className="text-white animate-bounce" />
        </div>
      </div>

      <div className="p-4 text-black">
        <h2 className="text-2xl font-bold mb-6 text-center">BnB Room Details</h2>
        <div className="grid grid-cols-1 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left: Room Image */}
              <div className="md:w-1/3">
                <img
                  src={room.image}
                  alt={`Room ${room.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Room Details */}
              <div className="p-6 md:w-2/3 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Unit {room.id}{" "}
                    <span className="text-sm font-normal text-gray-600">
                      {room.hasBalcony ? "(With Balcony)" : "(No Balcony)"}
                    </span>
                  </h3>
                  <p className="mb-2">
                    This unit offers 2 bedrooms with an option to rent just 1 bedroom.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="mb-1">
                    <span className="font-semibold">2 Bedrooms:</span> Ksh 5000 per night
                  </p>
                  <p>
                    <span className="font-semibold">1 Bedroom:</span> Ksh 3500 per night
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomComponent;

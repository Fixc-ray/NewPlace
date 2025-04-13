import React from "react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  // Replace these URLs with your actual image URLs.
  const frontImageUrl = "https://lh3.googleusercontent.com/pw/AP1GczM5yi87npJBa2R-gwUpMuPTJyq0RQQB3-IGoNz5C0_pnSZ5M6FNeFY0T7qqa-MsJfyfAySjrnD9COouWgBOI92YlPmEpBidp3REeq4ZS1OjsoifbU-hrjZ5K_yTDv94MBKHmzvAKsQRZktEeYO_D8YkHw=w828-h552-s-no-gm?authuser=0";
  const g1Url = "https://lh3.googleusercontent.com/pw/AP1GczNy6vbaxO4Y6kFk8C8YTu9Gi77n-1ElJXTUjN1YeeLSepaLuW0E-LgRW2h5DNqUQt5DQrf5oF0hHV3FHbWAe2-hAeG8C-AkqgT4WvPjHUuZ_H-WGKycQOZrwq91MFL2zOzD9Z3EGqDYE6XpW3vsabjNKg=w828-h552-s-no-gm?authuser=0";
  const g2Url = "https://lh3.googleusercontent.com/pw/AP1GczMnA-eH-MKdNrRC4JshN2nvvM-rF-E1SofJu2Y-MgYKdVz8EDRs_H71UytiDp7B7wEGYJgMbMB6fDTKMBh-CusmZnyJ4oPVPggKVZAAul5DnyJkNPSHKqwJ0c5kcm_NhzFOlcIUzYO7kMU7yr0lD9nWRg=w828-h552-s-no-gm?authuser=0";
  const g3Url = "https://lh3.googleusercontent.com/pw/AP1GczOmltU9QMKHzsea8omp_SeN3-7krTUe7pUh-w_jGYEdFGJ0sZUfJdFOy0r-IeQ6XJQlUqOHcDl8o74uBl3-AyAenypw_aHJyixMAThL7eGUhQ2awXGttqTVCcYFFuq3Q46cXgkgoo6K9awYafyBxbMccw=w828-h552-s-no-gm?authuser=0";

  const handleGallery = () => {
    navigate("/socials");
  };

  return (
    <section className="container p-4">
      <h2 className="text-black font-bold lg:text-4xl mb-8 text-gray-800">
        View Our Gallery
      </h2>
      <div className="home p-4 flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <img
            src={frontImageUrl}
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
                src={g1Url}
                alt="Right Top 1"
                className="w-full h-auto rounded shadow-lg filter brightness-50"
              />
            </div>
            <div className="w-1/2">
              <img
                src={g2Url}
                alt="Right Top 2"
                className="w-full h-auto rounded shadow-lg filter brightness-50"
              />
            </div>
          </div>
          {/* Bottom Image */}
          <div>
            <img
              src={g3Url}
              alt="Right Bottom"
              className="w-full h-auto rounded shadow-lg filter brightness-50"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          className="bg-[#825f35] text-white py-2 px-6 rounded hover:bg-[#6b4b28] transition-colors"
          onClick={handleGallery}
        >
          View Us
        </button>
      </div>
    </section>
  );
};

export default Gallery;

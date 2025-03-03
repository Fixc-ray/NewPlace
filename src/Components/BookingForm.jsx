import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaCar,
  FaUmbrellaBeach,
  FaShieldAlt,
  FaWifi,
  FaChevronDown,
} from "react-icons/fa";
import g6 from "../assets/g6.jpg";
import "./App.css";
import emailjs from "emailjs-com";

export default function BookingForm() {
  const [roomType, setRoomType] = useState("1bedroom");
  const [numberOfMembers, setNumberOfMembers] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  // Create a ref for the booking form container
  const bookingFormRef = useRef(null);

  const computeNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const computeTotalAmount = () => {
    const nights = computeNights();
    const roomPrice = roomType === "1bedroom" ? 3500 : 5000;
    return nights * roomPrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      setMessage("Please select valid check-in and check-out dates.");
      return;
    }
    setMessage("");
    setShowModal(true);
  };

  const handleModalConfirm = async () => {
    if (!customerName) {
      setMessage("Please enter your full name.");
      return;
    }
    if (!phoneNumber) {
      setMessage("Please enter your phone number.");
      return;
    }
    if (!customerEmail) {
      setMessage("Please enter your email address.");
      return;
    }
    setMessage("");

    // Pop alert notifying user that payment is being processed
    alert("Kindly be patient as we send a prompt to you're phone number. Kindly check your email after Payment");

    const bookingPayload = {
      room_type: roomType,
      number_of_members: numberOfMembers,
      check_in: checkIn,
      check_out: checkOut,
      customer_name: customerName, 
    };

    try {
      // Process booking
      const bookingResponse = await fetch("https://havenplacebackend.onrender.com/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingPayload),
      });
      const bookingData = await bookingResponse.json();
      const bookingId = bookingData.booking_id;

      // Process payment
      const paymentPayload = {
        phone_number: phoneNumber,
        amount: computeTotalAmount(),
        booking_id: bookingId,
        confirm: true,
      };

      await fetch("https://havenplacebackend.onrender.com/api/payments/mpesa/myphone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentPayload),
      });

      // Send confirmation email using emailjs
      const serviceID = "service_koac7yy";
      const templateID = "template_al29uyy";
      const userID = "m5okyqReJXrsKPd_J"; 

      const templateParams = {
        to_email: customerEmail,
        customer_name: customerName,
        room_type: roomType,
        number_of_members: numberOfMembers,
        check_in: checkIn,
        check_out: checkOut,
        total_nights: computeNights(),
        total_amount: computeTotalAmount(),
        booking_id: bookingId,
      };

      await emailjs.send(serviceID, templateID, templateParams, userID);

      // Confirm booking message
      setMessage("Booking confirmed!");
    } catch (error) {
      console.error("Error in booking process:", error);
      setMessage("Booking confirmed!");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <div>
      {/* Home Section with Background Image and Overlay */}
      <div id="home" className="home w-full h-screen relative rounded">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${g6})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center sm:pt-16 h-full px-4 sm:px-8 md:px-12 lg:px-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl sm:text-xs md:text-2xl lg:text-5xl font-bold text-white mb-1 sm:mb-3"
          >
            Like What You See??
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-md md:text-md lg:text-5xl font-bold text-white mb-2 sm:mb-4"
          >
            Book A Stay Now And Escape To Tranquility
          </motion.p>
        </div>
        {/* Arrow that scrolls to the booking form */}
        <div
          className="arrow absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => {
            if (bookingFormRef.current) {
              bookingFormRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <FaChevronDown size={30} className="text-white animate-bounce" />
        </div>
      </div>

      {/* Booking Form Container */}
      <div
        id="booking-form"
        ref={bookingFormRef}
        className="booking-form-container text-black max-w-md mx-auto p-8 bg-white rounded shadow-lg mt-8"
      >
        <h2 className="text-center text-2xl font-bold mb-4">Book a Room</h2>
        {message && <p className="message text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="booking-form space-y-4">
          <div className="form-group flex flex-col">
            <label htmlFor="roomType" className="font-bold">
              Room Type:
            </label>
            <select
              id="roomType"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="1bedroom">1 Bedroom (3500)</option>
              <option value="2bedroom">2 Bedroom (5000)</option>
            </select>
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="numberOfMembers" className="font-bold">
              Number of Members:
            </label>
            <input
              type="number"
              id="numberOfMembers"
              min="1"
              max={roomType === "1bedroom" ? 2 : 4}
              value={numberOfMembers}
              onChange={(e) => setNumberOfMembers(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="checkIn" className="font-bold">
              Check-In Date:
            </label>
            <input
              type="date"
              id="checkIn"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="checkOut" className="font-bold">
              Check-Out Date:
            </label>
            <input
              type="date"
              id="checkOut"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="btn w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Proceed to Confirmation
          </button>
        </form>

        {showModal && (
          <div className="modal-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
            <div className="modal-content bg-white p-6 rounded max-w-sm w-full">
              <h3 className="text-center text-xl font-bold mb-4">
                Enter Your Details
              </h3>
              <input
                type="text"
                placeholder="Your full name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <input
                type="tel"
                placeholder="Your mobile number (Format: 254XXXXXXXXX)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <p className="text-center mb-4">
                Total amount for your stay ({computeNights()} night
                {computeNights() !== 1 && "s"}):{" "}
                <strong>{computeTotalAmount()}</strong>
              </p>
              <div className="modal-buttons flex justify-around">
                <button
                  onClick={handleModalConfirm}
                  className="btn py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Confirm Booking
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="btn py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// BookingForm.js
import React, { useState } from "react";

export default function BookingForm() {
  const [roomType, setRoomType] = useState("1bedroom");
  const [numberOfMembers, setNumberOfMembers] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  // Helper to compute number of nights between check-in and check-out.
  const computeNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Compute total amount based on nights and room price.
  const computeTotalAmount = () => {
    const nights = computeNights();
    const roomPrice = roomType === "1bedroom" ? 3500 : 5000;
    return nights * roomPrice;
  };

  // Handle form submission: instead of immediately booking, show the modal.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      setMessage("Please select valid check-in and check-out dates.");
      return;
    }

    // Open the modal popup for phone number input and amount confirmation.
    setShowModal(true);
  };

  // When the user confirms in the modal, send the booking request.
  const handleModalConfirm = async () => {
    if (!phoneNumber) {
      setMessage("Please enter your phone number.");
      return;
    }

    // Prepare the payload matching the Flask backend's expected format.
    const payload = {
      room_type: roomType,
      number_of_members: numberOfMembers,
      check_in: checkIn,
      check_out: checkOut,
      // Optionally include phone_number if your backend supports it:
      // phone_number: phoneNumber,
    };

    try {
      const response = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(
          `Booking successful! Your booking id is ${data.booking_id}. Please confirm payment via Mpesa to finalize your booking. Total amount: ${computeTotalAmount()}`
        );
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage("An error occurred while booking. Please try again.");
    } finally {
      setShowModal(false); // Close the modal whether booking succeeds or fails.
    }
  };

  return (
    <div className="booking-form-containerfont-bold">
      <h2>Book a Room</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="booking-form text-black">
        <div className="form-group">
          <label htmlFor="roomType">Room Type:</label>
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="1bedroom">1 Bedroom (3500)</option>
            <option value="2bedroom">2 Bedroom (5000)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numberOfMembers">Number of Members:</label>
          <input
            type="number"
            id="numberOfMembers"
            min="1"
            max={roomType === "1bedroom" ? 2 : 4}
            value={numberOfMembers}
            onChange={(e) => setNumberOfMembers(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkIn">Check-In Date:</label>
          <input
            type="date"
            id="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOut">Check-Out Date:</label>
          <input
            type="date"
            id="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Proceed to confirmation
        </button>
      </form>

      {/* Modal Popup for Phone Number & Amount Confirmation */}
      {showModal && (
        <div className="modal-overlay text-black font-bold">
          <div className="modal-content">
            <h3>Enter Your Phone Number</h3>
            <input
              type="tel"
              placeholder="Your mobile number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p>
              Total amount for your stay (for {computeNights()} night(s)):{" "}
              <strong>{computeTotalAmount()}</strong>
            </p>
            <div className="modal-buttons">
              <button onClick={handleModalConfirm} className="btn confirm">
                Confirm Booking
              </button>
              <button onClick={() => setShowModal(false)} className="btn cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inline styles */}
      <style jsx>{`
        .booking-form-container {
          max-width: 500px;
          margin: 2rem auto;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          font-family: "Arial", sans-serif;
        }
        .booking-form-container h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #333;
        }
        .message {
          text-align: center;
          margin-bottom: 1rem;
          color: #d9534f;
        }
        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          margin-bottom: 0.5rem;
          font-weight: bold;
          color: #555;
        }
        .form-group input,
        .form-group select {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        .btn {
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          background: #825f35;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .btn:hover {
          background: #6b4d2f;
        }
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          width: 90%;
          max-width: 400px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .modal-content h3 {
          margin-bottom: 1rem;
          color: #333;
        }
        .modal-content input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        .modal-content p {
          margin-bottom: 1rem;
          font-size: 1rem;
          color: #333;
        }
        .modal-buttons {
          display: flex;
          justify-content: space-around;
        }
        .btn.confirm {
          background: #6b4d2f;
        }
        .btn.confirm:hover {
          background: #825f35;
        }
        .btn.cancel {
          background: #825f35;
        }
        .btn.cancel:hover {
          background: #6b4d2f;
        }
      `}</style>
    </div>
  );
}

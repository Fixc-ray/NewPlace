import React, { useState, useEffect } from "react";
import {
  Home,
  Bell,
  Search,
  Settings as SettingsIcon,
  ChevronDown,
} from "lucide-react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

function Dashboard({ currentUser }) {
  // If user is not approved, do not show the admin dashboard
  if (currentUser && !currentUser.approved) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold text-black mb-4">Access Denied</h1>
        <p className="text-lg text-black">
          Your account is pending admin approval. Please wait until an admin approves your account.
        </p>
        <p className="text-md text-black mt-2">
          You will be notified in the Activity Logs once your account is approved.
        </p>
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState("analytics");
  const [bookings, setBookings] = useState([]);
  const [payments, setPayments] = useState([]);
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filter, setFilter] = useState({
    status: "",
    roomType: "",
    startDate: "",
    endDate: "",
    sortBy: "",
  });

  // Fetch bookings and payments from the backend
  useEffect(() => {
    fetch("https://havenplacebackend.onrender.com/admin/bookings-payments")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setBookings(data.bookings);
        setPayments(data.payments);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Dummy calls to fetch users and rooms when their tabs are active.
  useEffect(() => {
    if (activeTab === "users") {
      fetch("https://havenplacebackend.onrender.com/admin/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error(err));
    }
    if (activeTab === "rooms") {
      fetch("https://havenplacebackend.onrender.com/admin/rooms")
        .then((res) => res.json())
        .then((data) => setRooms(data))
        .catch((err) => console.error(err));
    }
  }, [activeTab]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  // Filter bookings based on criteria
  const filteredBookings = bookings.filter((booking) => {
    if (filter.status && booking.status !== filter.status) return false;
    if (filter.roomType && booking.room_type !== filter.roomType) return false;
    if (
      filter.startDate &&
      new Date(booking.check_in) < new Date(filter.startDate)
    )
      return false;
    if (
      filter.endDate &&
      new Date(booking.check_out) > new Date(filter.endDate)
    )
      return false;
    return true;
  });

  // Sort bookings if needed
  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (filter.sortBy === "check_in") {
      return new Date(a.check_in) - new Date(b.check_in);
    }
    if (filter.sortBy === "created_at") {
      return new Date(a.created_at) - new Date(b.created_at);
    }
    return 0;
  });

  // Filter currently occupied bookings (today is between check_in and check_out)
  const currentlyOccupied = bookings.filter((booking) => {
    const today = new Date();
    const checkIn = new Date(booking.check_in);
    const checkOut = new Date(booking.check_out);
    return today >= checkIn && today <= checkOut;
  });

  // Simple analytics calculations
  const totalBookings = bookings.length;
  const totalRevenue = payments.reduce(
    (acc, payment) => acc + Number(payment.amount),
    0
  );
  const confirmedBookingsCount = bookings.filter(
    (booking) => booking.status === "confirmed"
  ).length;
  const pendingBookingsCount = bookings.filter(
    (booking) => booking.status === "pending"
  ).length;

  // Prepare data for the Pie Chart (Bookings Status Breakdown)
  const pieData = {
    labels: ["Confirmed", "Pending"],
    datasets: [
      {
        data: [confirmedBookingsCount, pendingBookingsCount],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  // Group bookings by creation date for the Line Chart
  const bookingsByDate = {};
  bookings.forEach((booking) => {
    // Assume created_at is in "YYYY-MM-DD HH:MM:SS" format
    const date = booking.created_at ? booking.created_at.substring(0, 10) : "Unknown";
    bookingsByDate[date] = (bookingsByDate[date] || 0) + 1;
  });
  const sortedDates = Object.keys(bookingsByDate).sort();
  const bookingCounts = sortedDates.map((date) => bookingsByDate[date]);

  const lineData = {
    labels: sortedDates,
    datasets: [
      {
        label: "Bookings per Day",
        data: bookingCounts,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 w-328 text-black">
      {/* Top Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Home className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-blue-500 font-bold text-xl">
            Haven Place
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-200 px-2 py-1 rounded">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent outline-none"
            />
          </div>
          <Bell className="h-6 w-6 text-gray-500" />
          <SettingsIcon className="h-6 w-6 text-gray-500" />
          <div className="flex items-center">
            <img
              src="/api/placeholder/32/32"
              alt="User avatar"
              className="h-8 w-8 rounded-full"
            />
            <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-200 p-4 min-h-screen">
          <ul>
            <li
              className={`p-2 cursor-pointer ${
                activeTab === "bookings" && "bg-blue-100"
              }`}
              onClick={() => setActiveTab("bookings")}
            >
              Bookings
            </li>
            <li
              className={`p-2 cursor-pointer ${
                activeTab === "currently_occupied" && "bg-blue-100"
              }`}
              onClick={() => setActiveTab("currently_occupied")}
            >
              Currently Occupied
            </li>
            <li
              className={`p-2 cursor-pointer ${
                activeTab === "payments" && "bg-blue-100"
              }`}
              onClick={() => setActiveTab("payments")}
            >
              Payments
            </li>
            <li
              className={`p-2 cursor-pointer ${
                activeTab === "users" && "bg-blue-100"
              }`}
              onClick={() => setActiveTab("users")}
            >
              Users
            </li>
            <li
              className={`p-2 cursor-pointer ${
                activeTab === "rooms" && "bg-blue-100"
              }`}
              onClick={() => setActiveTab("rooms")}
            >
              Rooms
            </li>
            <li
              className={`p-2 cursor-pointer ${
                activeTab === "analytics" && "bg-blue-100"
              }`}
              onClick={() => setActiveTab("analytics")}
            >
              Analytics
            </li>
            <li
              className={`p-2 cursor-pointer ${
                activeTab === "settings" && "bg-blue-100"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          {activeTab === "analytics" && (
            <section>
              <h2 className="text-xl font-bold mb-4">
                Analytics & Reporting
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 shadow rounded">
                  <h3 className="font-bold">Total Bookings</h3>
                  <p>{totalBookings}</p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                  <h3 className="font-bold">Confirmed Bookings</h3>
                  <p>{confirmedBookingsCount}</p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                  <h3 className="font-bold">Occupancy Rate</h3>
                  <p>
                    {((currentlyOccupied.length / totalBookings) * 100).toFixed(2)}%
                  </p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                  <h3 className="font-bold">Revenue Generated</h3>
                  <p>{totalRevenue}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-4 shadow rounded">
                  <h3 className="font-bold mb-2">
                    Bookings Status Breakdown
                  </h3>
                  <Pie data={pieData} />
                </div>
                <div className="bg-white p-4 shadow rounded">
                  <h3 className="font-bold mb-2">
                    Bookings per Day
                  </h3>
                  <Line data={lineData} />
                </div>
              </div>
            </section>
          )}

          {activeTab === "bookings" && (
            <section>
              <h2 className="text-xl font-bold mb-4">
                Enhanced Bookings Management
              </h2>
              {/* Filtering & Sorting Controls */}
              <div className="mb-4 flex space-x-4">
                <select
                  name="status"
                  value={filter.status}
                  onChange={handleFilterChange}
                >
                  <option value="">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                </select>
                <select
                  name="roomType"
                  value={filter.roomType}
                  onChange={handleFilterChange}
                >
                  <option value="">All Room Types</option>
                  <option value="1bedroom">1 Bedroom</option>
                  <option value="2bedroom">2 Bedroom</option>
                </select>
                <input
                  type="date"
                  name="startDate"
                  value={filter.startDate}
                  onChange={handleFilterChange}
                />
                <input
                  type="date"
                  name="endDate"
                  value={filter.endDate}
                  onChange={handleFilterChange}
                />
                <select
                  name="sortBy"
                  value={filter.sortBy}
                  onChange={handleFilterChange}
                >
                  <option value="">Sort By</option>
                  <option value="check_in">Check In</option>
                  <option value="created_at">Booking Date</option>
                </select>
              </div>
              {/* Bookings Table */}
              <table className="min-w-full bg-white shadow rounded">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-2 px-4 border">Booking ID</th>
                    <th className="py-2 px-4 border">Room Type</th>
                    <th className="py-2 px-4 border">Members</th>
                    <th className="py-2 px-4 border">Check In</th>
                    <th className="py-2 px-4 border">Check Out</th>
                    <th className="py-2 px-4 border">Status</th>
                    <th className="py-2 px-4 border">Customer Name</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedBookings.map((booking) => (
                    <tr
                      key={booking.booking_id}
                      className="text-center cursor-pointer hover:bg-gray-100"
                      onClick={() => setSelectedBooking(booking)}
                    >
                      <td className="py-2 px-4 border">
                        {booking.booking_id}
                      </td>
                      <td className="py-2 px-4 border">
                        {booking.room_type}
                      </td>
                      <td className="py-2 px-4 border">
                        {booking.number_of_members}
                      </td>
                      <td className="py-2 px-4 border">
                        {booking.check_in}
                      </td>
                      <td className="py-2 px-4 border">
                        {booking.check_out}
                      </td>
                      <td className="py-2 px-4 border">
                        {booking.status}
                      </td>
                      <td className="py-2 px-4 border">
                        {booking.customer_name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {activeTab === "currently_occupied" && (
            <section>
              <h2 className="text-xl font-bold mb-4">
                Currently Occupied Rooms
              </h2>
              <table className="min-w-full bg-white shadow rounded">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-2 px-4 border">Booking ID</th>
                    <th className="py-2 px-4 border">Room Type</th>
                    <th className="py-2 px-4 border">Customer Name</th>
                    <th className="py-2 px-4 border">Check In</th>
                    <th className="py-2 px-4 border">Check Out</th>
                  </tr>
                </thead>
                <tbody>
                  {currentlyOccupied.map((booking) => (
                    <tr key={booking.booking_id} className="text-center">
                      <td className="py-2 px-4 border">
                        {booking.booking_id}
                      </td>
                      <td className="py-2 px-4 border">
                        {booking.room_type}
                      </td>
                      <td className="py-2 px-4 border">
                        {booking.customer_name}
                      </td>
                      <td className="py-2 px-4 border">
                        {booking.check_in}
                      </td>
                      <td className="py-2 px-4 border">
                        {booking.check_out}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {activeTab === "payments" && (
            <section>
              <h2 className="text-xl font-bold mb-4">
                Expanded Payments Overview
              </h2>
              <table className="min-w-full bg-white shadow rounded">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-2 px-4 border">Payment ID</th>
                    <th className="py-2 px-4 border">Booking ID</th>
                    <th className="py-2 px-4 border">Phone Number</th>
                    <th className="py-2 px-4 border">Amount</th>
                    <th className="py-2 px-4 border">Transaction ID</th>
                    <th className="py-2 px-4 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.payment_id} className="text-center">
                      <td className="py-2 px-4 border">
                        {payment.payment_id}
                      </td>
                      <td className="py-2 px-4 border">
                        {payment.booking_id}
                      </td>
                      <td className="py-2 px-4 border">
                        {payment.phone_number}
                      </td>
                      <td className="py-2 px-4 border">
                        {payment.amount}
                      </td>
                      <td className="py-2 px-4 border">
                        {payment.transaction_id}
                      </td>
                      <td className="py-2 px-4 border">
                        {payment.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4">
                <h3 className="font-bold">Payment Summary</h3>
                <p>Total Revenue: {totalRevenue}</p>
                <p>Pending Payments: {pendingBookingsCount}</p>
              </div>
            </section>
          )}

          {activeTab === "users" && (
            <section>
              <h2 className="text-xl font-bold mb-4">User Management</h2>
              {users.length === 0 ? (
                <p>No users available.</p>
              ) : (
                <table className="min-w-full bg-white shadow rounded">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="py-2 px-4 border">User ID</th>
                      <th className="py-2 px-4 border">Username</th>
                      <th className="py-2 px-4 border">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="text-center">
                        <td className="py-2 px-4 border">{user.id}</td>
                        <td className="py-2 px-4 border">{user.username}</td>
                        <td className="py-2 px-4 border">{user.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>
          )}

          {activeTab === "rooms" && (
            <section>
              <h2 className="text-xl font-bold mb-4">Room Inventory</h2>
              {rooms.length === 0 ? (
                <p>No rooms available.</p>
              ) : (
                <table className="min-w-full bg-white shadow rounded">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="py-2 px-4 border">Room ID</th>
                      <th className="py-2 px-4 border">Room Type</th>
                      <th className="py-2 px-4 border">Price</th>
                      <th className="py-2 px-4 border">Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room) => (
                      <tr key={room.id} className="text-center">
                        <td className="py-2 px-4 border">{room.id}</td>
                        <td className="py-2 px-4 border">{room.room_type}</td>
                        <td className="py-2 px-4 border">{room.price}</td>
                        <td className="py-2 px-4 border">
                          {room.available ? "Available" : "Occupied"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>
          )}

          {activeTab === "settings" && (
            <section>
              <h2 className="text-xl font-bold mb-4">System & Settings</h2>
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold mb-2">Mpesa Access Token</h3>
                {/* Replace with real token status from your backend */}
                <p>Current token: [TOKEN_PLACEHOLDER]</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  onClick={() => {
                    alert("Regenerate token logic here");
                  }}
                >
                  Regenerate Token
                </button>
              </div>
              <div className="bg-white p-4 shadow rounded mt-4">
                <h3 className="font-bold mb-2">Activity Logs</h3>
                {/* Replace with real logs from the backend */}
                <p>No recent activity logs.</p>
              </div>
              <div className="bg-white p-4 shadow rounded mt-4">
                <h3 className="font-bold mb-2">Notifications & Alerts</h3>
                {/* Real-time notifications can be integrated here */}
                <p>No notifications at the moment.</p>
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Modal for detailed booking view */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Booking Details</h2>
            <p>
              <strong>Booking ID:</strong> {selectedBooking.booking_id}
            </p>
            <p>
              <strong>Room Type:</strong> {selectedBooking.room_type}
            </p>
            <p>
              <strong>Members:</strong> {selectedBooking.number_of_members}
            </p>
            <p>
              <strong>Check In:</strong> {selectedBooking.check_in}
            </p>
            <p>
              <strong>Check Out:</strong> {selectedBooking.check_out}
            </p>
            <p>
              <strong>Status:</strong> {selectedBooking.status}
            </p>
            <p>
              <strong>Customer Name:</strong> {selectedBooking.customer_name}
            </p>
            {/* Add further details or actions (e.g., cancel or modify) here */}
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setSelectedBooking(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

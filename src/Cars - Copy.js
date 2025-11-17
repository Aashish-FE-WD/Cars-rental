import React, { useState, useEffect } from "react";
import car1 from "./image/card1.png";
import car2 from "./image/card2.png";
import car3 from "./image/card3.png";

const cars = [
  { name: "Toyota Innova", price: 2500, image: car1 },
  { name: "Honda City", price: 3000, image: car2 },
  { name: "Maruti Swift", price: 2000, image: car3 },
];

function Cars() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({ name: "", days: "", date: "" });
  const [bookings, setBookings] = useState([]);

  // Load bookings from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("carBookings");
    if (stored) setBookings(JSON.parse(stored));
  }, []);

  const handleBook = (car) => {
    setSelectedCar(car);
    setFormData({ name: "", days: "", date: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      ...formData,
      carName: selectedCar.name,
      pricePerDay: selectedCar.price,
      total: selectedCar.price * formData.days,
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("carBookings", JSON.stringify(updatedBookings));

    alert(`✅ Booking Confirmed for ${selectedCar.name}!`);
    setSelectedCar(null);
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "30px",
        color: "#fff",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#f5f5f5" }}>🚗 Car Gallery</h1>

      {/* Car Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          marginTop: "40px",
        }}
      >
        {cars.map((car, index) => (
          <div
            key={index}
            style={{
              background: "#1c1c1c",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
              padding: "15px",
              textAlign: "center",
              transition: "transform 0.2s ease-in-out, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 10px rgba(255,255,255,0.1)";
            }}
          >
            <img
              src={car.image}
              alt={car.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ margin: "10px 0 5px" }}>{car.name}</h3>
            <p style={{ color: "#f3ef13ff", fontWeight: "bold" }}>
              ₹{car.price.toLocaleString()} / day
            </p>

            {/* Book Now Button */}
            <button
              style={{
                backgroundColor: "#dc3545", // red danger
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                cursor: "pointer",
                marginTop: "10px",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ff4d5a";
                e.target.style.boxShadow = "0 0 10px #dc3545";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#dc3545";
                e.target.style.boxShadow = "none";
              }}
              onClick={() => handleBook(car)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Booking Form Modal */}
      {selectedCar && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#111",
              padding: "25px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "400px",
              color: "#fff",
              boxShadow: "0 0 15px rgba(220,53,69,0.3)",
            }}
          >
            <h2 style={{ textAlign: "center", color: "#dc3545" }}>
              Book {selectedCar.name}
            </h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "10px",
                  borderRadius: "6px",
                  border: "none",
                }}
              />

              <label>Start Date:</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "10px",
                  borderRadius: "6px",
                  border: "none",
                }}
              />

              <label>Number of Days:</label>
              <input
                type="number"
                name="days"
                required
                min="1"
                value={formData.days}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "none",
                }}
              />

              {formData.days && (
                <p style={{ color: "#dc3545", textAlign: "center" }}>
                  Total: ₹{selectedCar.price * formData.days}
                </p>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={() => setSelectedCar(null)}
                  style={{
                    background: "#444",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "8px 15px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>

                {/* Confirm Booking Button */}
                <button
                  type="submit"
                  style={{
                    background: "#dc3545", // red danger
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "8px 15px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#ff4d5a";
                    e.target.style.boxShadow = "0 0 10px #dc3545";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#dc3545";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Display All Bookings */}
      {bookings.length > 0 && (
        <div style={{ marginTop: "50px" }}>
          <h2 style={{ color: "#dc3545", textAlign: "center" }}>My Bookings</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {bookings.map((b, idx) => (
              <div
                key={idx}
                style={{
                  background: "#1c1c1c",
                  padding: "15px",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              >
                <h3>{b.carName}</h3>
                <p>Name: {b.name}</p>
                <p>Start Date: {b.date}</p>
                <p>Days: {b.days}</p>
                <p>Total: ₹{b.total}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cars;

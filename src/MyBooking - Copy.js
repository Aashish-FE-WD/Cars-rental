import React, { useEffect, useState } from "react";

function MyBooking() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("bookingData");
    if (data) {
      setBooking(JSON.parse(data));
    }
  }, []);

  if (!booking) {
    return (
      <div className="container text-center mt-5">
        <h4>No booking found!</h4>
      </div>
    );
  }

  return (
    <div className="container bg-light p-4 mt-5 rounded-4 shadow" style={{ marginBottom: '50px' }}>
      <h3 className="text-center text-dark mb-4">Booking Summary</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Car Type:</strong> {booking.carType}
        </li>
        <li className="list-group-item">
          <strong>Pick-up:</strong> {booking.pickup}
        </li>
        <li className="list-group-item">
          <strong>Drop-off:</strong> {booking.dropoff}
        </li>
        <li className="list-group-item">
          <strong>Pick-up Date:</strong> {booking.pickupDate}
        </li>
        <li className="list-group-item">
          <strong>Drop-off Date:</strong> {booking.dropoffDate}
        </li>
      </ul>
    </div>
  );
}

export default MyBooking;

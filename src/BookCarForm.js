import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './BookCarForm.css';


function BookCarForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    carType: "",
    pickup: "",
    dropoff: "",
    pickupDate: "",
    dropoffDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("bookingData", JSON.stringify(formData));
    navigate("/my-booking");
  };

  return (
    <section
      className="bookcar-wrapper container my-5 p-4 rounded text-white"
      id="Bookcar-form"
    >
      <h3 className="mb-4 text-danger fw-bold">Book a Car</h3>

      <form className="row g-4 align-items-end" onSubmit={handleSubmit}>
        
        {/* Car Type */}
        <div className="col-12 col-md-4">
          <label className="form-label">
            <i className="bi bi-car-front text-danger"></i> Select Car Type
          </label>
          <select
            className="form-select dark-input"
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            required
          >
            <option value="">Select car type</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
          </select>
        </div>

        {/* Pickup */}
        <div className="col-12 col-md-4">
          <label className="form-label">
            <i className="bi bi-geo-alt text-danger"></i> Pick-up
          </label>
          <input
            type="text"
            name="pickup"
            className="form-control dark-input"
            placeholder="Worli"
            value={formData.pickup}
            onChange={handleChange}
            required
          />
        </div>

        {/* Dropoff */}
        <div className="col-12 col-md-4">
          <label className="form-label">
            <i className="bi bi-geo-alt text-danger"></i> Drop-off
          </label>
          <input
            type="text"
            name="dropoff"
            className="form-control dark-input"
            placeholder="Dadar"
            value={formData.dropoff}
            onChange={handleChange}
            required
          />
        </div>

        {/* Pickup Date */}
        <div className="col-12 col-md-3">
          <label className="form-label">
            <i className="bi bi-calendar-date text-danger"></i> Pickup Date
          </label>
          <input
            type="date"
            name="pickupDate"
            className="form-control dark-input"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Dropoff Date */}
        <div className="col-12 col-md-3">
          <label className="form-label">
            <i className="bi bi-calendar-date text-danger"></i> Drop-off Date
          </label>
          <input
            type="date"
            name="dropoffDate"
            className="form-control dark-input"
            value={formData.dropoffDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Button */}
        <div className="col-12 col-md-3 d-grid">
          <button type="submit" className="btn btn-danger mt-4 fw-bold">
            Book Now
          </button>
        </div>
      </form>
    </section>
  );
}

export default BookCarForm;

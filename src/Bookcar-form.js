import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    // Save booking data to localStorage (temporary memory)
    localStorage.setItem("bookingData", JSON.stringify(formData));

    // Redirect to booking summary page
    navigate("/my-booking");
  };

  return (
    <section
      className="container my-5 p-4 border shadow-lg border-danger rounded text-white bg-black"
      id="Bookcar-form"
    >
      <h4 className="mb-4 text-danger">Book a Car</h4>
      <form className="row g-3 align-items-end" onSubmit={handleSubmit}>
        {/* Car Type */}
        <div className="col-12 col-md-4">
          <label className="form-label">
            <i className="bi bi-car-front text-danger"></i> Select Your Car Type
          </label>
          <select
            className="form-select"
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            required
          >
            <option value="">Select your car type</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
          </select>
        </div>

        {/* Pick-up */}
        <div className="col-12 col-md-4">
          <label className="form-label">
            <i className="bi bi-geo-alt text-danger"></i> Pick-up
          </label>
          <input
            type="text"
            name="pickup"
            className="form-control"
            placeholder="Worli"
            value={formData.pickup}
            onChange={handleChange}
            required
          />
        </div>

        {/* Drop-off */}
        <div className="col-12 col-md-4">
          <label className="form-label">
            <i className="bi bi-geo-alt text-danger"></i> Drop-off
          </label>
          <input
            type="text"
            name="dropoff"
            className="form-control"
            placeholder="Dadar"
            value={formData.dropoff}
            onChange={handleChange}
            required
          />
        </div>

        {/* Pick-up Date */}
        <div className="col-12 col-md-3">
          <label className="form-label">
            <i className="bi bi-calendar-date text-danger"></i> Pick-up
          </label>
          <input
            type="date"
            name="pickupDate"
            className="form-control"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Drop-off Date */}
        <div className="col-12 col-md-3">
          <label className="form-label">
            <i className="bi bi-calendar-date text-danger"></i> Drop-off
          </label>
          <input
            type="date"
            name="dropoffDate"
            className="form-control"
            value={formData.dropoffDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Search Button */}
        <div className="col-12 col-md-3 d-grid">
          <button type="submit" className="btn btn-danger mt-4">
            Book Now
          </button>
        </div>
      </form>
    </section>
  );
}

export default BookCarForm;



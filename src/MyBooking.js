// import React, { useState } from "react";

// const MyBooking = ({ car }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     specialRequest: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [confirmationMessage, setConfirmationMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.phone) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     setIsSubmitting(true);

//       setTimeout(() => {
//       setIsSubmitting(false);
//       setConfirmationMessage(`Booking for ${car?.name} confirmed!`);
//       // No navigation, no redirect
//     }, 1500);
//   };

//   if (!car) {
//     return (
//       <div className="container my-5 text-center text-white">
//         <h2>No car selected for booking.</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="container my-5">
//       <h2 className="text-center text-white">Book {car.name}</h2>
//       <div className="card shadow-sm bg-dark text-light">
//         <div className="card-body">
//           <h5 className="card-title">Booking Form</h5>
//           <p className="card-text">{car.description}</p>

//           {confirmationMessage && (
//             <div className="alert alert-success" role="alert">
//               {confirmationMessage}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="phone" className="form-label">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="specialRequest" className="form-label">
//                 Special Request
//               </label>
//               <textarea
//                 className="form-control"
//                 id="specialRequest"
//                 name="specialRequest"
//                 rows="3"
//                 value={formData.specialRequest}
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-success"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Submit Booking"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyBooking;
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
    <div className="container bg-light p-4 mt-5 rounded-4 shadow">
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

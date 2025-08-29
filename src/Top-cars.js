import React, { useState } from "react";
import car1 from "./image/card1.png";
import car2 from "./image/card2.png";
import car3 from "./image/card3.png";
import car4 from "./image/card4.png";
import car5 from "./image/card5.png";
import car6 from "./image/card6.png";
import car7 from "./image/card7.png";
import car8 from "./image/card8.png";
import car9 from "./image/card9.png";

// Sample car data
const cars = [
  { id: 1, name: "Audi R8", description: "Electric luxury sedan with high performance.", image: car1 },
  { id: 2, name: "BMW M4", description: "High-performance coupe with sporty design.", image: car4 },
  { id: 3, name: "Wollongong", description: "Supercar with powerful V10 engine.", image: car3 },
  { id: 4, name: "Ferrari 458", description: "Electric luxury sedan with high performance.", image: car9 },
  { id: 5, name: "Swift", description: "High-performance coupe with sporty design.", image: car5 },
  { id: 6, name: "Hyundai", description: "Supercar with powerful V10 engine.", image: car6 },
  { id: 7, name: "Ferrari F8 Tributo", description: "Electric luxury sedan with high performance.", image: car7 },
  { id: 8, name: "ROLLS ROYCE", description: "High-performance coupe with sporty design.", image: car8 },
  { id: 9, name: "RANGE ROVER", description: "Supercar with powerful V10 engine.", image: car2 },
];

function Top_Cars() {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleViewDetails = (car) => {
    setSelectedCar(car);
    const modal = new window.bootstrap.Modal(document.getElementById("carModal"));
    modal.show();
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-white">Top Cars</h2>
      <div className="row">
        {cars.map((car) => (
          <div className="col-md-4 mb-4" key={car.id}>
            <div className="card h-100 shadow-sm bg-dark">
              <img src={car.image} className="card-img-top" alt={car.name} />
              <div className="card-body text-light">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">{car.description}</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleViewDetails(car)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div className="modal fade" id="carModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h5 className="modal-title">{selectedCar?.name}</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              {selectedCar && (
                <>
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="img-fluid mb-3"
                    style={{ maxHeight: "200px" }}
                  />
                  <p>{selectedCar.description}</p>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top_Cars;

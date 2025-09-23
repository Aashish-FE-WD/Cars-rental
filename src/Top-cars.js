import React, { useState, useEffect } from "react";
import car1 from "./image/card1.png";
import car2 from "./image/card2.png";
import car3 from "./image/card3.png";
import car4 from "./image/card4.png";
import car5 from "./image/card5.png";
import car6 from "./image/card6.png";
import car7 from "./image/card7.png";
import car8 from "./image/card8.png";
import car9 from "./image/card9.png";
import "./Top-car.css";

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

function TopCars() {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const goToNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentCarIndex((prev) => (prev + 1) % cars.length);
      setFadeIn(true);
    }, 300);
  };

  const goToPrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentCarIndex((prev) => (prev - 1 + cars.length) % cars.length);
      setFadeIn(true);
    }, 300);
  };

  const goToCar = (index) => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentCarIndex(index);
      setFadeIn(true);
    }, 300);
  };

  // Removed handleBookCar and navigate

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goToNext();
      else if (e.key === "ArrowLeft") goToPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentCar = cars[currentCarIndex];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-white">Top Cars</h2>
      <div className="row justify-content-center align-items-center">
        {/* Left Image */}
        <div className="col-md-6">
          <div
            className={`fadeInOutEffect ${fadeIn ? "fadeIn" : "fadeOut"}`}
            style={{ transition: "opacity 0.5s" }}
          >
            <img
              src={currentCar.image}
              className="img-fluid"
              alt={currentCar.name}
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Info */}
        <div className="col-md-6">
          <div className="card shadow-sm bg-dark text-light">
            <div className="card-body">
              <h5 className="card-title">{currentCar.name}</h5>
              <p className="card-text">{currentCar.description}</p>

              <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-outline-light" onClick={goToPrev}>
                  ◀
                </button>
                <button className="btn btn-secondary" onClick={goToNext}>
                  ▶
                </button>
              </div>

              {/* Dot Navigation */}
              <div className="text-center mb-3">
                {cars.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => goToCar(index)}
                    style={{
                      cursor: "pointer",
                      height: "12px",
                      width: "12px",
                      margin: "0 4px",
                      backgroundColor:
                        index === currentCarIndex ? "white" : "#888",
                      borderRadius: "50%",
                      display: "inline-block",
                      transition: "background-color 0.3s",
                    }}
                  ></span>
                ))}
              </div>

              {/* Removed Book Car Button */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCars;

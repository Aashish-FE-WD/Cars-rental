import './Bookcar-form.css';

function BookCarForm ()  {
  return (
    <>
    <section className="container my-5 p-4 shadow-lg rounded border border-danger rounded bs-secondary-color text-white bs-danger-border" id='Bookcar-form'>
      <h4 className="mb-4">Book a car</h4>
      <form className="row g-3 align-items-end">
        {/* Car Type */}
        <div className="col-12 col-md-4  ">
          <label className="form-label ">
            <i className="bi bi-car-front text-danger "></i> Select Your Car Type
          </label>
          <select className="form-select">
            <option>Select your car type</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="maruti">Hatchback</option>
          </select>
        </div>

        {/* Pick-up */}
        <div className="col-12 col-md-4">
          <label className="form-label">
            <i className="bi bi-geo-alt text-danger"></i> Pick-up
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Worli"
          />
        </div>

        {/* Drop-off */}
        <div className="col-12     col-md-4">
          <label className="form-label">
            <i className="bi bi-geo-alt text-danger"></i> Drop-off
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Dadar"
          />
        </div>

        {/* Pick-up Date */}
        <div className="col-12 col-md-3">
          <label className="form-label">
            <i className="bi bi-calendar-date text-danger"></i> Pick-up
          </label>
          <input type="date" className="form-control" />
        </div>

        {/* Drop-off Date */}
        <div className="col-12 col-md-3">
          <label className="form-label">
            <i className="bi bi-calendar-date text-danger"></i> Drop-off
          </label>
          <input type="date"  className="form-control" />
        </div>

        {/* Search Button */}
        <div className="col-12 col-md-3 d-grid">
          <button type="submit" className="btn btn-danger mt-4">
            Search
          </button>
        </div>
      </form>
    </section>
                        
    </>
  );
};

export default BookCarForm;

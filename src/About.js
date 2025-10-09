

import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="bg-danger text-white py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-3">Why Choose Us</h1>
              <h2 className="h3 mb-4">Best valued deals you will ever find</h2>
              <p className="lead mb-5">
                Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to 
                providing you with the best value for your money, so you can enjoy top-quality services 
                and products without breaking the bank. Our deals are designed to give you the ultimate 
                renting experience, so don't miss out on your chance to save big.
              </p>
              <button className="btn btn-light btn-lg px-4 py-2 fw-bold">
                Find Details <i className="ms-2 bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

       {/* Features Section */}
      <section className="py-5">
         <div className="container py-5">
          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-success bg-gradient rounded-circle p-3 mb-4 mx-auto">
                    <i className="bi bi-geo-alt text-white fs-1"></i>
                  </div>
                  <h3 className="card-title text-black h4 mb-3">Cross Country Drive</h3>
                  <p className="card-text text-muted">
                    Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon  bg-warning bg-gradient rounded-circle p-3 mb-4 mx-auto">
                    <i className="bi bi-receipt text-white fs-1"></i>
                  </div>
                  <h3 className="card-title text-black h4 mb-3">All Inclusive Pricing</h3>
                  <p className="card-text text-muted">
                    Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-danger  bg-gradient rounded-circle p-3 mb-4 mx-auto">
                    <i className="bi bi-eye text-white fs-1"></i>
                  </div>
                  <h3 className="card-title text-black h4 mb-3">No Hidden Charges</h3>
                  <p className="card-text text-muted">
                    Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

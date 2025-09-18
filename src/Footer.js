import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>DriveEasy Rentals</h3>
          <p>Reliable cars. Affordable prices. 24/7 support.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/cars">Browse Cars</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@CarsRentals.com</p>
          <p>Phone: +91 9509969932</p>
          <p>Location: Mumbai, India</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/aashishdodiya/"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/as_hi_sh_77/"><i className="fab fa-instagram"></i></a>
            <a href="https://x.com/AshishDodiya77"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DriveEasy With Cars-Rentals. Made ❤ by Aashish All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faXTwitter, 
  faInstagram, 
  faFacebookF, 
  faPinterestP 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCircleInfo, 
  faEnvelope, 
  faShieldHalved, 
  faScaleBalanced, 
  faCopyright 
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Section */}
        <div className="footer-main">
          <div className="footer-branding">
            <h3 className="footer-title">Stay Chill</h3>
            <p className="footer-subtitle">Keeping it cool since {currentYear}</p>
            {/* Social Links */}
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-link" aria-label="Pinterest">
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
            </div>
          </div>

          {/* Footer Section Columns */}
          <div className="footer-section-two">
            <div className="footer-section-columns">
              <span>Quality</span>
              <span>Help</span>
              <span>Share</span>
              <span>Careers</span>
              <span>Testimonials</span>
              <span>Work</span>
            </div>
            <div className="footer-section-columns">
              <span>244-5333-7783</span>
              <span>hello@food.com</span>
              <span>press@food.com</span>
              <span>contact@food.com</span>
            </div>
            <div className="footer-section-columns">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <div className="footer-bottom">
            <p className="copyright">
              <FontAwesomeIcon icon={faCopyright} /> {currentYear} All rights reserved
            </p>
            <div className="nav-links">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faCircleInfo} /> About
              </a>
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </a>
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faShieldHalved} /> Privacy
              </a>
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faScaleBalanced} /> Terms
              </a>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
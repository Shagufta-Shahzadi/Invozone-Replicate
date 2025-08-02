import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section contact-section">
          <div className="contact-item">
            <div className="contact-icon phone-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div>
              <h4>Direct Call</h4>
              <p>+1 786 763 7762</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon email-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <h4>Email Us</h4>
              <p>sales@invozone.com</p>
            </div>
          </div>

          <div className="rating">
            <span className="star">⭐</span>
            <span>5 Star Reviews</span>
          </div>

          <div className="social-icons">
            <div className="social-icon clutch">C</div>
            <div className="social-icon fiverr">f5</div>
            <div className="social-icon trustpilot">★</div>
            <div className="social-icon google">G</div>
          </div>

          <div className="our-socials">
            <h4>Our Socials</h4>
            <div className="social-links">
              <div className="social-link linkedin">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="social-link twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="social-link instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="social-link youtube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="/services/web-app-development">Web App Development</a></li>
            <li><a href="/services/mobile-app-development">Mobile App Development</a></li>
            <li><a href="/services/enterprise-app-development">Enterprise App Development</a></li>
            <li><a href="/services/ai-development-services">AI Development Services</a></li>
            <li><a href="/services/devops-services">DevOps Services</a></li>
            <li><a href="/services/software-quality-assurance">Software Quality Assurance</a></li>
            <li><a href="/services/ui-ux-design-services">UI UX Design Services</a></li>
            <li><a href="/services/product-development-services">Product Development Services</a></li>
          </ul>
        </div>

        {/* Hire Developers Section */}
        <div className="footer-section">
          <h3>Hire Developers</h3>
          <ul>
            <li><a href="/hire-developers/elixir-developer">Elixir Developer</a></li>
            <li><a href="/hire-developers/mern-stack-developer">MERN Stack Developer</a></li>
            <li><a href="/hire-developers/nodejs-developer">Node.Js Developer</a></li>
            <li><a href="/hire-developers/python-developer">Python Developer</a></li>
            <li><a href="/hire-developers/ror-developer">ROR Developer</a></li>
            <li><a href="/hire-developers/flutter-developer">Flutter Developer</a></li>
            <li><a href="/hire-developers/reactjs-developer">React.Js Developer</a></li>
            <li><a href="/hire-developers/saas-developer">SaaS Developer</a></li>
          </ul>
        </div>

        {/* Industry Section */}
        <div className="footer-section">
          <h3>Industry</h3>
          <ul>
            <li><a href="/industries/fintech">Fintech</a></li>
            <li><a href="/industries/ecommerce">Ecommerce</a></li>
            <li><a href="/industries/on-demand">On-Demand</a></li>
            <li><a href="/industries/real-estate">Real Estate</a></li>
            <li><a href="/industries/healthcare">Healthcare</a></li>
            <li><a href="/industries/food-grocery">Food & Grocery</a></li>
            <li><a href="/industries/education">Education</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers <span className="hiring-badge">We're Hiring!</span></a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </div>
      </div>

      {/* Location Flags */}
      <div className="location-flags">
        <div className="location">
          <div className="flag-container">
            <img src="https://flagcdn.com/w40/us.png" alt="US Flag" className="flag" />
          </div>
          <div>
            <p>130 NW 7th Ave Pembroke Pines,</p>
            <p>Florida 33024</p>
          </div>
        </div>
        <div className="location">
          <div className="flag-container">
            <img src="https://flagcdn.com/w40/ca.png" alt="Canada Flag" className="flag" />
          </div>
          <div>
            <p>220 Duncan Mill Road, Toronto,</p>
            <p>Ontario M3B 3J5</p>
          </div>
        </div>
        <div className="location">
          <div className="flag-container">
            <img src="https://flagcdn.com/w40/my.png" alt="Malaysia Flag" className="flag" />
          </div>
          <div>
            <p>Unit 10, Jalan Kemajuan, Bangar</p>
            <p>Selatan, 55200 Kuala Lumpur</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2025 All Rights Reserved by InvoZone</p>
          <div className="footer-links">
            <a href="/sitemap">Sitemap</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/ims-policy">IMS Policy</a>
            <a href="/terms-conditions">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
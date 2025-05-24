import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>If you are interested in working with me, or you have any questions, please fill out the form with the details of your project or inquiry.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@elialocardi.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Florida's Space Coast, USA</span>
              </div>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
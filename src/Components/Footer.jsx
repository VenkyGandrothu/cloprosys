// src/components/Footer.js
import React from 'react';
import '../Styles/Footer.css'
import instagramIcon from '../Images/insta.png'
import facebook from '../Images/fb.png'
import linkedinIcon from '../Images/linkedin.png'
import twitterIcon from '../Images/x.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Cloprosys IT Solutions Institute</h3>
          <p>Your gateway to mastering cutting-edge technology skills. Join us to advance your career with industry-leading training and resources.</p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#contactus">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: info@cloprosys.com</p>
          <p>Phone: +91 7670970618</p>
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cloprosys IT Solutions Institute. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

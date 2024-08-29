import React from 'react';
import '../Styles/Footer.css';
import instagramIcon from '../Images/insta.png';
import facebook from '../Images/fb.png';
import linkedinIcon from '../Images/linkedin.png';
import twitterIcon from '../Images/x.png';
import yt from '../Images/yt.png'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Cloprosys IT Solutions</h3>
          <p>Your gateway to mastering cutting-edge technology skills. Join us to advance your career with industry-leading training and resources.</p>
        </div>
        <div className="footer-section links">
          <h4 >Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#career">Careers</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#about-us">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4 className='followus'>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/cloprosys/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://x.com/cloprosys73756" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/company/cloprosys-it-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/cloprosys_it_solutions?utm_source=qr&igsh=MW9yY3E2ODhneXV6cQ==" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/@cloprosys" target="_blank" rel="noopener noreferrer">
            <img src={yt} alt="Youtube" />
            </a>

          </div>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:info@cloprosys.com">info@cloprosys.com</a></p>
          <p>Phone: +91 7670970618</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cloprosys IT Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

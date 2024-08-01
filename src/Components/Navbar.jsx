import React from 'react'
import Logo from '../Images/Logo.jpeg'
import {Link} from 'react-scroll'
import '../Styles/Navbar.css'
// import { NavLink } from 'react-router-dom';

function Navbar() {



  return (

      <nav className='navbar'>
      <img src={Logo} className='logo' alt="logo" />
      <div className="navitems">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="courses" spy={true} smooth={true} offset={-100} duration={500}>Courses</Link>
          </li>
          <li className="navbar-item">
            <Link to="career" spy={true} smooth={true} offset={-100} duration={500}>Career</Link>
          </li>
          <li className="navbar-item">
            <Link to="contact-us" spy={true} smooth={true} offset={-100} duration={500}>Contact Us</Link>
          </li>
          <li className='navbar-item'>
            <Link to="gallery" spy={true} smooth={true} offset={-100} duration={500}>Gallery</Link>
          </li>
          <li className="navbar-item">
            <Link to="about-us" spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="loginbtn">
        <button>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
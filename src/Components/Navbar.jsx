import React, { useState,useRef, useEffect } from 'react';
import Logo from '../Images/Logo.jpeg';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import whlogo from '../Images/whatsapp.png'

function Navbar() {

  const visionnavigate = useNavigate(); 

  const vision = () => {
    visionnavigate('/vision');
  };

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='logo-img'>
      <img src={Logo} className='logo' alt='logo' />
      </div> 
      <div className={`navitems ${isOpen ? 'open' : ''}`} ref={menuRef}>
        <ul className='navbar-list'>
          <li className='navbar-item'>
            <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to='courses' spy={true} smooth={true} offset={-100} duration={500}>Courses</Link>
          </li>
          <li className='navbar-item'>
            <Link to='career' spy={true} smooth={true} offset={-100} duration={500}>Career</Link>
          </li>
          <li className='navbar-item'>
            <Link to='contact-us' spy={true} smooth={true} offset={-100} duration={500}>Contact Us</Link>
          </li>
          <li className='navbar-item'>
            <Link to='gallery' spy={true} smooth={true} offset={-100} duration={500}>Gallery</Link>
          </li>
          <li className='navbar-item'>
            <Link to='about-us' spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>
          </li>
          <li className='navbar-item' onClick={vision}>
             <a>Our Vision</a>
          </li>
        </ul>
        </div>
        <div className='whlogo'>
        <a href="https://api.whatsapp.com/send?phone=917670970618&text=Ping%20us%20for%20more%20Information%20"><img src={whlogo}/></a>
      </div>
      <div className='menu-icon' onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>
      <div className='mobile-heading'>
        <h4>Clopro<span>sys</span></h4>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState,useRef, useEffect } from 'react';
import Logo from '../Images/Logo.jpeg';
import { Link } from 'react-scroll';
import '../Styles/Navbar.css';

function Navbar() {
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
          <li className='navbar-item'>
            <Link>Login</Link>
          </li>
        </ul>
        </div>
      <div className='menu-icon' onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>
    </nav>
  );
}

export default Navbar;

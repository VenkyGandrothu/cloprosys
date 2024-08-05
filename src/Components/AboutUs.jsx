import React from 'react';
import '../Styles/AboutUs.css';
import BusinessImg from '../Images/Business img.jpg';
import aboutimg from '../Images/about.jpg';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="aboutdes">
        <img src={aboutimg} alt="About Us" />
        <div>
          <h2>About Cloprosys</h2>
          <p>
            Cloprosys IT Solutions Institute is a premier training institute dedicated to empowering individuals with the latest and most relevant skills in the IT industry. Our mission is to bridge the gap between the ever-evolving technology landscape and the demand for skilled professionals. At Cloprosys, we offer a comprehensive range of courses designed to cater to both beginners and experienced professionals. Our expert instructors are industry veterans who bring a wealth of knowledge and real-world experience to the classroom, ensuring that our students receive top-notch education and hands-on training. Whether you are looking to start a new career in IT, upskill to advance in your current job, or stay updated with the latest technology trends, Cloprosys IT Solutions Institute has the right course for you. Join us and take the first step towards a successful and rewarding career in the IT industry.
          </p>
        </div>
      </div>
      <div className="missioncon">
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals and organizations through cutting-edge technology education and training. We strive to foster innovation, excellence, and leadership in the IT industry by providing comprehensive, industry-relevant courses and programs. Our goal is to equip our students with the skills and knowledge needed to excel in their careers, driving success and transformation in the digital age.
          </p>
        </div>
        <img src={BusinessImg} alt="Our Mission" />
      </div>
    </div>
  );
}

export default AboutUs;

import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar'
import CoursesList from "../Components/CoursesList";
import Index from "../Components/Index";
import Footer from "../Components/Footer";
import Career from "../Components/Career";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
import Benifits from "../Components/Benifits";
import Gallery from "../Components/Gallery";

import '../Styles/Home.css'

import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
    useEffect(() => {
      AOS.init({
        duration: 2500,
        once: true,
      });
    }, []);

  return (
    <div className='Home'>
         <Navbar/>
      <div id="home">
        <Index />
      </div>
      <div id="courses" data-aos="fade-up">
        <CoursesList />
      </div>
      <div data-aos="fade-up">
      <Benifits/>
      </div>
      <div id="career" data-aos="fade-up">
        <Career />
      </div>
      <div id="contact-us" data-aos="fade-up">
        <ContactUs/>
        </div>
      <div id="gallery" data-aos="fade-up">
        <Gallery/>
      </div>
      <div id="about-us" data-aos="fade-up">
        <AboutUs />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
import React, { Suspense, lazy, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer";
import LoadingSpinner from '../Components/LoadingSpinner';
import '../Styles/Home.css'

import AOS from 'aos';
import 'aos/dist/aos.css';


const CoursesList = lazy(() => import("../Components/CoursesList"));
const Index = lazy(() => import("../Components/Index"));
const Career = lazy(() => import("../Components/Career"));
const AboutUs = lazy(() => import("../Components/AboutUs"));
const ContactUs = lazy(() => import("../Components/ContactUs"));
const Benifits = lazy(() => import("../Components/Benifits"));
const Gallery = lazy(() => import("../Components/Gallery"));


function Home() {
    useEffect(() => {
      AOS.init({
        duration: 1500,
        once: true,
      });
    }, []);

  return (
    <div className='Home'>
         <Navbar/>
    <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </div>
  )
}

export default Home
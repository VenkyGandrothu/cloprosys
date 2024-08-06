import React from 'react'
import Navbar from '../Components/Navbar'
import CoursesList from "../Components/CoursesList";
import Index from "../Components/Index";
import Footer from "../Components/Footer";
import Career from "../Components/Career";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
import Benifits from "../Components/Benifits";
import Gallery from "../Components/Gallery";


function Home() {
  return (
    <div className='home'>
         <Navbar/>
      <div id="home">
        <Index />
      </div>
      <div id="courses">
        <CoursesList />
      </div>
      <Benifits/>
      <div id="career">
        <Career />
      </div>
      <div id="contact-us">
        <ContactUs/>
        </div>
      <div id="gallery">
        <Gallery/>
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
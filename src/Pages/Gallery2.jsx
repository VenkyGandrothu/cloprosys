import React from 'react'
import Footer from '../Components/Footer';
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import img5 from '../Images/img5.jpg'
import img6 from '../Images/img6.jpg'
import img7 from '../Images/img7.jpg'
import img8 from '../Images/img8.jpg'
import img9 from '../Images/img9.jpg'
import { useNavigate } from 'react-router-dom';

import '../Styles/Gallery2.css'



function Gallery2() {

  const navigatetohome = useNavigate(); 

  const home = () => {
    navigatetohome('/home');
  };

  const instituteImg = [{image:img1},{image:img2},{image:img3},{image:img5},{image:img6},{image:img7},{image:img8},{image:img9},]
  return (


    <div className='Gallerycontainer'>
      <div className="headingcontainer">
      <div className="homebtn">
      <button onClick={home}><span class="material-symbols-outlined">house</span>Back to Home</button>
      </div>
      <div className="heading">
      <h1 className='gallery-heading'>Our <span>Gallery</span></h1>
      </div>
      </div>
      <div className='image-grid'>
        {instituteImg.map((img, index) => (
          <div key={index} className='image-container'>
            <img src={img.image} alt={`Gallery ${index + 1}`} className='gallery-img' />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery2;
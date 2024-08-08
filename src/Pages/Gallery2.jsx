import React from 'react';
import Footer from '../Components/Footer';
import img1 from '../Images/inp1.jpg'
import img2 from '../Images/inp2.jpg'
import img3 from '../Images/inp3.jpg'
import img5 from '../Images/inp5.jpg'
import img6 from '../Images/inp6.jpg'
import img7 from '../Images/inp7.jpg'
import { useNavigate } from 'react-router-dom';
import '../Styles/Gallery2.css'



function Gallery2() {

  const navigatetohome = useNavigate(); 

  const home = () => {
    navigatetohome('/home');
  };

  const instituteImg = [{image:img1},{image:img2},{image:img3},{image:img5},{image:img6},{image:img7}]
  return (
    <div className='Gallerycontainer'>
      <div className="headingcontainer">
      <div className="homebtn">
      <button onClick={home}>Back to Home</button>
      </div>
      <div className="heading">
      <h1 className='gallery-heading'>Our <span>Gallery</span></h1>
      </div>
      </div>
      <div className='image-grid'>
        {instituteImg.map((img, index) => (
          <div key={index} className='image-container'>
            <img src={img.image} alt={`Gallery ${index + 1}`} className='gallery-img'/>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery2;
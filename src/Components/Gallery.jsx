import React from 'react'
import { useNavigate } from 'react-router-dom';
import ins1 from '../Images/cdiscuss.jpg'
import ins2 from '../Images/cshakehand.jpg'
import ins3 from '../Images/c2.jpg'
import ins4 from '../Images/laptop.jpg'
import '../Styles/Gallery.css'


function Gallery() {

  const navigate = useNavigate(); 

  const handleSeeMoreClick = () => {
     navigate('/gallery2');
  };
 
  const gallery =[
    { img: ins1, alt: 'Discussion' },
    { img: ins2, alt: 'Handshake' },
    { img: ins3, alt: 'Conference' },
    { img: ins4, alt: 'Laptop' },

]
  
  return (
    <div className="gallery-container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
        {gallery.map((gallery,index)=>(
          <div key={index} className="gallery-card">
        <img src={gallery.img} className='galleryimg'/>
         </div>
        ))}
    </div>
    <div className='seemorebtn'>
        <button onClick={handleSeeMoreClick}>See Some More</button>
        </div>
    </div>
  )
}

export default Gallery
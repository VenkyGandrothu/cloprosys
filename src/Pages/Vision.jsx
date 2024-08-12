import React from 'react';
import '../Styles/Vision.css';
import vm from '../Images/vm.jfif';
import am from '../Images/am.jpeg';
import Footer from '../Components/Footer';

function Vision() {
  return (
    <div className="vision-container">
      <h1 className="vision-heading">Founders <span>Vision</span></h1>
      <div className="vision-images">
        <div className='box'>
        <img src={am} alt="Founder 1" />
        <div className='empdes'>
            <h4>Pasumarthi Ameer</h4>
            <p>Entrepreneur/CEO/Trainer</p>
        </div>
        </div>

        <div className='box'>
        <img src={vm} alt="Founder 2" />
        <div className='empdes'>
            <h4>Vamsi Krishna</h4>
            <p>Chief Marketing Officer (CMO)</p>
        </div>
        </div>
      </div>
      <p className="vision-text">
        At Cloprosys IT Solutions, our vision is to empower businesses and individuals through innovative technology solutions that drive growth, efficiency, and sustainability. We are committed to delivering excellence in software development, web designing, and employment services, ensuring our clients and partners are equipped with the tools and knowledge to thrive in a rapidly evolving digital landscape.
      </p>
      <p className="vision-text">
        As founders, we focus on leveraging new technologies to create impactful solutions that address real-world challenges. Our journey is guided by a passion for technology, a dedication to continuous improvement, and a desire to make a positive impact on the industries we serve. We aim to foster a culture of collaboration, creativity, and integrity, where every project is a step towards building a smarter, more connected future.
      </p>
      <p className="vision-text">
        We envision Cloprosys IT Solutions as a catalyst for change, where innovation meets execution, and where every challenge is an opportunity to push the boundaries of what's possible. Our goal is to be a trusted partner for our clients, helping them navigate the complexities of the digital world with confidence and clarity.
      </p>
      <Footer/>
    </div>
  );
}

export default Vision;

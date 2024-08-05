import React from 'react';
import Typewriter from 'react-typewriter';
import centerimg from '../Images/PLC.jpg'
import '../Styles/index.css';

function Index() {
  return (
    <div className="index-container">
      <h1>
        <Typewriter typing={0.5} minDelay={50} maxDelay={100} cursorColor="#fff">
          Welcome to Cloprosys
        </Typewriter>
      </h1>
      <button className='explore-button'>Explore More</button>
    </div>
  );
}

export default Index;

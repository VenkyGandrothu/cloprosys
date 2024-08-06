import React from 'react';
import '../Styles/index.css';
import centerimg from '../Images/centerimg.jpg'

function Index() {
  return (
    <div className="index-container">
      <img src={centerimg}alt="" className="center-img"/>
      <h3> Arise, awake, and stop not <br /> <span>util the goal is reached...</span></h3>
    </div>

  );
}

export default Index;

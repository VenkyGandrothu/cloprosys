import React from 'react'
import Mocktest from '../Images/Mocktest.jpg';
import project from '../Images/projects.png';
import resume from '../Images/resumeprep.png';
import jog from '../Images/jog.png';
// import realtask from '../Images/realtaks.jpg';
import interview from '../Images/interview.jpg';
import weekend from '../Images/Weekend.jpg'
import '../Styles/Benifits.css'


function Benifits() {
   
    const benifits = [{
        tittle:'Mock Tests',
        Image:Mocktest
    },{
      tittle:'Practice Project',
      Image:project
  },{
    tittle:'Resume Preparation',
    Image:resume
},
{
  tittle:'Job Oriented Guidence',
  Image:jog
},
// {
//   tittle:'Every Day Real Time Tasks',
//   Image:realtask
// },
{
  tittle:'Interview etiquettes',
  Image:interview
},
  {
    tittle:'Repeated session on Saturday',
    Image:weekend
  }

]

  return (

    <div className="benifits-list">
       <h2 className='benfits-heading'>Advantages of Choosing <span>Cloprosys</span></h2>
    <div className='benifits-container'>
      { benifits.map((benifits,index)=>(
        <div key={index} className='benifits-card'>
          <img src={benifits.Image} className='benifits-img' />
          <h3 className='benifits-title'>{benifits.tittle}</h3>
        </div>
      ))}
    </div>
    </div>
  )
}
export default Benifits
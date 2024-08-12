// src/components/Career.js
import React from 'react';
import '../Styles/Career.css';

const positions = [
  {
    title: 'Web Developer',
    description: 'Responsible for designing, coding, and modifying websites, from layout to function according to a client\'s specifications.',
  },
  {
    title: 'MobileApp Developer',
    description: 'Responsible for developing applications and software using programming language.',
  },
  {
    title: 'Software Engineer',
    description: 'Assist in the development, implementation, and management of software programs.',
  },
  {
    title: 'Human Resource',
    description: 'Lead the development of software projects, mentor junior engineers, and provide technical guidance.',
  },
];

function Career() {
  return (
    <div className="career-container">
      <h2 className='carrer-heading'>Career <span>Opportunities</span></h2>
      <div className="positions-list">
        {positions.map((position, index) => (
          <div key={index} className="position-card">
            <h3 className="position-title">{position.title}</h3>
            <p className="position-description">{position.description}</p>
            <div className='overlay'>
            <div className='applybtn'>
               <button>Apply</button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;

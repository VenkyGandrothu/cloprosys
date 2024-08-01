// src/components/Career.js
import React from 'react';
import '../Styles/Career.css';

const positions = [
  {
    title: 'Web Developer',
    description: 'Responsible for designing, coding, and modifying websites, from layout to function according to a client\'s specifications.',
  },
  {
    title: 'Java Developer',
    description: 'Responsible for developing applications and software using the Java programming language.',
  },
  {
    title: 'Junior Software Engineer',
    description: 'Assist in the development, implementation, and management of software programs.',
  },
  {
    title: 'Senior Software Engineer',
    description: 'Lead the development of software projects, mentor junior engineers, and provide technical guidance.',
  },
  {
    title: 'Salesforce developer',
    description: 'Lead the development of software projects, mentor junior engineers, and provide technical guidance.',
  },
  {
    title: 'Human Resource',
    description: 'Lead the development of software projects, mentor junior engineers, and provide technical guidance.',
  },
  {
    title: 'Associative developer',
    description: 'Lead the development of software projects, mentor junior engineers, and provide technical guidance.',
  },
];

function Career() {
  return (
    <div className="career-container">
      <h2>Career Opportunities</h2>
      <div className="positions-list">
        {positions.map((position, index) => (
          <div key={index} className="position-card">
            <h3 className="position-title">{position.title}</h3>
            <p className="position-description">{position.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;

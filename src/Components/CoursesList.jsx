import React from 'react'
import '../Styles/CourseList.css'
import salesforceImage from '../Images/salesforce.png';
import aiImage from '../Images/Ai.jpg'
import powerbiImage from '../Images/powerbi.jpg'
import oracleImage from '../Images/oracle.png' 
import awsImage from '../Images/aws.png'
import devopsImage from '../Images/Devops.png'
import pythonImage from '../Images/python.png'
import webDesignImage from '../Images/webdev.jpg'


function CoursesList() {
    const courses = [
        {
          title: 'Salesforce Essentials',
          description: 'Salesforce is a cloud-based customer relationship management (CRM) platform that helps businesses manage their sales, customer service, and marketing operations. It offers tools for tracking customer interactions, automating tasks, and analyzing data.',
          image: salesforceImage
        },
        {
          title: 'Artificial Intelligence',
          description: 'Dive into the world of AI and machine learning. Learn to build intelligent systems and gain insights into neural networks, natural language processing, and more.',
          image: aiImage
        },
        {
          title: 'Power BI for Data Analytics',
          description: 'Learn to visualize and analyze data with Microsoft Power BI. Create compelling reports and dashboards to drive business decisions.',
          image: powerbiImage
        },
        {
          title: 'Oracle Database Management',
          description: 'Gain expertise in Oracle database administration. Learn about database architecture, backup and recovery, and performance tuning.',
          image: oracleImage
        },
        {
          title: 'AWS Cloud Practitioner',
          description: 'Get started with Amazon Web Services (AWS). Understand the core services, security aspects, and architecture best practices.',
          image: awsImage
        },
        {
          title: 'DevOps Engineering',
          description: 'Learn the principles and practices of DevOps. Understand continuous integration, delivery, and deployment to improve software development processes.',
          image: devopsImage
        },
        {
          title: 'Python Programming',
          description: 'Master Python programming from basics to advanced topics. Learn about data structures, libraries, and frameworks for web and software development.',
          image: pythonImage
        },
        {
          title: 'Web Designing Essentials',
          description: 'Learn the fundamentals of web design. Understand HTML, CSS, JavaScript, and modern web design trends.',
          image: webDesignImage
        }
      ];
  return (
    <div className="courses-list">
    <h2 className='course-heading'>Our Featured <span>Courses</span></h2>
    <div className="courses-container">
      {courses.map((course, index) => (
        <div key={index} className="course-card">
          <img src={course.image} alt={course.title} className="course-image" />
          <div className="course-info">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default CoursesList



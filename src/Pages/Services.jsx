import React from 'react';
import '../Styles/Services.css'; // Ensure you import the updated CSS file
import ser1 from '../Images/web.jpg';
import ser2 from '../Images/mobileapp.png';
import ser3 from '../Images/resume.jpg';

function Services() {
  return (
    <div className='Servicecontainer'>
      <h1>Our <span> Services</span></h1>
      <p>
        At Cloprosys IT Solutions, we are dedicated to crafting digital solutions that elevate your brand and engage your audience. Our team of experienced designers and developers offer a wide range of services to meet your business needs. Explore our offerings:
      </p>
      
      <div className='ServiceSection'>
        <img src={ser1} alt="Web Designing" className='ServiceImage' />
        <div className='ServiceText'>
          <h3>Web Designing</h3>
          {/* <p>
            Our web designing services focus on delivering tailored, visually appealing, and highly functional websites that drive results.
          </p> */}
          <ul>
            <li><strong>Single Page Websites:</strong> Clean, modern, and focused online presence.</li>
            <li><strong>Multi-Page Websites:</strong> Organized and user-friendly experience.</li>
            <li><strong>E-Commerce Websites:</strong> Robust platforms with seamless shopping.</li>
            <li><strong>Landing Pages:</strong> Designed to capture leads and drive conversions.</li>
            <li><strong>Content Management System (CMS) Websites:</strong> Easily update content regularly.</li>
            <li><strong>Portfolio Websites: </strong>  Showcase your work in style with our portfolio websites.</li>
            <li><strong>Blog Websites:</strong> For bloggers and content creators, we design custom blog websites that are easy to
            manage and beautiful to look at.</li>
            <li><strong>Corporate Websites:</strong> Tailored for larger organizations, our corporate websites are designed to
            convey professionalism and trust.</li>

          </ul>
        </div>
      </div>

      <div className='ServiceSection'>
        <img src={ser2} alt="Mobile App Designing" className='ServiceImage' />
        <div className='ServiceText'>
          <h3>Mobile App Designing</h3>
          {/* <p>
            In today’s mobile-first world, having a user-friendly and visually appealing mobile app is crucial. We offer mobile app design services that ensure your app stands out in a crowded marketplace.
          </p> */}
          <ul>
            <li><strong>Custom Mobile App Designs:</strong> Reflects your brand’s identity.</li>
            <li><strong>Cross Platform Compatibility:</strong> Flawless functionality across iOS and Android.</li>
            <li><strong>User Centric UI/UX Design:</strong> Intuitive navigation and engaging interfaces.</li>
            <li><strong>Prototyping and Testing:</strong> Interactive prototypes to visualize the user journey.</li>
          </ul>
        </div>
      </div>

      <div className='ServiceSection'>
        <img src={ser3} alt="Resume Designing" className='ServiceImage' />
        <div className='ServiceText'>
          <h3>Resume Designing</h3>
          {/* <p>
            Make a lasting impression with our professionally designed resumes. Our resume designs are tailored to highlight your strengths, skills, and experiences, ensuring you stand out in a competitive job market.
          </p> */}
          <ul>
            <li><strong>Customizable Templates:</strong> Variety of templates for different industries.</li>
            <li><strong>ATS Friendly Designs:</strong> Crafted to pass Applicant Tracking Systems.</li>
            <li><strong>Personalized Branding:</strong> Reflects your career goals and personality.</li>
            <li><strong>Cover Letters and LinkedIn Profiles:</strong> Professional cover letters and profile optimization.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;

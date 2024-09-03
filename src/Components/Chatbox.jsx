import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import botAvatar from '../Images/images.png'; // Ensure this path is correct
import userAvatar from '../Images/userimage.png'; // Add the path to your user avatar image

// Create a theme object to customize chatbot appearance
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Poppins, Helvetica, sans-serif',
  headerBgColor: '#4b2e77',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#4b2e77',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: 'black',
};

function Chatbox() {
  const steps = [
    {
      id: 'Greet',
      message: 'Hello! Welcome to Cloprosys',
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Please enter your name',
      trigger: 'Waiting',
    },
    {
      id: 'Waiting',
      user: true,
      trigger: 'Greetname',
    },
    {
      id: 'Greetname',
      message: 'Hi {previousValue}',
      trigger: 'Email',
    },
    {
      id:'Email',
      message:'Please enter your email',
      trigger:'Emailwaiting'
    },
    {
      id:'Emailwaiting',
      user:true,
      trigger:'Phone'
    },
    {
      id:'Phone',
      message:'Please enter your phone number',
      trigger:'Phonewaiting'
    },
    {
      id:'Phonewaiting',
      user:true,
      trigger:'issuesenter'
    },
    { 
      id:'issuesenter',
      message:'Let me know what do you want',
      trigger:'issues'
    },
    {
      id: 'issues',
      options: [
        {
          value: 'course',
          label: 'Course',
          trigger: 'courses',
        },
        {
          value: 'job',
          label: 'Job',
          trigger: 'jobupdates',
        },
      ],
    },
    {
      id: 'jobupdates',
      options: [
        {
          value: 'Web Developer',
          label: 'Web Developer',
          trigger: 'Resume',
        },
        {
          value: 'Mobile App Developer',
          label: 'Mobile App Developer',
          trigger: 'Resume',
        },
        {
          value: 'Human Resources',
          label: 'Human Resources',
          trigger: 'Resume',
        },
      ],
    },
    {
      id: 'Resume',
      message: 'Please send me your resume to this email: "info@cloprosys.com"',
      end: true,
    },
    {
      id: 'courses',
      options: [
        {
          value: 'Sales Force',
          label: 'Sales Force',
          trigger: 'courseResponse',
        },
        {
          value: 'Artificial intelligence',
          label: 'Artificial Intelligence',
          trigger: 'courseResponse',
        },
        {
          value: 'Python',
          label: 'Python',
          trigger: 'courseResponse',
        },
        {
          value: 'PowerBI',
          label: 'PowerBI',
          trigger: 'courseResponse',
        },
        {
          value: 'Devops',
          label: 'Devops',
          trigger: 'courseResponse',
        },
      ],
    },
    {
      id: 'courseResponse',
      message: 'Thank you for your interest in courses. We will get back to you soon!',
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot 
        steps={steps} 
        floating={true} 
        botAvatar={botAvatar}  // Use the imported botAvatar
        userAvatar={userAvatar} // Use the imported userAvatar
      />
    </ThemeProvider>
  );
}

export default Chatbox;

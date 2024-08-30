import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';



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
      message: 'Hi {previousValue}, please tell me what do you want?',
      trigger: 'issues',
    },
    {
      id: 'issues',
      options: [
        {
          value: 'course',
          label: 'Course',
          trigger: 'courseResponse',
        },
        {
          value: 'job',
          label: 'Job',
          trigger: 'jobResponse',
        },
      ],
    },
    {
      id: 'courseResponse',
      message: 'Thank you for your interest in courses. We will get back to you soon!',
      end: true,
    },
    {
      id: 'jobResponse',
      message: 'Thank you for your interest in job opportunities. We will get back to you soon!',
      end: true,
    },
  ];

  return (
    <>
       <ChatBot steps={steps} floating = {true} />
    </>
  );
}

export default Chatbox;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/ContactUs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ContactUs() {


  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_syvdorc', 'template_su4w9nl', form.current, '2LCo-vR3CJ2XwDOKM')
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSubmitting(false);
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send the message, please try again.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactUs;

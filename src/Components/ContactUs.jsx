import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/ContactUs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ContactUs() {


  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!form.current.name.value.trim()) {
      errors.name = 'Name is required';
    }
    if (!form.current.email.value.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.current.email.value.trim())) {
      errors.email = 'Email address is invalid';
    }
    if (!form.current.phone.value.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(form.current.phone.value.trim())) {
      errors.phone = 'Phone number is invalid';
    }
    if (!form.current.message.value.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

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
          form.current.reset();
          setErrors({}); 
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
          />
           {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
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

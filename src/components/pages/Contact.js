import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9ppyidc', 'template_2vs6hhp', form.current, 'bBUQ2zWOkXRZbZVeK').then((result) => {
      console.log(result.text);
      alert('Email Sent Successfully !');
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div><p className="contactHeading">Contact me<a href="mailto:rakib.ca@gmail.com"><img src="../email-icon.png" width="60px" alt="email-icon" class="icon" /></a>rakib.ca@gmail.com</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label for="name">Full Name:</label>
        <input className="form-control" type="text" name="from_name" />
        <label for="email">Email Address:</label>
        <input className="form-control" type="text" name="from_email" />
        <label for="message">Message:</label>
        <textarea className="form-control textarea" name="message" rows="5"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;

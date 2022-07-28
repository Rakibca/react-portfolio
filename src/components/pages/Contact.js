import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_z5y6vao', 'template_lb3foy6', form.current, 'Mvn_NZ_PH59q9buvw').then((result) => {
      console.log(result.text);
      alert('Email Sent Successfully !');
    }, (error) => {
      console.log(error.text);
    });
  };

  return (<div><h1 className="contactHeading">Contact</h1><form ref={form} onSubmit={sendEmail} className="contact-form">

    <label for="fname">Full Name:</label>
    <input className="form-control" type="text" name="user_name"/>
    <label for="email">Email Address:</label>
    <input className="form-control" type="text" name="user_email"/>
    <label for="message">Message:</label>
    <textarea className="form-control textarea" name="message" rows="5"></textarea>
    <input type="submit" value="Send Email"/>
  </form></div>);
};

export default Contact;

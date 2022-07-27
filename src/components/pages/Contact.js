import React, { useRef } from 'react';
//import { sendEmail } from '../../utils/helper.js';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z5y6vao', 'template_lb3foy6', form.current, 'Mvn_NZ_PH59q9buvw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <form ref={form} onSubmit={sendEmail}>

      <label for="fname">Full Name :</label>
      <input class="form-control" type="text" id="name" name="user_name" placeholder="Your full name..."/>

      <label for="email">Email :</label>
      <input class="form-control" type="text" id="email" name="user_email" placeholder="Your email..."/>

      <label for="message">Message :</label>
      <textarea class="form-control textarea" id="message" name="message" rows="5" placeholder="Your message..."></textarea>

      <input type="submit" value="Send Message" />
  </form>
 );
};

export default Contact;

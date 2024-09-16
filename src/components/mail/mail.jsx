import React from 'react';
import { CiMail } from "react-icons/ci";
import './mail.css'

const Mail = () => {
  return (
    <>
    <h1 className='mail-contact-heading'>Get in touch</h1>
    <div className='contact-section' id="contact">
      <div className='direction-container'>
        <div className='find-me-container'>
            <p className='find-me-heading'>Find Me</p>
            <p className='find-me-para'><CiMail/>Email:abinandhan506@gmail.com</p>

        </div>
      <form action="https://formspree.io/f/myzgalwy" method="POST" className="mail-form-container shadow">
      <div className='form-child-container'>
        <div className='form-group'>
          <input
            type='text'
            id='name'
            className='each-input'
            name='name'
            placeholder='Your Name'
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            id='email'
            className='each-input'
            name='email'
            placeholder='Your Email'
            required
          />
        </div>
        <div className='form-group'>
          <textarea
            id='message'
            name='message'
            required
            className='each-input'
            placeholder='Type your message here'
            rows={4}
            cols={40}
          ></textarea>
        </div>
        </div>
        <div className='text-center'>
        <button type='submit' className='send-message-button'>Send Message</button>
        </div>
      </form>
      </div>
    </div>
    </>
  );
};

export default Mail;

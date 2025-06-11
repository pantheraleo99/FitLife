import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you have any questions, feel free to reach out!</p>

      <form className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="owner-info">
        <p>Contact Shivam Meghwal</p>
        <p>Phone: 7974240699</p>
      </div>
    </div>
  );
};

export default Contact;

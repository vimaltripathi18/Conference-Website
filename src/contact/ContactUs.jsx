import React from 'react';
import './ContactUs.scss';
import { Link } from 'react-scroll';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2><span>Contact</span> Information</h2>
        <p><strong>Address:</strong> A-31, UPSIDC Industrial Area, Naini, Prayagraj, Chak Noor, Uttar Pradesh 211010</p>
        <p><strong>Email:</strong> <a href="mailto:contact@college.edu">contact@college.edu</a></p>
        <p><strong>Phone:</strong> 9918955555</p>
        <p><strong>Website:</strong> <a href=" http://allahabad.united.ac.in/ "> http://allahabad.united.ac.in/ </a> </p>
      </div>
      <div className="contact-map">
        <h2>Our <span>Location</span></h2>
        <iframe
          title="College Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.863566605215!2d81.89938477484216!3d25.342358825806738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39853534ffffffff%3A0xbce4c1b3c3577b37!2sUnited%20Institute%20of%20Management%20-%20Allahabad!5e0!3m2!1sen!2sin!4v1721557412734!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

import React from 'react';
import './footer.css';
//import logo from '../asset/logo.png';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <section>
           
            <h2>About US</h2>
            <p className='p1'>WHY tap, training and placement division of WHY Global Services was started in the year 2009 in the UK with the ultimate purpose of providing dissertation support and technical training for UK students. Later in the year 2010, we moved our base operations to India and established ourselves as a comprehensive education services provider.</p>
          </section>
        </div>
        <div className="footer__column">
          <section>
            <h2>Contact</h2>
            <p><FaLocationArrow style={{color:'#861b47',fontSize:'1rem'}}/> 3rd Floor, New N0. 75 77 & 79, Lohmanradhri Tower, Pantheon Road, Egmore, Chennai, Tamil Nadu, 600008.</p>
            <p><FaMobileAlt style={{color:'#861b47',fontSize:'1rem'}}/> 82700 99991</p>
            <p><FaEnvelope style={{color:'#861b47',fontSize:'1rem'}} /> contact@whytap.in</p>
          </section>
        </div>
        <div className="footer__column">
          <section>
            <h2>Important Links</h2>
            <ul>
              <li><a href="https://whytap.in/about-us/">Aboutus</a></li>
              <li><a href="https://whytap.in/courses/">Courses</a></li>
              <li><a href="https://jobs.whytap.in/">Jobs</a></li>
              <li><a href="https://whytap.in/contact-us/">Contactus</a></li>
            </ul>
          </section>
        </div>
        <div className="footer__column">
          <section>
            <h2>Popular Courses</h2>
            <ul>
              <li><a href="https://whytap.in/web-development-training-in-chennai/">Full Stack Development</a></li>
              <li><a href="https://whytap.in/digital-marketing-training-in-chennai/">Digital Marketing</a></li>
              <li><a href="https://whytap.in/pg-diploma-in-sofware-testing/">Software Testing</a></li>
              <li><a href="https://whytap.in/networking-training-in-chennai/">Networking</a></li>
              <li><a href="https://whytap.in/ethical-hacking-training-in-chennai/">Ethical Hacking</a></li>
            </ul>
          </section>
          
          
        </div>
      </div>
      <div className="footer-container">
        <p>&copy; {currentYear} WHY tap. All Rights Reserved.</p>
        <p className="last">Powered by WHY Global Services</p>
      </div>
   
    </footer>
  );
};

export default Footer;
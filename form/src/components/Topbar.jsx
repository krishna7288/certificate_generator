import React from 'react';
import { FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMailBulk } from 'react-icons/fa';
import './topbar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <span className="mobile-number">
          <FaPhone /> +91 82700 9991 | &nbsp; <FaMailBulk /> contact@whytap.in
        </span>
      </div>
      <div className="top-bar-right">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
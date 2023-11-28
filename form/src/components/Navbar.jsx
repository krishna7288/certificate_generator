// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import './navbar.css';
// import logo from '../asset/logo.png';

// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <nav className={`navbar ${isNavOpen ? 'nav-open' : ''}`}>
//       <div className="navbar-toggle" onClick={toggleNav}>
//         {isNavOpen ? <FaTimes /> : <FaBars />}
//       </div>
//       <ul className="navbar-links">
//         <li>
//           <img className="im" src={logo} alt="Logo" />
//         </li>
//         <li>
//           <Link to="/about-us" onClick={toggleNav}>
//             About Us
//           </Link>
//         </li>
//         <li>
//           <Link to="/courses" onClick={toggleNav}>
//             Courses
//           </Link>
//         </li>
//         <li>
//           <Link to="/jobs" onClick={toggleNav}>
//             Jobs
//           </Link>
//         </li>
//         <li>
//           <Link to="/news" onClick={toggleNav}>
//             News
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact-us" onClick={toggleNav}>
//             Contact Us
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';
import logo from '../asset/logo.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'nav-open' : ''}`}>
      <div className="navbar-toggle" onClick={toggleNav}>
        {isNavOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
      <ul className="navbar-links">
        <li>
          <img className="im" src={logo} alt="Logo" />
        </li>
        <li>
          <Link to="https://whytap.in/courses/" onClick={toggleNav}>
            Courses
          </Link>
        </li>
        <li>
          <Link to="https://whytap.in/about-us/" onClick={toggleNav}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="https://whytap.in/placements/" onClick={toggleNav}>
            Placements
          </Link>
        </li>
        <li>
          <Link to="https://whytap.in/events/" onClick={toggleNav}>
            Events
          </Link>
        </li>
        <li>
          <Link to="https://whytap.in/news/" onClick={toggleNav}>
            News
          </Link>
        </li>
        <li>
          <Link to="https://whytap.in/testimonials/" onClick={toggleNav}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="https://jobs.whytap.in/" onClick={toggleNav}>
            Jobs
          </Link>
        </li>
        <li>
          <Link to="https://whytap.in/news/" onClick={toggleNav}>
            News
          </Link>
        </li>
        <li>
          <Link to="https://whytap.in/contact-us/" onClick={toggleNav}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

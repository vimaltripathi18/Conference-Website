import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.pageYOffset >= sectionTop - 60 &&
          window.pageYOffset < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute('id'));
        }
      });

      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src="clogo.png" alt="College Logo" />
          <div className="college-info">
            <h2>College Name</h2>
            <p>Address Line</p>
            <h3>Conference Name</h3>
          </div>
        </div>
        <button className="toggle-btn" onClick={toggleNav}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={activeSection === 'home' ? 'active' : ''}
              onClick={toggleNav}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="invitation"
              smooth={true}
              duration={500}
              className={activeSection === 'invitation' ? 'active' : ''}
              onClick={toggleNav}
            >
              Invitation
            </Link>
          </li>
          <li>
            <Link
              to="conference-details"
              smooth={true}
              duration={500}
              className={activeSection === 'conference-details' ? 'active' : ''}
              onClick={toggleNav}
            >
              Conference
            </Link>
          </li>
          <li>
            <Link
              to="paper-policy"
              smooth={true}
              duration={500}
              className={activeSection === 'paper-policy' ? 'active' : ''}
              onClick={toggleNav}
            >
              Paper Policy
            </Link>
          </li>
          <li>
            <Link
              to="about-ugi"
              smooth={true}
              duration={500}
              className={activeSection === 'about-ugi' ? 'active' : ''}
              onClick={toggleNav}
            >
              UGI
            </Link>
          </li>
          <li>
            <Link
              to="speakers"
              smooth={true}
              duration={500}
              className={activeSection === 'speakers' ? 'active' : ''}
              onClick={toggleNav}
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              to="committee"
              smooth={true}
              duration={500}
              className={activeSection === 'committee' ? 'active' : ''}
              onClick={toggleNav}
            >
              Organizing Committee
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={toggleNav}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="register"
              smooth={true}
              duration={500}
              className={activeSection === 'register' ? 'active' : ''}
              onClick={toggleNav}
            >
              Registration
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

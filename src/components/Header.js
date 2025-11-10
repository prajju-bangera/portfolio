// components/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header-background"></div>
      
      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <div className="logo">
            <a href="#home" className="logo-link">
              {/* <div className="logo-icon">🚀</div> */}
              <div className="logo-text">
                <span className="logo-name">Sriraksha</span>
                {/* <span className="logo-title">Developer</span> */}
              </div>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <li key={item.name} className="nav-item">
                <a 
                  href={item.href}
                  className={`nav-link ${activeSection === item.name.toLowerCase() ? 'active' : ''}`}
                  style={{ '--delay': `${index * 0.1}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="link-text">{item.name}</span>
                  <span className="link-underline"></span>
                  <span className="link-glow"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Navigation Actions */}
          <div className="nav-actions">
            {/* Theme Toggle */}
            <button 
              className="theme-toggle" 
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              <div className="theme-icon">
                <span className="sun">☀️</span>
                <span className="moon">🌙</span>
              </div>
              <div className="theme-glow"></div>
            </button>

            {/* Resume Button */}
            <a href="/resume.pdf" className="resume-btn" download>
              <span className="btn-text">Resume</span>
              <span className="btn-icon">📄</span>
              <div className="btn-glow"></div>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </header>
  );
};

export default Header;
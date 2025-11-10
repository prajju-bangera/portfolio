// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: '#', color: '#333' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#', color: '#0077B5' },
    { name: 'Twitter', icon: 'twitter', url: '#', color: '#1DA1F2' },
    { name: 'Instagram', icon: 'instagram', url: '#', color: '#E4405F' },
    { name: 'Email', icon: 'email', url: 'mailto:hello@example.com', color: '#EA4335' }
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
  ];

  const techStack = [
    'React', 'JavaScript', 'Node.js', 'Python', 'MongoDB', 'CSS3', 'HTML5'
  ];

  return (
    <footer className="footer">
      {/* Animated Background */}
      <div className="footer-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="brand-logo">
              <div className="logo-icon">🚀</div>
              <h3 className="brand-name">Prajwal</h3>
            </div>
            <p className="brand-tagline">
              Full-Stack Developer passionate about creating amazing digital experiences
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  style={{ '--social-color': social.color, animationDelay: `${index * 0.1}s` }}
                  aria-label={social.name}
                >
                  <span className={`social-icon ${social.icon}`}></span>
                  <div className="social-glow"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section links-section">
            <h4 className="section-title">Quick Links</h4>
            <div className="links-grid">
              {quickLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="footer-link"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="link-arrow">→</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>



          {/* Contact Info */}
          <div className="footer-section contact-section">
            <h4 className="section-title">Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>hello@prajwal.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Mumbai, India</span>
              </div>
            </div>
            <button className="contact-btn">
              <span>Say Hello 👋</span>
              <div className="btn-glow"></div>
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="bottom-content">
            <div className="copyright">
              <span>© {currentYear} Prajwal. All rights reserved.</span>
            </div>
            <div className="footer-credits">
              <span>Made with ❤️ using React</span>
              <div className="heartbeat"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button 
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span>↑</span>
        <div className="scroll-glow"></div>
      </button>
    </footer>
  );
};

export default Footer;
import { useState } from 'react';
import './Footer.css';

const LogoSVG = () => (
  <img
    src="https://framerusercontent.com/images/lCI6CLJ2O4zVRNyeKc4wgRWJWqA.svg?width=240&height=60"
    alt="SignalsHQ"
    width="160"
    height="40"
    style={{ display: 'block' }}
  />
);

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-newsletter">
          <h3 className="footer-newsletter-title">Subscribe to Tax Newsletter</h3>
          <div className="footer-newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer-newsletter-input"
            />
            <button className="footer-newsletter-btn">Subscribe</button>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <LogoSVG />
            <p className="footer-tagline">Smart Automation Built for Scaling Tax Firms.</p>
            <div className="footer-contact-links">
              <a href="#">Contact</a>
              <a href="#" className="footer-linkedin" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 8V16M4 4V4.01M8 16V8M12 16V11C12 9.9 12.9 9 14 9C15.1 9 16 9.9 16 11V16" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Use Case</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Knowledge Hub</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Company</h4>
            <ul>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms conditions</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          <div className="footer-soc2">
            <div className="soc2-badge">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="34" stroke="#1e3a5f" strokeWidth="2"/>
                <circle cx="36" cy="36" r="28" fill="#0f2440"/>
                <text x="36" y="32" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter">SOC</text>
                <text x="36" y="46" textAnchor="middle" fill="#38bdf8" fontSize="16" fontWeight="900" fontFamily="Inter">2</text>
                <path d="M8 36C8 20 20 8 36 8" stroke="#1e3a5f" strokeWidth="3" strokeLinecap="round" transform="rotate(-30 36 36)"/>
              </svg>
              <span className="soc2-text">Monitored on Scuti</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

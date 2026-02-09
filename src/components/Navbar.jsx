import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import './Navbar.css';

const Logo = () => (
  <img
    src="https://framerusercontent.com/images/lCI6CLJ2O4zVRNyeKc4wgRWJWqA.svg?width=240&height=60"
    alt="SignalsHQ"
    width="142"
    height="36"
    style={{ display: 'block' }}
  />
);

export default function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let scrolled = false;
    function onScroll() {
      const isScrolled = window.scrollY > 20;
      if (isScrolled === scrolled) return;
      scrolled = isScrolled;

      gsap.to(nav, {
        padding: isScrolled ? '8px 20px' : '12px 24px',
        duration: 0.3,
        ease: 'power2.out',
      });

      nav.classList.toggle('navbar-scrolled', isScrolled);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-inner" ref={navRef}>
        <a href="#" className="navbar-logo">
          <Logo />
        </a>

        <ul className="navbar-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#use-case">Use Case</a></li>
          <li><a href="#security">Security</a></li>
          <li
            className="navbar-dropdown"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <a href="#resources">
              Resources <ChevronDown size={14} />
            </a>
            {resourcesOpen && (
              <div className="dropdown-menu">
                <a href="#">Blog</a>
                <a href="#">Knowledge Hub</a>
              </div>
            )}
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#" className="navbar-cta">
          Start Free Trial
        </a>
      </div>
    </nav>
  );
}

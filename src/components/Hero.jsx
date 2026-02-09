import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

function MagneticButton({ href, className, children }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      xTo(dx * 0.3);
      yTo(dy * 0.3);
    }

    function handleLeave() {
      xTo(0);
      yTo(0);
    }

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <a href={href} className={className} ref={btnRef}>
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge hero-animate hero-animate-1">
          <span className="hero-badge-icon">&#10024;</span>
          Ai Powered Tax Intelligence
        </div>
        <h1 className="hero-title hero-animate hero-animate-2">
          Powering Tax Experts.<br />
          Fueling Firm Growth.
        </h1>
        <p className="hero-subtitle hero-animate hero-animate-3">
          Smart Automation Built for Scaling Tax Firms
        </p>
        <div className="hero-buttons hero-animate hero-animate-4">
          <MagneticButton href="#" className="btn-primary">Start Free Trial</MagneticButton>
          <MagneticButton href="#" className="btn-secondary">Book a Demo</MagneticButton>
        </div>
      </div>
    </section>
  );
}

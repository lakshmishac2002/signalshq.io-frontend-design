import './BrandAnimation.css';

const LogoSVG = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 10L55 40L40 30L25 40L40 10Z" fill="#E879F9"/>
    <path d="M40 10L25 40L40 70L55 40L40 10Z" fill="url(#brand-grad)"/>
    <path d="M18 22L40 70L30 45L18 22Z" fill="#818CF8"/>
    <path d="M62 22L40 70L50 45L62 22Z" fill="#F472B6"/>
    <path d="M40 70L30 45L40 85L50 45L40 70Z" fill="#38BDF8"/>
    <defs>
      <linearGradient id="brand-grad" x1="25" y1="10" x2="55" y2="70">
        <stop stopColor="#E879F9"/>
        <stop offset="0.5" stopColor="#818CF8"/>
        <stop offset="1" stopColor="#38BDF8"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function BrandAnimation() {
  return (
    <section className="brand-animation">
      <div className="brand-animation-bg">
        <div className="brand-animation-content">
          <LogoSVG />
          <h2 className="brand-title">SignalsHQ</h2>
          <p className="brand-tagline">
            <span className="brand-tagline-bold">Powering</span>
            <span className="brand-tagline-light"> Tax</span>
          </p>
        </div>
      </div>
    </section>
  );
}

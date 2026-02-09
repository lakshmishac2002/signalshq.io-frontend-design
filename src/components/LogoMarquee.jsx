import './LogoMarquee.css';

const logos = [
  { name: 'Consultancy', icon: null },
  { name: 'Votex. Co', icon: null },
  { name: 'Tahoe Capital', icon: 'grid' },
  { name: 'Northbridge', icon: 'underline' },
  { name: 'Pinnacle Co.', icon: 'circle' },
  { name: 'ZENITH', icon: 'triangle' },
  { name: 'EK Tax Consulting', icon: null },
];

function LogoIcon({ type }) {
  if (type === 'grid') return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="7" height="7" rx="1.5" stroke="#6b7280" strokeWidth="1.5"/>
      <rect x="10" y="1" width="7" height="7" rx="1.5" stroke="#6b7280" strokeWidth="1.5"/>
      <rect x="1" y="10" width="7" height="7" rx="1.5" stroke="#6b7280" strokeWidth="1.5"/>
      <rect x="10" y="10" width="7" height="7" rx="1.5" stroke="#6b7280" strokeWidth="1.5"/>
    </svg>
  );
  if (type === 'circle') return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="#6b7280" strokeWidth="1.5"/>
      <circle cx="10" cy="10" r="3" fill="#6b7280"/>
    </svg>
  );
  if (type === 'triangle') return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L16 16H2L9 2Z" fill="#6b7280"/>
    </svg>
  );
  return null;
}

export default function LogoMarquee() {
  return (
    <section className="logo-marquee">
      <div className="marquee-track">
        <div className="marquee-content">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="marquee-logo">
              {logo.icon && <LogoIcon type={logo.icon} />}
              <span className={`logo-text ${logo.name === 'Northbridge' ? 'logo-bold' : ''}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

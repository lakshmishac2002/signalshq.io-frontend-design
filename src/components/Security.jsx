import './Security.css';

const securityFeatures = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#8b5cf6" strokeWidth="2"/>
        <path d="M8 14H20M14 8V20" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="4" stroke="#8b5cf6" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'End-to-end Encryption',
    desc: 'SOC 2 Type II',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="#8b5cf6" strokeWidth="2"/>
        <circle cx="18" cy="10" r="2" fill="#8b5cf6"/>
        <path d="M4 18L10 14L14 16L20 12L24 14" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Monitoring Systems',
    desc: <>24/7 intrusion detection<br/>Quarterly scans & annual pen tests</>,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C9 4 4 8 4 14C4 20 9 24 14 24" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="3" stroke="#8b5cf6" strokeWidth="2"/>
        <path d="M17 14H24" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Access Control',
    desc: <>Multi-Factor Authentication &<br/>Role-based permissions</>,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L22 8V14C22 19.5 18.5 23.5 14 25C9.5 23.5 6 19.5 6 14V8L14 4Z" stroke="#8b5cf6" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M10 14L13 17L18 12" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Regulation Compliant',
    desc: 'TLS 256-bit in transit & at rest',
  },
];

export default function Security() {
  return (
    <section className="security" id="security">
      <div className="container">
        <div className="security-grid">
          <div className="security-left">
            <h2 className="security-title">
              Secure Conversations. Smarter Tax Strategies.
            </h2>
            <p className="security-desc">
              <em>Built on industry-leading standards to keep your clients&apos; data safe and your firm audit-ready.</em>
            </p>
            <a href="#" className="security-cta">Find more</a>
          </div>
          <div className="security-features">
            {securityFeatures.map((f, i) => (
              <div key={i} className="security-feature">
                <div className="security-feature-icon">{f.icon}</div>
                <h3 className="security-feature-title">{f.title}</h3>
                <p className="security-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

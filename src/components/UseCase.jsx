import ScrollReveal from './ui/ScrollReveal';
import './UseCase.css';

const useCases = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 14L14 18L24 8" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 8H24V14" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Always Current on Tax Rules',
    desc: 'Delivers the latest updates across SALT and Federal taxes directly in your workflow.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="#8b5cf6" strokeWidth="2"/>
        <path d="M10 4V2M18 4V2M10 26V24M18 26V24" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12H16M12 16H14" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Turn Raw Data into Insight',
    desc: 'Uses AI to locate, organize, and surface client insights hidden in client documents.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 6V4M14 24V22M22 14H24M4 14H6M19.8 8.2L21.2 6.8M6.8 21.2L8.2 19.8M19.8 19.8L21.2 21.2M6.8 6.8L8.2 8.2" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="5" stroke="#8b5cf6" strokeWidth="2"/>
      </svg>
    ),
    title: 'Surface Savings & Risks',
    desc: 'Analyze your client data to unlock opportunities and spot risks proactively.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="4" width="16" height="20" rx="3" stroke="#8b5cf6" strokeWidth="2"/>
        <path d="M10 10H18M10 14H18M10 18H14" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Complex Advisory Ready',
    desc: 'Automates nexus studies, maps P&L, and handles K-1s for complex pass-through entities with accuracy.',
  },
];

export default function UseCase() {
  return (
    <section className="use-case" id="use-case">
      <div className="container">
        <ScrollReveal>
          <div className="use-case-header">
            <span className="use-case-label">Use Case</span>
            <h2 className="use-case-title">Focus on high-value client outcomes.</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger={0.15} className="use-case-grid">
          {useCases.map((uc, i) => (
            <div key={i} className="use-case-card">
              <div className="use-case-icon">{uc.icon}</div>
              <h3 className="use-case-card-title">{uc.title}</h3>
              <p className="use-case-card-desc">{uc.desc}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

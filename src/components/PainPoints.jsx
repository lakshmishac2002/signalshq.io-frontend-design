import ScrollReveal from './ui/ScrollReveal';
import './PainPoints.css';

const painBubbles = [
  'Review queue is jammed again',
  'W-2s and 1099s everywhere - help!',
  'K-1s are slowing everything down',
  "What's the nexus rule in California?",
  "We're double-entering the same data!",
];

const stats = [
  { value: '4+ hrs', label: 'Time saved', color: '#ef4444' },
  { value: '2X', label: 'Advisory Revenue', color: '#ef4444' },
  { value: '95%+', label: 'Client Satisfaction', color: '#ef4444' },
];

export default function PainPoints() {
  return (
    <section className="pain-points">
      <div className="container">
        <div className="pain-points-grid">
          <ScrollReveal>
            <div className="pain-points-left">
              <h2 className="pain-points-title">
                Cut research and preparation hours with AI-driven automation.
              </h2>
              <p className="pain-points-desc">
                One reliable layer for <strong>authoritative answers</strong>,{' '}
                <strong>automated intake and extraction</strong>, and{' '}
                <strong>streamlined prep</strong> to help your firm cut busy-season
                grind and redirect time to advisory.
              </p>
            </div>
          </ScrollReveal>
          <div className="pain-points-right">
            <div className="pain-bubbles">
              {painBubbles.map((text, i) => (
                <div key={i} className={`pain-bubble bubble-${i}`}>
                  {text}
                </div>
              ))}
              <div className="pain-sparkles">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`sparkle sparkle-${i}`} />
                ))}
              </div>
              <div className="pain-glow" />
            </div>
          </div>
        </div>
        <div className="pain-stats">
          {stats.map((stat, i) => (
            <div key={i} className="pain-stat">
              <div className="pain-stat-value" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="pain-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { CircleCheck } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { handleTiltMove, handleTiltLeave } from '../hooks/useTilt3D';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ prefix = '', value, suffix = '', duration = 1.5, format = false, className, style }) {
  const elRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            const num = Math.round(obj.val);
            const display = format ? num.toLocaleString() : String(num);
            el.textContent = `${prefix}${display}${suffix}`;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [prefix, value, suffix, duration, format]);

  return (
    <span ref={elRef} className={className} style={style}>
      {prefix}0{suffix}
    </span>
  );
}

const tiltConfig = { maxTilt: 6, scale: 1.01, speed: 400 };

function FeatureCard({ index = 0, label, labelColor, title, description, checkItems, cta, ctaStyle, children }) {
  return (
    <div className="feature-card-sticky" style={{ top: `calc(100px + ${index * 20}px)` }}>
      <motion.div
        className="feature-card"
        onMouseMove={(e) => handleTiltMove(e, tiltConfig)}
        onMouseLeave={(e) => handleTiltLeave(e, tiltConfig)}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="feature-card-inner">
          <div className="feature-card-text">
            <span className="feature-label" style={{ color: labelColor }}>{label}</span>
            <h3 className="feature-card-title">{title}</h3>
            <p className="feature-card-desc">{description}</p>
            <ul className="feature-checks">
              {checkItems.map((item, i) => (
                <li key={i}>
                  <CircleCheck size={20} color="#8b5cf6" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {cta && (
              <a href="#" className={`feature-cta ${ctaStyle || ''}`}>
                {cta}
              </a>
            )}
          </div>
          <div className="feature-card-visual">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TaxResearchVisual() {
  return (
    <div className="tax-research-visual">
      <div className="tr-tabs">
        <div className="tr-tab tr-tab-active">Federal</div>
        <div className="tr-tab">State</div>
        <div className="tr-tab tr-tab-bottom">Local</div>
      </div>
      <div className="tr-chat">
        <p className="tr-question">
          Can an S corporation hold QSBS stock under § 1202, and how does an ownership change affect available exclusion?
        </p>
        <div className="tr-answer">
          <div className="tr-sparkle">&#10024;</div>
          <div className="tr-lines">
            <div className="tr-line" style={{ width: '90%' }} />
            <div className="tr-line" style={{ width: '85%' }} />
            <div className="tr-line" style={{ width: '70%' }} />
          </div>
        </div>
        <div className="tr-citations">
          <span className="tr-citation">IRC § 63(c) - Standard deducti... &#x2197;</span>
          <span className="tr-citation">Rev... &#x2197;</span>
        </div>
      </div>
    </div>
  );
}

function NeuralAIVisual() {
  return (
    <div className="neural-visual">
      <div className="neural-client neural-client-1">
        <div className="neural-avatar" style={{ background: '#f59e0b' }}>
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face" alt="" />
        </div>
        <AnimatedCounter prefix="+" value={26} className="neural-badge" style={{ background: '#22c55e' }} />
        <div className="neural-tag">
          <span className="neural-tag-icon" style={{ background: '#8b5cf6', color: 'white' }}>V</span>
          Vertex Tax
        </div>
      </div>
      <div className="neural-client neural-client-2">
        <div className="neural-avatar" style={{ background: '#ec4899' }}>
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face" alt="" />
        </div>
        <div className="neural-form-tag">1040</div>
        <div className="neural-name-tag">
          <span className="neural-name-initial" style={{ background: '#818CF8' }}>S</span>
          Samantha
        </div>
      </div>
      <div className="neural-client neural-client-3">
        <div className="neural-avatar" style={{ background: '#6366f1' }}>
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="" />
        </div>
        <AnimatedCounter prefix="+" value={45} className="neural-badge" style={{ background: '#22c55e' }} />
        <div className="neural-tag">
          <span className="neural-tag-icon" style={{ background: '#fda4af', color: 'white' }}>E</span>
          Elevare & Co.
        </div>
      </div>
    </div>
  );
}

function AdvisoryVisual() {
  return (
    <div className="advisory-visual">
      <div className="advisory-photo">
        <div className="advisory-photo-placeholder">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop" alt="" />
        </div>
        <div className="advisory-chart-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 16L10 10L14 14L20 8" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div className="advisory-savings">
        <div className="advisory-savings-label">Suggested<br/>Tax Savings</div>
        <div className="advisory-savings-value">
          <AnimatedCounter prefix="$" value={700} duration={1.2} />-<AnimatedCounter prefix="" value={2000} duration={1.8} />
        </div>
      </div>
      <div className="advisory-items">
        <div className="advisory-item">
          <span className="advisory-check">&#10003;</span>
          <span>Child Tax Credit</span>
        </div>
        <div className="advisory-item">
          <span className="advisory-check">&#10003;</span>
          <span>Healthcare Savings</span>
        </div>
        <div className="advisory-item advisory-item-rejected">
          <span className="advisory-x">&#10005;</span>
          <span>Oil & Gas</span>
        </div>
      </div>
    </div>
  );
}

function PreparationVisual() {
  return (
    <div className="prep-visual">
      <div className="prep-photo">
        <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop" alt="" />
      </div>
      <div className="prep-card">
        <div className="prep-card-header">Book-to-Tax Adjustments</div>
        <div className="prep-card-row">
          <div className="prep-card-col">Difference</div>
        </div>
        <div className="prep-card-row">
          <div className="prep-card-label">
            Meals<br/>
            <span className="prep-card-sub">50% Deductible</span>
          </div>
          <div className="prep-card-value">-$<AnimatedCounter value={11789} duration={2} format /></div>
        </div>
        <div className="prep-excel-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#22a559"/>
            <path d="M7 7L12 12M12 12L17 17M12 12L17 7M12 12L7 17" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      <div className="prep-badge">1120 Filling Ready!</div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="features-label">Product</span>
          <h2 className="features-title">Everything You Wish Tax Software Could Do</h2>
        </motion.div>

        <FeatureCard
          index={0}
          label="Tax Research"
          labelColor="#ef4444"
          title="Instant, reliable answers to your tax questions."
          description="Clear, citable answers backed by laws and court rulings."
          checkItems={[
            'Direct IRS citations & references',
            'Federal & SALT coverage for comprehensive advisory',
          ]}
          cta="Start free trial"
          ctaStyle="cta-dark"
        >
          <TaxResearchVisual />
        </FeatureCard>

        <FeatureCard
          index={1}
          label="Neural AI"
          labelColor="#ef4444"
          title="Client Data in One Place."
          description="Centralized. Searchable. Always current."
          checkItems={[
            'AI document intake & extraction',
            '360° client overview at your fingertips',
          ]}
          cta="Book a Demo"
          ctaStyle="cta-dark"
        >
          <NeuralAIVisual />
        </FeatureCard>

        <FeatureCard
          index={2}
          label="Advisory"
          labelColor="#8b5cf6"
          title="Strategy That Pays Off."
          description="Deliver proactive advice without the manual grind."
          checkItems={[
            'Nexus study',
            'Advisory-ready reporting',
            'Multi-entity (1040, 1065, 1120-S) support',
          ]}
          cta="Coming soon"
          ctaStyle="cta-ghost"
        >
          <AdvisoryVisual />
        </FeatureCard>

        <FeatureCard
          index={3}
          label="Preparation"
          labelColor="#ef4444"
          title="First Pass Returns? Already Done."
          description="Cut prep time by 70%."
          checkItems={[
            'AI reclassification with audit trail',
            'Works with your existing tool stack',
            'Individual & Corporation ready',
          ]}
          cta="Coming soon"
          ctaStyle="cta-ghost"
        >
          <PreparationVisual />
        </FeatureCard>
      </div>
    </section>
  );
}

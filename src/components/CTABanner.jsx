import ScrollReveal from './ui/ScrollReveal';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <ScrollReveal y={60}>
          <div className="cta-banner-inner">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">
                Get hands-on with AI-powered tax automation today.
              </h2>
              <p className="cta-banner-sub">Start Free. No Credit Card Required.</p>
            </div>
            <a href="#" className="cta-banner-btn">Start 15-day Free Trial</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import ScrollReveal from './ui/ScrollReveal';
import './Testimonials.css';

const testimonials = [
  {
    quote: '"Research used to be a black hole. Now, I just type the question and get a citable IRS answer in seconds."',
    role: 'Tax Manager',
    company: 'Sama Tributa',
  },
  {
    quote: '"80% faster first drafts. What used to take us two days is now done in two hours."',
    role: 'Managing Partner',
    company: 'Northbridge Tax Advisory',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-grid">
          <ScrollReveal>
            <div className="testimonials-left">
              <span className="testimonials-label">Customer Stories</span>
              <h2 className="testimonials-title">Trusted by firms across the board</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.2} className="testimonials-cards">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-role">{t.role}</div>
                  <div className="testimonial-company">{t.company}</div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

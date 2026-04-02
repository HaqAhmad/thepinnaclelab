import { useState } from 'react'
import './App.css'

const MountainIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
    <path d="M2 27L15 3L28 27H2Z" stroke="#a8ff35" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    <path d="M9 27L15 15L21 27H9Z" fill="#a8ff35" />
  </svg>
)

const TAGS = [
  'Web Design','UI/UX Design','Branding','Content Design','Logo Design',
  'Motion Graphics','App Design','Growth Strategy','Social Media','Print Design',
  'Web Design','UI/UX Design','Branding','Content Design','Logo Design',
  'Motion Graphics','App Design','Growth Strategy','Social Media','Print Design',
]

const TESTIMONIALS = [
  {
    headline: 'Managed to Find The Best Digital Agency I Have Ever Seen! Highly Recommended!',
    quote: 'Working with ThePinnaclelab was the best creative decision we ever made. Our brand completely transformed and our audience tripled within months.',
    author: 'James Morrison',
    role: 'Creative Director',
    company: 'Synerax Studio',
  },
  {
    headline: 'The team is incredibly talented and always responsive to our needs!',
    quote: 'From the first call to final delivery, everything was seamless. They understood our vision and exceeded every expectation we had for the project.',
    author: 'Sarah Chen',
    role: 'CEO',
    company: 'Luminary Co.',
  },
  {
    headline: 'Absolutely transformed our digital presence in just a few weeks!',
    quote: 'ThePinnaclelab delivered designs that felt modern, strategic, and right on‑brand. We couldn\'t be happier with the outcomes and are already planning our next project.',
    author: 'David Okafor',
    role: 'Marketing Lead',
    company: 'Navex Global',
  },
]

const FAQS = [
  {
    q: 'How many design requests can I make per month?',
    a: 'On the Standard plan you get up to 4 active requests at a time. Growth and above unlock unlimited concurrent requests with priority queue access.',
  },
  {
    q: 'How many types of designs do you cover?',
    a: 'We cover everything — UI/UX, branding, social media, landing pages, pitch decks, motion graphics, print, and more. If it\'s design, we do it.',
  },
  {
    q: 'Can I cancel or pause my subscription anytime?',
    a: 'Absolutely. There are no long-term contracts or lock-ins. You can pause or cancel at any point directly from your dashboard with zero friction.',
  },
  {
    q: "I'm still struggling to choose a plan. Can I get help?",
    a: 'Of course! Book a free 20-minute discovery call with our team and we\'ll recommend the best plan based on your goals, volume, and budget.',
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  const prevTestimonial = () =>
    setTestimonialIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const nextTestimonial = () =>
    setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length)

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <MountainIcon />
            ThePinnaclelab
          </a>
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#portfolio" className="nav-link">Projects</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </div>
          <a href="#contact" className="nav-cta">Get Now</a>
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero-section">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Now Hiring Season
        </div>
        <h1>
          Bringing Your Dream Into
          <br />
          <em className="hero-reality">Reality</em>
        </h1>
        <p className="hero-sub">
          We are a passionate team of designers and developers crafting beautiful,
          functional digital products that help brands grow and stand out.
        </p>
        <p className="hero-tools-label">FIRST FOR OUR DESIGN SEASON</p>
        <div className="hero-tools">
          <span className="tool-badge"><span className="tool-dot figma"></span>Figma</span>
          <span className="tool-badge"><span className="tool-dot quotient"></span>Quotient</span>
          <span className="tool-badge"><span className="tool-dot directories"></span>Directories</span>
          <span className="tool-badge"><span className="tool-dot resources"></span>Resources</span>
          <span className="tool-badge"><span className="tool-dot command"></span>CommandUI</span>
        </div>
      </section>

      {/* Value Props */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-left">
            <h2>Get a dedicated design team at fraction of the cost.</h2>
            <p>
              Grow your brand with high quality design for a flat monthly fee.
              Work with talented designers trusted by the world's smartest companies.
            </p>
            <a href="#pricing" className="cta-button">Learn More</a>
          </div>
          <div className="features-right">
            <div className="feature-item">
              <div className="feature-icon">💳</div>
              <div>
                <h4>Subscribe &amp; get started</h4>
                <p>One flat monthly fee, no hidden costs or surprise invoices at the end of your projects.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📅</div>
              <div>
                <h4>Published designs — on time</h4>
                <p>We work fast. Most design requests are completed within 2–3 business days, every time.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔄</div>
              <div>
                <h4>Revisions made simple</h4>
                <p>Unlimited revisions on every design. We iterate until you are completely satisfied.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio-section">
        <p className="section-eyebrow">WHAT WE'VE DONE</p>
        <h2>Our Beautiful Works</h2>
        <p className="section-sub">
          Browse some of the work we are most proud of — real results with state‑of‑the‑art designs.
        </p>
        <div className="portfolio-grid">
          <div className="portfolio-item span-2" style={{ background: 'linear-gradient(135deg,#ff6e7f,#bfe9ff)' }}></div>
          <div className="portfolio-item" style={{ background: 'linear-gradient(135deg,#667eea,#764ba2)' }}></div>
          <div className="portfolio-item" style={{ background: 'linear-gradient(135deg,#f093fb,#f5576c)' }}></div>
          <div className="portfolio-item" style={{ background: 'linear-gradient(135deg,#4facfe,#00f2fe)' }}></div>
          <div className="portfolio-item span-2" style={{ background: 'linear-gradient(135deg,#fa709a,#fee140)' }}></div>
          <div className="portfolio-item" style={{ background: 'linear-gradient(135deg,#43e97b,#38f9d7)' }}></div>
        </div>
        <button className="outline-button">Load More</button>
      </section>

      {/* Services Tags */}
      <section id="services" className="services-tags-section">
        <p className="section-eyebrow">WHAT WE OFFER</p>
        <h2>We can help you with...</h2>
        <div className="tags-track-wrapper">
          <div className="tags-track">
            {TAGS.map((tag, i) => (
              <span key={i} className={`service-tag tag-color-${i % 5}`}>
                ▶ {tag}
              </span>
            ))}
          </div>
        </div>
        <button className="outline-button">See More</button>
      </section>

      {/* Subscription */}
      <section id="about" className="subscription-section">
        <div className="subscription-container">
          <div className="subscription-left">
            <p className="section-eyebrow left-eyebrow">EVERYTHING INCLUDED</p>
            <h2>The design subscription that connects you to your dream team</h2>
            <p>
              A subscription eliminates the stress of staffing and managing expenses.
              Dedicate yourself to new tastes while we handle every pixel.
            </p>
            <a href="#pricing" className="cta-button">Get Started</a>
          </div>
          <div className="subscription-right">
            <ul className="subscription-benefits">
              <li>
                <span className="benefit-num">01</span>
                <span className="benefit-icon-sm">💰</span>
                <span>10% discount monthly</span>
              </li>
              <li>
                <span className="benefit-num">02</span>
                <span className="benefit-icon-sm">✨</span>
                <span>Hi-fi quality designs</span>
              </li>
              <li>
                <span className="benefit-num">03</span>
                <span className="benefit-icon-sm">📱</span>
                <span>Fast-responsive mobile</span>
              </li>
              <li>
                <span className="benefit-num">04</span>
                <span className="benefit-icon-sm">🔥</span>
                <span>Hi-fi &amp; smooth</span>
              </li>
              <li>
                <span className="benefit-num">05</span>
                <span className="benefit-icon-sm">⚡</span>
                <span>Flexibility &amp; clarity</span>
              </li>
              <li>
                <span className="benefit-num">06</span>
                <span className="benefit-icon-sm">🏆</span>
                <span>Expert designers &amp; better licences</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <p className="section-eyebrow">CUSTOMERS SPEAK</p>
        <h2>Customer is Our Top Priority</h2>
        <p className="section-sub">
          We're not just designers — we're your creative partner. Here's what our clients say.
        </p>
        <div className="testimonial-carousel">
          <button className="carousel-arrow" onClick={prevTestimonial} aria-label="Previous">
            &#8249;
          </button>
          <div className="testimonial-card">
            <p className="testimonial-company">{TESTIMONIALS[testimonialIdx].headline}</p>
            <p className="testimonial-text">"{TESTIMONIALS[testimonialIdx].quote}"</p>
            <div className="testimonial-footer">
              <div className="testimonial-avatar">
                {TESTIMONIALS[testimonialIdx].author.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="testimonial-author">{TESTIMONIALS[testimonialIdx].author}</p>
                <p className="testimonial-role">
                  {TESTIMONIALS[testimonialIdx].role}, {TESTIMONIALS[testimonialIdx].company}
                </p>
              </div>
              <div className="testimonial-stars">★★★★★</div>
            </div>
          </div>
          <button className="carousel-arrow" onClick={nextTestimonial} aria-label="Next">
            &#8250;
          </button>
        </div>
        <div className="carousel-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === testimonialIdx ? 'active' : ''}`}
              onClick={() => setTestimonialIdx(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing-section">
        <p className="section-eyebrow">SUPER SUBSCRIPTION</p>
        <h2>Simple pricing to level up your brand.</h2>
        <p className="section-sub">No hidden fees. No surprises. Cancel or pause anytime.</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-tag">
              Standard <span className="tag-badge tag-active">Active</span>
            </div>
            <div className="price">$2,995<span>/m</span></div>
            <p className="price-desc">Billed Monthly</p>
            <ul className="features-list">
              <li>✓ Quality high direct</li>
              <li>✓ Unlimited design requests</li>
              <li>✓ 5 days a week delivery</li>
              <li>✓ Fast responsive mobile</li>
              <li>✓ 2 days for revisions</li>
            </ul>
            <button className="pricing-btn">Get Now</button>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-tag">
              Growth <span className="tag-badge tag-popular">Popular</span>
            </div>
            <div className="price">$4,795<span>/m</span></div>
            <p className="price-desc">Billed Monthly</p>
            <ul className="features-list">
              <li>✓ Everything in Standard</li>
              <li>✓ Priority support 24/7</li>
              <li>✓ Unlimited revisions</li>
              <li>✓ Weekly strategy call</li>
              <li>✓ Dedicated account manager</li>
            </ul>
            <button className="pricing-btn featured-btn">Get Now</button>
          </div>
          <div className="pricing-card">
            <div className="pricing-tag">
              Basic — Weekly <span className="tag-badge tag-new">New</span>
            </div>
            <div className="price">$890<span>/m</span></div>
            <p className="price-desc">Billed Weekly</p>
            <ul className="features-list">
              <li>✓ Fixed weekly requests</li>
              <li>✓ Email support</li>
              <li>✓ 3-day turnaround</li>
              <li>✓ 1 revision per request</li>
              <li>✓ Basic brand assets</li>
            </ul>
            <button className="pricing-btn">Get Now</button>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="news-section">
        <p className="section-eyebrow">OUR LATEST</p>
        <h2>News &amp; Articles</h2>
        <p className="section-sub">Don't miss our latest blog posts and design insights.</p>
        <div className="news-grid">
          {[
            { title: 'What is the branding, and what we said it?', tag: 'Branding', gradient: 'linear-gradient(135deg,#667eea,#764ba2)' },
            { title: 'What is the branding, and what we said it?', tag: 'Strategy', gradient: 'linear-gradient(135deg,#f093fb,#f5576c)' },
            { title: 'What is the branding, and what we said it?', tag: 'Design', gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)' },
            { title: 'What is the branding, and what we said it?', tag: 'Growth', gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)' },
            { title: 'What is the branding, and what we said it?', tag: 'Motion', gradient: 'linear-gradient(135deg,#fa709a,#fee140)' },
            { title: 'What is the branding, and what we said it?', tag: 'Branding', gradient: 'linear-gradient(135deg,#30cfd0,#330867)' },
          ].map((post, i) => (
            <article key={i} className="news-card">
              <div className="news-image" style={{ background: post.gradient }}></div>
              <div className="news-body">
                <span className="news-tag">{post.tag}</span>
                <h4>{post.title}</h4>
                <a href="#news" className="read-more">Read More →</a>
              </div>
            </article>
          ))}
        </div>
        <button className="outline-button">Load More</button>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq-section">
        <p className="section-eyebrow">HAVE QUESTIONS?</p>
        <h2>FAQ's</h2>
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${activeFaq === i ? 'open' : ''}`}
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
            >
              <div className="faq-question">
                <span>{faq.q}</span>
                <span className="faq-icon">{activeFaq === i ? '−' : '+'}</span>
              </div>
              {activeFaq === i && <div className="faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-section">
        <h2>Become part of the design revolution</h2>
        <p>Join hundreds of growing brands already working with ThePinnaclelab.</p>
        <a href="mailto:hello@thepinnaclelab.com" className="cta-button">Get Now</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#home" className="nav-logo footer-logo">
              <MountainIcon />
              ThePinnaclelab
            </a>
            <p>Transforming ideas into beautiful digital experiences, one design at a time.</p>
            <div className="footer-socials">
              <a href="#twitter" aria-label="Twitter">𝕏</a>
              <a href="#instagram" aria-label="Instagram">Instagram</a>
              <a href="#linkedin" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h5>Services</h5>
              <a href="#services">Web Design</a>
              <a href="#services">Branding</a>
              <a href="#services">Motion</a>
              <a href="#services">Strategy</a>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#news">Blog</a>
              <a href="#careers">Careers</a>
            </div>
            <div className="footer-col">
              <h5>Legal</h5>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 ThePinnaclelab. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App

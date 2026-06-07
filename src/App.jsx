import { useState } from 'react';

// Import images from assets folder
const RCT_STANDARD = new URL('./assets/images/rct-standard.jpg', import.meta.url).href;
const RCT_LASER = new URL('./assets/images/rct-laser.jpg', import.meta.url).href;
const RCT_RETREAT = new URL('./assets/images/rct-retreat.jpg', import.meta.url).href;
const HERO_IMAGE = new URL('./assets/images/hero-dentist.jpg', import.meta.url).href;
const VIDEO_THUMB = new URL('./assets/images/video-equipment.jpg', import.meta.url).href;
const MAP_IMAGE = new URL('./assets/images/clinic-map.jpg', import.meta.url).href;

const services = [
  {
    title: 'Standard RCT',
    description: 'Effective treatment for infected pulp using traditional, proven methods ensuring long-term tooth survival.',
    image: RCT_STANDARD,
    icon: '🦷',
  },
  {
    title: 'Laser RCT',
    description: 'Advanced precision with laser technology designed to reduce bacteria and accelerate healing time.',
    image: RCT_LASER,
    icon: '⚡',
  },
  {
    title: 'Re-Treatment RCT',
    description: 'Expert care for previously treated teeth that have not healed properly or have developed new issues.',
    image: RCT_RETREAT,
    icon: '🔄',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Laser RCT Patient',
    quote: 'I was terrified of the dentist, but Clove Dental changed everything. The Laser RCT was painless and quick!',
  },
  {
    name: 'Rahul Verma',
    role: 'Implant Patient',
    quote: 'The precision and care taken during my implant procedure were outstanding. Highly recommended!',
  },
  {
    name: 'Anjali Gupta',
    role: 'Cosmetic Dentistry',
    quote: 'My smile makeover is incredible. The doctors explained every step and made me feel so comfortable.',
  },
];

const faqs = [
  {
    question: 'Is Root Canal treatment painful?',
    answer: 'Our root canal treatments use advanced anaesthesia and modern techniques to minimize discomfort and ensure a smooth experience.',
  },
  {
    question: 'How many visits are required?',
    answer: 'Most cases are completed in one or two visits, depending on the complexity of the procedure and follow-up care.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept a wide range of insurance plans. Please contact us directly to verify your specific coverage.',
  },
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setNavOpen(false);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-icon">🦷</span>
            <div>
              <div className="brand-name">Clove Dental</div>
              <div className="brand-tag">#1 Dental Network in India</div>
            </div>
          </div>

          <nav className={`site-nav ${navOpen ? 'open' : ''}`} aria-label="Primary navigation">
            <a href="#treatments" onClick={() => handleScrollTo('treatments')}>Treatments</a>
            <a href="#locations" onClick={() => handleScrollTo('locations')}>Locations</a>
            <a href="#contact" onClick={() => handleScrollTo('contact')}>Contact</a>
            <a className="phone-link" href="tel:+919999999999">+91-999-999-9999</a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-primary" type="button" onClick={() => handleScrollTo('contact')}>Book Appointment</button>
            <button
              className="nav-toggle"
              aria-expanded={navOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setNavOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section-hero">
          <div className="hero-copy">
            <span className="eyebrow">#1 Dental Network in India</span>
            <h1>Your Smile, <span>Our Passion.</span></h1>
            <p>Advanced dental care with safety, precision, and compassion. Experience world-class dentistry with state-of-the-art technology.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" type="button" onClick={() => handleScrollTo('contact')}>Book Consultation</button>
              <button className="btn btn-secondary" type="button" onClick={() => handleScrollTo('treatments')}>How we work</button>
            </div>
            <div className="hero-trust">
              <div className="avatar-group" aria-label="Trusted by patients">
                <span className="avatar">PS</span>
                <span className="avatar">RV</span>
                <span className="avatar">AG</span>
              </div>
              <span>Trusted by <strong>10,000+</strong> happy patients</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card" aria-label="Dentist at clinic">
              <img
                src={HERO_IMAGE}
                alt="Dentist holding dental tools"
              />
              <div className="hero-badge">
                <strong>Certified Safe</strong>
                <span>100% Sterilized Equipment</span>
              </div>
            </div>
          </div>
        </section>

        <section id="treatments" className="section services">
          <div className="section-heading">
            <div>
              <h2>Types of Root Canal Treatments</h2>
              <p>We offer specialized root canal treatments tailored to your specific needs, using the latest technology for painless procedures.</p>
            </div>
            <a href="#contact" className="link-secondary">View all services →</a>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <img src={service.image} alt={service.title} />
                <div className="service-card-body">
                  <div className="service-heading">
                    <span>{service.icon}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                  <button className="btn btn-link" type="button" onClick={() => handleScrollTo('contact')}>Learn More</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-heading center">
            <h2>Real Smiles, Real Transformations</h2>
            <p>See the life-changing results our patients experience every day.</p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p>{`“${item.quote}”`}</p>
                <div className="testimonial-author">
                  <span className="avatar circle">{item.name.split(' ').map((n) => n[0]).join('')}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section info-split">
          <div className="info-media" aria-label="Dental imaging technology">
            <div className="video-card">
              <div className="video-thumb" style={{ backgroundImage: `url(${VIDEO_THUMB})` }} />
              <button className="video-play" aria-label="Play video">▶</button>
            </div>
            <div className="info-stats">
              <div>
                <span>10x</span>
                <small>Safer</small>
              </div>
              <div>
                <span>45 min</span>
                <small>Avg time</small>
              </div>
            </div>
          </div>

          <div className="info-copy">
            <h2>Safety, Precision, and Innovation</h2>
            <p>We employ 4-step sterilization protocols and use AI-assisted diagnostics to ensure 100% precision in every treatment.</p>
            <ul className="feature-list">
              <li>Advanced Sterilization<span>Hospital-grade hygiene standards.</span></li>
              <li>3D Imaging Technology<span>Complete view for accurate diagnosis.</span></li>
              <li>Painless Procedures<span>State-of-the-art anesthesia delivery.</span></li>
            </ul>
          </div>
        </section>

        <section id="locations" className="section locator">
          <div className="section-heading">
            <div>
              <h2>Find Us Across India</h2>
              <p>Over 350+ Clinics nationwide. Healthcare near you.</p>
            </div>
          </div>

          <div className="locator-card">
            <div className="locator-sidebar">
              <h3>Clinic Locator</h3>
              <input type="text" placeholder="Enter city or pincode" aria-label="Search clinics" />
              <ul>
                <li>Clove Dental - Connaught Place <span>New Delhi, 0.8 km away</span></li>
                <li>Clove Dental - Indiranagar <span>Bangalore, 4.2 km away</span></li>
                <li>Clove Dental - Bandra West <span>Mumbai, 12 km away</span></li>
              </ul>
            </div>
            <div className="locator-map" style={{ backgroundImage: `url(${MAP_IMAGE})` }} aria-label="Clinic map location"></div>
          </div>
        </section>

        <section className="section pricing">
          <div className="section-heading center">
            <h2>Expert Guidance for Healthy Smiles</h2>
            <p>Transparent pricing for our most popular root canal services.</p>
          </div>

          <div className="pricing-table">
            <div>
              <strong>Consultation</strong>
              <span>Initial checkup & X-ray analysis</span>
            </div>
            <div>₹500</div>
            <div>
              <strong>Standard Root Canal</strong>
              <span>Single sitting options available</span>
            </div>
            <div>₹4,500</div>
            <div>
              <strong>Laser Root Canal</strong>
              <span>Advanced disinfection technology</span>
            </div>
            <div>₹7,000</div>
            <div>
              <strong>Crown (Cap)</strong>
              <span>Ceramic / Zirconia options</span>
            </div>
            <div>₹3,500</div>
          </div>
          <p className="pricing-note">* Prices may vary based on the complexity of the case and location.</p>
        </section>

        <section className="section faq">
          <div className="section-heading center">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div key={item.question} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                <button type="button" onClick={() => setActiveFaq(index)}>
                  {item.question}
                  <span>{activeFaq === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="footer-grid">
          <div>
            <div className="brand-footer">
              <span className="brand-icon">🦷</span>
              <strong>Clove Dental</strong>
            </div>
            <p>India’s largest dental network committed to providing world-class dental care with a human touch.</p>
            <div className="footer-socials">
              <span>🌐</span>
              <span>✉️</span>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#">About Us</a>
            <a href="#">Our Doctors</a>
            <a href="#treatments">Treatments</a>
            <a href="#">Blog</a>
          </div>
          <div>
            <h3>Our Services</h3>
            <a href="#">Root Canal Treatment</a>
            <a href="#">Dental Implants</a>
            <a href="#">Teeth Whitening</a>
            <a href="#">Braces & Aligners</a>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>RK Khanna Tennis Stadium, DLTA Complex, New Delhi</p>
            <a href="tel:+919999999999">+91-999-999-9999</a>
            <a href="mailto:info@clovedental.in">info@clovedental.in</a>
          </div>
        </div>
        <div className="footer-note">© 2023 Clove Dental. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;

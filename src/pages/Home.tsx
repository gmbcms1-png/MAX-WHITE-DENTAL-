import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';

export const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: '',
    date: '',
    time: '9:00 AM – 12:00 PM',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const subForm = () => {
    const { name, phone, concern, date, time, message } = formData;
    if (!name || !phone || !concern || !date) {
      alert("Please fill all required fields.");
      return;
    }
    const text = `Hi ${SITE_CONFIG.clinic.name},\nI would like to make an appointment.\n\nName: ${name}\nPhone: ${phone}\nConcern: ${concern}\nDate: ${date}\nTime: ${time}\nMessage: ${message}`;
    const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="hero-badge-dot"></div>
              <span>{SITE_CONFIG.clinic.tagline}</span>
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: SITE_CONFIG.hero.title }}></h1>
            <p className="hero-desc">{SITE_CONFIG.hero.description}</p>
            <div className="hero-btns">
              <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="btn-green">Call Now</a>
              <Link to="/services" className="btn-outline">Our Services</Link>
            </div>
            <div className="hero-stats">
              <div className="hstat">
                <div className="hstat-num">{SITE_CONFIG.clinic.experience}</div>
                <div className="hstat-label">Years Exp.</div>
              </div>
              <div className="hstat-sep"></div>
              <div className="hstat">
                <div className="hstat-num">{SITE_CONFIG.clinic.patients}</div>
                <div className="hstat-label">Happy Patients</div>
              </div>
              <div className="hstat-sep"></div>
              <div className="hstat">
                <div className="hstat-num">{SITE_CONFIG.clinic.rating}</div>
                <div className="hstat-label">Google Rating</div>
              </div>
            </div>
          </div>

          <div className="hero-form-wrap" id="appointment">
            <h3>Request a Slot</h3>
            <div className="fg-row">
              <div className="fg"><label>Full Name</label><input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleChange} /></div>
              <div className="fg"><label>Phone Number</label><input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} /></div>
            </div>
            <div className="fg"><label>Concern / Treatment</label>
              <select id="concern" value={formData.concern} onChange={handleChange}>
                <option value="">Select a concern…</option>
                {SITE_CONFIG.appointment.concerns.map((c, idx) => (
                  <option key={idx} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="fg-row">
              <div className="fg"><label>Preferred Date</label><input type="date" id="date" value={formData.date} onChange={handleChange} /></div>
              <div className="fg"><label>Preferred Time</label>
                <select id="time" value={formData.time} onChange={handleChange}>
                  <option>9:00 AM – 12:00 PM</option>
                  <option>12:00 PM – 3:00 PM</option>
                  <option>3:00 PM – 5:00 PM</option>
                  <option>5:00 PM – 7:30 PM</option>
                </select>
              </div>
            </div>
            <div className="fg"><label>Message (optional)</label><textarea id="message" rows={2} placeholder="Briefly describe your concern…" value={formData.message} onChange={handleChange}></textarea></div>
            <button className="f-btn" onClick={subForm}>Make Appointment →</button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (Added back to Home) */}
      <section className="sec" id="about">
        <div className="con">
          <div className="about-grid">
            <div className="about-img-wrap">
              <div className="about-img-main">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt={SITE_CONFIG.clinic.name} referrerPolicy="no-referrer" style={{ background: 'var(--primary-light)' }} />
              </div>
              <div className="about-exp-badge">
                <div className="aeb-num">{SITE_CONFIG.clinic.experience}</div>
                <div className="aeb-lbl">Years of Clinical<br />Experience</div>
              </div>
            </div>
            <div className="about-con">
              <span className="sec-tag">Meet the Specialist</span>
              <h2 className="sec-title">{SITE_CONFIG.clinic.doctorName}</h2>
              <div className="about-qual">{SITE_CONFIG.clinic.qualifications}</div>
              <p className="about-desc">{SITE_CONFIG.clinic.aboutShort}</p>
              <div className="cred-list">
                {SITE_CONFIG.clinic.credentials.slice(0, 4).map((cred, idx) => (
                  <div key={idx} className="cred-row">
                    <div className="cred-ck">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-outline" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>Read Full Profile →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec sec-alt" id="services">
        <div className="con">
          <div className="sec-head">
            <span className="sec-tag">Our Services</span>
            <h2 className="sec-title">Advanced Dental & Cosmetic Treatments</h2>
            <p className="sec-sub">We offer a wide range of medical and aesthetic dental services using the latest technology.</p>
          </div>
          <div className="srv-grid">
            {SITE_CONFIG.services.slice(0, 6).map((srv, idx) => (
              <div key={idx} className="srv-card">
                <div className="srv-icon">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn-green">View All Services</Link>
          </div>
        </div>
      </section>

      {/* GALLERY (Moved to replace Why Choose Us) */}
      <section className="sec">
        <div className="con">
          <div className="sec-head">
            <h2 className="sec-title">Our Happy Patients</h2>
          </div>
          <div className="gal-grid">
            {SITE_CONFIG.gallery.slice(0, 4).map((img, idx) => (
              <div key={idx} className="gal-item">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt={img.label} referrerPolicy="no-referrer" style={{ background: 'var(--primary-light)' }} />
                <div className="gal-overlay">{img.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="sec sec-alt">
        <div className="con">
          <div className="rev-top-row">
            <div className="sec-head">
              <span className="sec-tag">Patient Stories</span>
              <h2 className="sec-title">What Our Patients Say</h2>
            </div>
            <div className="g-badge">
              <div className="g-score">{SITE_CONFIG.clinic.rating.replace('★', '')}</div>
              <div>
                <div className="g-stars">★★★★★</div>
                <div className="g-lbl">Google Reviews</div>
              </div>
            </div>
          </div>
          <div className="rev-grid">
            {SITE_CONFIG.reviews.map((rev, idx) => (
              <div key={idx} className="rev-card">
                <div className="rev-top">
                  <div className="rev-av" style={{ background: rev.bg, color: rev.color }}>{rev.initial}</div>
                  <div>
                    <div className="rev-nm">{rev.name}</div>
                    <div className="rev-dt">{rev.date}</div>
                  </div>
                </div>
                <div className="rev-stars">★★★★★</div>
                <p className="rev-txt">{rev.text}</p>
              </div>
            ))}
          </div>
          <div className="rev-cta">
            <a href={SITE_CONFIG.contact.googleMapsLink} target="_blank" rel="noopener noreferrer">View All Google Reviews →</a>
          </div>
        </div>
      </section>

      {/* MAP (Added back to Home) */}
      <section className="map-sec">
        <div className="con">
          <div className="map-grid">
            <div className="map-info">
              <h2>Visit Our Clinic</h2>
              <div className="mrow">
                <div className="mrow-ic">📍</div>
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <a href={SITE_CONFIG.contact.googleMapsLink} className="map-dir" target="_blank" rel="noopener noreferrer">Get Directions on Maps →</a>
            </div>
            <div className="map-embed">
              <iframe src={SITE_CONFIG.contact.googleMapsEmbed} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

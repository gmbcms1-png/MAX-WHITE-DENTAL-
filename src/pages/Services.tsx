import React from 'react';
import { SITE_CONFIG } from '../config';

export const Services: React.FC = () => {
  return (
    <main>
      <section className="sec">
        <div className="con">
          <div className="sec-head">
            <span className="sec-tag">Our Services</span>
            <h2 className="sec-title">Advanced Dental & Cosmetic Treatments</h2>
            <p className="sec-sub">We offer a wide range of medical and aesthetic dental services using the latest technology and clinical expertise.</p>
          </div>
          <div className="srv-grid">
            {SITE_CONFIG.services.map((srv, idx) => (
              <div key={idx} className="srv-card">
                <div className="srv-icon">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--primary-light)', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--text)', marginBottom: '1rem' }}>Need a Custom Treatment Plan?</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>Every smile is unique. {SITE_CONFIG.clinic.doctorName} provides personalised consultations to understand your dental health and concerns before recommending any procedure.</p>
            <a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} className="btn-green" target="_blank" rel="noopener noreferrer">Consult on WhatsApp →</a>
          </div>
        </div>
      </section>
    </main>
  );
};

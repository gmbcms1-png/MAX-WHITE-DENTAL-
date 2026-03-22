import React from 'react';
import { SITE_CONFIG } from '../config';

export const About: React.FC = () => {
  return (
    <main>
      <section className="sec">
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
                {SITE_CONFIG.clinic.credentials.map((cred, idx) => (
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
              <div style={{ background: 'var(--primary-light)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>AVAILABLE FOR CONSULTATION</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                  {SITE_CONFIG.clinic.doctorName} is available for in-person consultations at her Rishikesh clinic. She also offers follow-up care and guidance for all dental treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

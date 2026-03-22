import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="ft-brand">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            {SITE_CONFIG.clinic.logoUrl ? (
              <img src={SITE_CONFIG.clinic.logoUrl} alt={SITE_CONFIG.clinic.name} className="logo-img" referrerPolicy="no-referrer" />
            ) : (
              <div className="logo-ic" style={{ background: '#fff', color: 'var(--primary)' }}>{SITE_CONFIG.clinic.logoInitial}</div>
            )}
            <div>
              <div className="logo-nm" style={{ color: '#fff', fontSize: '1.2rem' }}>{SITE_CONFIG.clinic.name}</div>
              <div className="logo-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>{SITE_CONFIG.clinic.subName}</div>
            </div>
          </Link>
          <p className="ft-desc">{SITE_CONFIG.clinic.aboutShort}</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <a href="#" className="social-link">f</a>
            <a href="#" className="social-link">ig</a>
            <a href="#" className="social-link">in</a>
          </div>
        </div>
        <div>
          <div className="ft-title">Quick Links</div>
          <ul className="ft-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About {SITE_CONFIG.clinic.doctorName}</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Make Appointment</Link></li>
          </ul>
        </div>
        <div>
          <div className="ft-title">Contact Us</div>
          <div className="ft-ci">
            <div style={{ fontSize: '1.2rem' }}>📍</div>
            <span>{SITE_CONFIG.contact.address}</span>
          </div>
          <div className="ft-ci">
            <div style={{ fontSize: '1.2rem' }}>📞</div>
            <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`}>{SITE_CONFIG.contact.phone}</a>
          </div>
          <div className="ft-ci">
            <div style={{ fontSize: '1.2rem' }}>✉️</div>
            <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
          </div>
          <div className="ft-ci">
            <div style={{ fontSize: '1.2rem' }}>🕐</div>
            <span>{SITE_CONFIG.contact.hours.weekdays}<br />{SITE_CONFIG.contact.hours.sunday}</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} {SITE_CONFIG.clinic.name} · {SITE_CONFIG.clinic.subName} · All Rights Reserved
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../config';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div className="topbar">
        <div className="tb-item">📍 <span className="c-address-short">{SITE_CONFIG.contact.addressShort}</span></div>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem' }}>
          <div className="tb-item"><span className="tb-sep">|</span>📞 <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`}>{SITE_CONFIG.contact.phone}</a></div>
          <div className="tb-item"><span className="tb-sep">|</span>✉️ <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a></div>
          <div className="tb-item"><span className="tb-sep">|</span>🕐 <span>{SITE_CONFIG.contact.hours.weekdays}</span> &nbsp;|&nbsp; <span>{SITE_CONFIG.contact.hours.sunday}</span></div>
        </div>
      </div>

      <nav>
        <div className="nav-inner">
          <Link to="/" className="logo" onClick={closeMenu}>
            {SITE_CONFIG.clinic.logoUrl ? (
              <img src={SITE_CONFIG.clinic.logoUrl} alt={SITE_CONFIG.clinic.name} className="logo-img" referrerPolicy="no-referrer" />
            ) : (
              <div className="logo-ic">{SITE_CONFIG.clinic.logoInitial}</div>
            )}
            <div>
              <div className="logo-nm">{SITE_CONFIG.clinic.name}</div>
              <div className="logo-sub">{SITE_CONFIG.clinic.subName}</div>
            </div>
          </Link>
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
          <a href="/#appointment" className="nav-cta">Make Appointment</a>
          <button className={`hbg ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mmenu ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>🏠 Home</Link>
        <Link to="/about" onClick={closeMenu}>👨‍⚕️ About {SITE_CONFIG.clinic.doctorName}</Link>
        <Link to="/services" onClick={closeMenu}>🦷 Our Services</Link>
        <Link to="/contact" onClick={closeMenu}>📞 Contact Us</Link>
        <div style={{ padding: '1.5rem 0 0.5rem' }}>
          <a href="/#appointment" className="mm-book" onClick={closeMenu}>📅 Book Appointment</a>
        </div>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} style={{ border: 'none', padding: '0.5rem' }}>📞 Call</a>
          <a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} style={{ border: 'none', padding: '0.5rem' }}>💬 WhatsApp</a>
        </div>
      </div>
    </>
  );
};

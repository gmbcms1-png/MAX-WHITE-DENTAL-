import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';

export const MobileBar: React.FC = () => {
  const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(`Hi ${SITE_CONFIG.clinic.name}, I would like to inquire about your services.`)}`;

  return (
    <div className="mob-bar">
      <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="mb-call">
        <span style={{ fontSize: '1.2rem', display: 'block' }}>📞</span>
        Call
      </a>
      <a href={waUrl} className="mb-wa" target="_blank" rel="noopener noreferrer">
        <span style={{ fontSize: '1.2rem', display: 'block' }}>💬</span>
        WhatsApp
      </a>
      <Link to="/contact" className="mb-book">
        <span style={{ fontSize: '1.2rem', display: 'block' }}>📅</span>
        Book
      </Link>
    </div>
  );
};

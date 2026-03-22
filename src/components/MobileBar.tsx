import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';

export const MobileBar: React.FC = () => {
  const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(`Hi ${SITE_CONFIG.clinic.name}, I would like to inquire about your services.`)}`;

  return (
    <div className="mob-bar">
      <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="mb-call">📞 Call Now</a>
      <a href={waUrl} className="mb-wa" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
      <Link to="/contact" className="mb-book">📅 Book Now</Link>
    </div>
  );
};

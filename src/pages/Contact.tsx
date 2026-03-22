import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';

export const Contact: React.FC = () => {
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
      {/* APPOINTMENT */}
      <section className="appt" id="contact">
        <div className="appt-inner">
          <div className="appt-left">
            <h2 id="appt-title">{SITE_CONFIG.appointment.title}</h2>
            <p id="appt-desc">{SITE_CONFIG.appointment.desc}</p>
            <div className="appt-contacts">
              <div className="appt-ci">
                <div className="appt-ci-ic">💬</div>
                <span>
                  <a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: '#a8dff5', fontWeight: 700 }}>Chat on WhatsApp</a>
                  <br />Quick response guaranteed
                </span>
              </div>
              <div className="appt-ci">
                <div className="appt-ci-ic">📞</div>
                <span>
                  <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="c-phone">{SITE_CONFIG.contact.phone}</a>
                  <br />{SITE_CONFIG.contact.hours.weekdays}
                </span>
              </div>
              <div className="appt-ci">
                <div className="appt-ci-ic">📍</div>
                <span className="c-address">{SITE_CONFIG.contact.address}</span>
              </div>
            </div>
          </div>
          <div className="appt-form">
            <h3 id="appt-form-title">Request a Slot</h3>
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

      {/* MAP */}
      <section className="map-sec" id="map">
        <div className="con">
          <div className="map-grid">
            <div className="map-info">
              <h2>Visit Our Clinic</h2>
              <div className="mrow">
                <div className="mrow-ic">📍</div>
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="mrow">
                <div className="mrow-ic">📞</div>
                <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} style={{ color: 'inherit', textDecoration: 'none' }}>{SITE_CONFIG.contact.phone}</a>
              </div>
              <div className="mrow">
                <div className="mrow-ic">✉️</div>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{SITE_CONFIG.contact.email}</a>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.86rem', marginBottom: '0.5rem' }}>Consultation Hours:</div>
                <table className="htbl">
                  <tbody>
                    <tr><td>Monday – Saturday</td><td>9:00 AM – 7:30 PM</td></tr>
                    <tr><td>Sunday</td><td>11:00 AM – 1:00 PM</td></tr>
                  </tbody>
                </table>
              </div>
              <a href={SITE_CONFIG.contact.googleMapsLink} className="map-dir" target="_blank" rel="noopener noreferrer">Get Directions on Maps →</a>
            </div>
            <div className="map-embed">
              <iframe src={SITE_CONFIG.contact.googleMapsEmbed} title="Max White Dental Location" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

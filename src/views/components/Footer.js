import React from 'react';
import facebookIcon from '../../assets/icons/facebook.png';
import gmailIcon from '../../assets/icons/gmail.png';
import instagramIcon from '../../assets/icons/instagram.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p><strong>Contáctanos:</strong></p>
          <p>Teléfono: +1 (555) 123-4567</p>
          <p>Email: info@sharkstar.com</p>
        </div>
        <div className="social-media">
          <p><strong>Síguenos:</strong></p>
          <ul className="social-links">
            <li><a href="#"><img src={instagramIcon} alt="Instagram" /></a></li>
            <li><a href="#"><img src={whatsappIcon} alt="WhatsApp" /></a></li>
            <li><a href="#"><img src={gmailIcon} alt="Email" /></a></li>
            <li><a href="#"><img src={facebookIcon} alt="Facebook" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

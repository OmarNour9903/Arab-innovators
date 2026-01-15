import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import '../styles/Footer.css';

const TikTokIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>تواصل معنا</h3>
                    <ul className="footer-links contact-info">
                        <li>
                            <Phone size={18} />
                            <span>01055923515</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>omarnour992003@gmail.com</span>
                        </li>
                        <li>
                            <MapPin size={18} />
                            <span>مصر - المنيا</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} المبتكرين العرب</p>
                <div className="social-links">
                    <a href="https://www.facebook.com/share/1AR8QyRQuu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                    <a href="https://www.instagram.com/abn_frnaas_?igsh=MWkzbWR6YTh6Y3VpOA==" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

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
                <div className="footer-social">
                    <h3 className="footer-social-title">تابعنا على</h3>
                    <div className="footer-social-links">
                        <a href="https://www.tiktok.com/@el_moptakren_el_arab_?_r=1&_t=ZS-932Q4NV9TiT" target="_blank" rel="noopener noreferrer" className="footer-social-link tiktok">
                            <TikTokIcon />
                            <span>TikTok</span>
                        </a>
                        <a href="https://www.tiktok.com/@el_moptakren_el_arab_?_r=1&_t=ZS-932Q4NV9TiT" target="_blank" rel="noopener noreferrer" className="footer-social-link instagram">
                            <Instagram size={20} />
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.facebook.com/share/1AR8QyRQuu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="footer-social-link facebook">
                            <Facebook size={20} />
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} المبتكرين العرب. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

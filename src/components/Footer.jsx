import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Youtube } from 'lucide-react';
import { TikTokIcon } from './Icons';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-contact">
                    <h3>تواصل معنا</h3>
                    <ul className="contact-list">
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

                <div className="footer-info">
                    <p className="copyright">جميع الحقوق محفوظة &copy; 2026 المبتكرين العرب</p>
                    <div className="social-links footer-socials">
                        <a href="https://www.tiktok.com/@el_moptakren_el_arab_?_r=1&_t=ZS-932Q4NV9TiT" target="_blank" rel="noopener noreferrer" className="social-link">
                            <TikTokIcon size={20} />
                        </a>
                        <a href="https://www.youtube.com/@Abn_frnaas" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Youtube size={20} />
                        </a>
                        <a href="https://www.instagram.com/abn_frnaas_?igsh=MWkzbWR6YTh6Y3VpOA==" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.facebook.com/share/1AR8QyRQuu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

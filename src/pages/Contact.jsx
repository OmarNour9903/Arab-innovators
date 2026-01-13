import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Pages.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data. For static, we might just alert or open mailto.
        alert('شكراً لتواصلك معنا! سيتم الرد عليك قريباً.');
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h2 className="page-title">تواصل معنا</h2>
                <p className="page-subtitle">نحن هنا للإجابة على جميع استفساراتك</p>
            </div>

            <div className="contact-methods">
                <div className="contact-card">
                    <div className="contact-icon-wrapper">
                        <Phone size={32} />
                    </div>
                    <h3>اتصل بنا</h3>
                    <a href="tel:+201055923515" className="contact-link">01055923515</a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon-wrapper">
                        <Mail size={32} />
                    </div>
                    <h3>راسلنا</h3>
                    <a href="mailto:info@arab-innovators.com" className="contact-link">info@arab-innovators.com</a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon-wrapper">
                        <MapPin size={32} />
                    </div>
                    <h3>موقعنا</h3>
                    <span className="contact-link">القاهرة، مصر</span>
                </div>
            </div>

            <div className="contact-form">
                <h3>أرسل لنا رسالة</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">الاسم</label>
                        <input type="text" className="form-control" placeholder="ادخل اسمك" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">البريد الإلكتروني</label>
                        <input type="email" className="form-control" placeholder="example@email.com" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">الرسالة</label>
                        <textarea className="form-control" rows="5" placeholder="اكتب رسالتك هنا..." required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">إرسال الرسالة</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

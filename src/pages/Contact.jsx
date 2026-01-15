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
                    <a href="mailto:omarnour992003@gmail.com" className="contact-link">omarnour992003@gmail.com</a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon-wrapper">
                        <MapPin size={32} />
                    </div>
                    <h3>موقعنا</h3>
                    <span className="contact-link">مصر - المنيا</span>
                </div>
            </div>

            <div className="faq-section">
                <h3>الأسئلة الشائعة</h3>
                <div className="faq-container">
                    <details className="faq-item">
                        <summary>ما هي الدورات المتاحة حالياً؟</summary>
                        <p>نقدم مجموعة واسعة من الدورات في مجالات الروبوتكس، الأردوينو، البرمجة للأطفال، والذكاء الاصطناعي. يمكنك تصفح قسم الكورسات لمعرفة المزيد.</p>
                    </details>
                    <details className="faq-item">
                        <summary>هل توجد شهادات معتمدة؟</summary>
                        <p>نعم، يحصل المتدرب على شهادة إتمام بعد اجتياز الدورة والمشروع النهائي بنجاح.</p>
                    </details>
                    <details className="faq-item">
                        <summary>كيف يمكنني التسجيل في الكورسات؟</summary>
                        <p>يمكنك التواصل معنا مباشرة عبر الهاتف أو الواتساب، أو زيارة مقرنا في المنيا للتسجيل.</p>
                    </details>
                    <details className="faq-item">
                        <summary>هل الدورات مناسبة للأطفال؟</summary>
                        <p>بالتأكيد! لدينا برامج مخصصة للأطفال تبدأ من سن 6 سنوات لتعليمهم أساسيات البرمجة والروبوتكس بطريقة ممتعة وتفاعلية.</p>
                    </details>
                </div>
            </div>

            <div className="map-section">
                <h3>موقعنا على الخريطة</h3>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111246.57866532432!2d30.73265565!3d28.109867949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b2501a3577e3d%3A0x67584d4f40751b36!2sMinya%2C%20Minya%201%2C%20Minya%2C%20Menia%20Governorate!5e0!3m2!1sen!2seg!4v1705256214356!5m2!1sen!2seg"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Minya Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;

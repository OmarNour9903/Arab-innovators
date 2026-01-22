import React from 'react';
import Card from '../components/Card';
import { Wrench, Car, Bot } from 'lucide-react';
import '../styles/Pages.css';

const Kits = () => {
    const kitsList = [
        {
            id: 1,
            title: 'كيت السيارة الذكية',
            description: 'اصنع سيارتك الخاصة وبرمجها للتحكم عن بعد أو تتبع المسار.',
            icon: Car,
            to: `https://wa.me/201055923515?text=${encodeURIComponent('محتاج استفسر عن كيت السيارة الذكية')}`
        },
        {
            id: 2,
            title: 'كيت الذراع الروبوتية',
            description: 'تعلم أساسيات الروبوتات من خلال بناء وبرمجة ذراع آلية.',
            icon: Bot,
            to: `https://wa.me/201055923515?text=${encodeURIComponent('محتاج استفسر عن كيت الذراع الروبوتية')}`
        },
        {
            id: 3,
            title: 'كيت المنزل الذكي',
            description: 'حول منزلك لبيت ذكي مع هذا الكيت المتكامل.',
            icon: Wrench,
            to: `https://wa.me/201055923515?text=${encodeURIComponent('محتاج استفسر عن كيت المنزل الذكي')}`
        }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h2 className="page-title">الكيتات التعليمية</h2>
                <p className="page-subtitle">كيتات تعليمية متكاملة للبدء فوراً</p>
            </div>

            <div className="cards-grid">
                {kitsList.map(kit => (
                    <Card
                        key={kit.id}
                        title={kit.title}
                        description={kit.description}
                        icon={kit.icon}
                        to={kit.to}
                        buttonText="اشترِ الآن"
                    />
                ))}
            </div>
        </div>
    );
};

export default Kits;

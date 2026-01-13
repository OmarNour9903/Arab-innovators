import React from 'react';
import Card from '../components/Card';
import { Box, Layers, Star } from 'lucide-react';
import '../styles/Pages.css';

const Packages = () => {
    const packagesList = [
        {
            id: 1,
            title: 'الباقة الشاملة',
            description: 'تتضمن كورس البرمجة + كورس الإلكترونيات + كيت المبتدئين بسعر مخفض.',
            icon: Box,
            to: '/contact'
        },
        {
            id: 2,
            title: 'باقة المبرمج الصغير',
            description: 'مجموعة مختارة من الكورسات المناسبة للأطفال والناشئين.',
            icon: Star,
            to: '/contact'
        },
        {
            id: 3,
            title: 'باقة المحترف',
            description: 'مستوى متقدم في البرمجة والتحكم الآلي مع مشاريع تخرج.',
            icon: Layers,
            to: '/contact'
        }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h2 className="page-title">الباقات التعليمية</h2>
                <p className="page-subtitle">باقات متكاملة تجمع عدة كورسات بسعر مميز</p>
            </div>

            <div className="cards-grid">
                {packagesList.map(pkg => (
                    <Card
                        key={pkg.id}
                        title={pkg.title}
                        description={pkg.description}
                        icon={pkg.icon}
                        to={pkg.to}
                        buttonText="اطلب الباقة الآن"
                    />
                ))}
            </div>
        </div>
    );
};

export default Packages;

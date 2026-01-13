import React from 'react';
import Card from '../components/Card';
import { Cpu, Zap, Radio } from 'lucide-react';
import '../styles/Pages.css';

const Components = () => {
    const componentsList = [
        {
            id: 1,
            title: 'Arduino Uno',
            description: 'اللوحة الأشهر للمشاريع الإلكترونية. سهلة الاستخدام ومناسبة للمبتدئين.',
            icon: Cpu,
            to: '/contact'
        },
        {
            id: 2,
            title: 'حساسات (Sensors)',
            description: 'مجموعة متنوعة من الحساسات: حرارة، ضوء، مسافة، والمزيد.',
            icon: Radio,
            to: '/contact'
        },
        {
            id: 3,
            title: 'محركات (Motors)',
            description: 'محركات DC و Servo و Stepper لمشاريع الحركة والروبوتات.',
            icon: Zap,
            to: '/contact'
        }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h2 className="page-title">الكومبونانت</h2>
                <p className="page-subtitle">مكونات جاهزة وقابلة للاستخدام لتسريع عملية التعلم</p>
            </div>

            <div className="cards-grid">
                {componentsList.map(item => (
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        to={item.to}
                        buttonText="طلب المنتج"
                    />
                ))}
            </div>
        </div>
    );
};

export default Components;

import React from 'react';
import Card from '../components/Card';
import { Code, Smartphone, Database, Globe } from 'lucide-react';
import '../styles/Pages.css';

const Courses = () => {
    const coursesList = [
        {
            id: 1,
            title: 'أساسيات البرمجة',
            description: 'تعلم أساسيات البرمجة من الصفر حتى الاحتراف مع أمثلة عملية وتطبيقات واقعية.',
            icon: Code,
            to: `https://wa.me/201055923515?text=${encodeURIComponent('محتاج استفسر عن كورس أساسيات البرمجة')}`
        },
        // Placeholder examples
        {
            id: 2,
            title: 'تطوير تطبيقات الموبايل',
            description: 'دورة شاملة في بناء تطبيقات الأندرويد و iOS باستخدام أحدث التقنيات.',
            icon: Smartphone,
            to: `https://wa.me/201055923515?text=${encodeURIComponent('محتاج استفسر عن كورس تطوير تطبيقات الموبايل')}`
        },
        {
            id: 3,
            title: 'تطوير المواقع',
            description: 'احترف برمجة وتصميم المواقع الإلكترونية المتجاوبة.',
            icon: Globe,
            to: `https://wa.me/201055923515?text=${encodeURIComponent('محتاج استفسر عن كورس تطوير المواقع')}`
        }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h2 className="page-title">الكورسات التعليمية</h2>
                <p className="page-subtitle">اختر الكورس المناسب لك وابدأ رحلة التعلم</p>
            </div>

            <div className="cards-grid">
                {coursesList.map(course => (
                    <Card
                        key={course.id}
                        title={course.title}
                        description={course.description}
                        icon={course.icon}
                        to={course.to}
                        buttonText="تواصل معنا للحجز"
                    />
                ))}
            </div>
        </div>
    );
};

export default Courses;

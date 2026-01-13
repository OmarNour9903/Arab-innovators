import React from 'react';
import Card from '../components/Card';
import { BookOpen, Package, Cpu, Wrench } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">مرحباً بك في المبتكرين العرب</h1>
                <p className="hero-subtitle">ابدأ رحلتك التعليمية معنا</p>
                <p className="hero-description">
                    نقدم لك أفضل الكورسات والباقات التعليمية والكومبونانت والكيتات لتطوير مهاراتك وتحقيق أهدافك.
                    انضم إلينا الآن وكن جزءاً من مجتمع المبتكرين العرب
                </p>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">كورس تعليمي</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100+</span>
                        <span className="stat-label">طالب مبدع</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">دعم مستمر</span>
                    </div>
                </div>
            </section>

            {/* Services/Cards Section */}
            <section className="services-section">
                <div className="section-header">
                    <h2 className="section-title">خدماتنا التعليمية</h2>
                    <p className="section-subtitle">اختر ما يناسبك من خدماتنا المتنوعة</p>
                </div>

                <div className="cards-grid">
                    <Card
                        title="الكورسات التعليمية"
                        description="كورسات شاملة ومتنوعة في مختلف المجالات التقنية والإبداعية لتطوير مهاراتك"
                        icon={BookOpen}
                        to="/courses"
                        buttonText="تصفح الكورسات"
                    />
                    <Card
                        title="الباقات التعليمية"
                        description="باقات متكاملة تجمع عدة كورسات بسعر مميز لتوفير أكبر قدر من الفائدة"
                        icon={Package}
                        to="/packages"
                        buttonText="اكتشف الباقات"
                    />
                    <Card
                        title="الكومبونانت"
                        description="مكونات جاهزة وقابلة للاستخدام لتسريع عملية التعلم والتطبيق العملي"
                        icon={Cpu}
                        to="/components"
                        buttonText="شاهد الكومبونانت"
                    />
                    <Card
                        title="الكيتات التعليمية"
                        description="كيتات تعليمية متكاملة تحتوي على كل ما تحتاجه للبدء في مجال معين"
                        icon={Wrench}
                        to="/kits"
                        buttonText="اطلع على الكيتات"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;

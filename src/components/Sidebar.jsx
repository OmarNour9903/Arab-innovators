import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, BookOpen, Package, Cpu, Wrench, Mail, Instagram, Facebook, X } from 'lucide-react';
import '../styles/Sidebar.css';

// Custom TikTok icon since Lucide might not have it or it's named differently
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
        className="lucide lucide-music"
    >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
    </svg>
);

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const navItems = [
        { path: '/', label: 'الرئيسية', icon: Home },
        { path: '/about', label: 'عن المبتكرين العرب', icon: Info },
        { path: '/courses', label: 'الكورسات', icon: BookOpen },
        { path: '/packages', label: 'الباقات التعليمية', icon: Package },
        { path: '/components', label: 'الكومبونانت', icon: Cpu },
        { path: '/kits', label: 'الكيتات التعليمية', icon: Wrench },
        { path: '/contact', label: 'تواصل معنا', icon: Mail },
    ];

    return (
        <>
            <div
                className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
                onClick={toggleSidebar}
            />
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo-placeholder">
                        {/* Placeholder for logo */}
                        <h1 className="logo-text">المبتكرين العرب</h1>
                    </div>
                    <button className="close-btn mobile-only" onClick={toggleSidebar}>
                        <X size={24} />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => window.innerWidth < 992 && toggleSidebar()}
                        >
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <p className="social-title">تابعنا على</p>
                    <div className="social-links">
                        <a href="https://www.tiktok.com/@el_moptakren_el_arab_?_r=1&_t=ZS-932Q4NV9TiT" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
                            <TikTokIcon />
                        </a>
                        <a href="https://www.tiktok.com/@el_moptakren_el_arab_?_r=1&_t=ZS-932Q4NV9TiT" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.facebook.com/share/1AR8QyRQuu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

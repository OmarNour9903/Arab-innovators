import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, BookOpen, Package, Cpu, Wrench, Mail, Instagram, Facebook, X } from 'lucide-react';
import logo from '../assets/images/logo.jpeg';
import '../styles/Sidebar.css';

import { TikTokIcon } from './Icons';

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
                        <img src={logo} alt="المبتكرين العرب" className="sidebar-logo" />
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
                    <div className="social-links">
                        <a href="https://www.tiktok.com/@el_moptakren_el_arab_?_r=1&_t=ZS-932Q4NV9TiT" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
                            <TikTokIcon size={20} />
                        </a>
                        <a href="https://www.instagram.com/abn_frnaas_?igsh=MWkzbWR6YTh6Y3VpOA==" target="_blank" rel="noopener noreferrer" className="social-link instagram">
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

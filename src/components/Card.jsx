import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ title, description, icon: Icon, to, buttonText = "تواصل معنا" }) => {
    return (
        <div className="card">
            <div className="card-icon">
                <Icon size={28} />
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            {to ? (
                <Link to={to} className="card-btn">
                    {buttonText}
                </Link>
            ) : (
                <button className="card-btn disabled">{buttonText}</button>
            )}
        </div>
    );
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ title, description, icon: Icon, to, buttonText = "تواصل معنا", backgroundImage }) => {
    const cardStyle = backgroundImage
        ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
        }
        : {};

    const isExternal = to && (to.startsWith('http') || to.startsWith('https'));

    return (
        <div className="card" style={cardStyle}>
            <div className="card-icon">
                <Icon size={28} />
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            {to ? (
                isExternal ? (
                    <a
                        href={to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-btn"
                    >
                        {buttonText}
                    </a>
                ) : (
                    <Link to={to} className="card-btn">
                        {buttonText}
                    </Link>
                )
            ) : (
                <button className="card-btn disabled">{buttonText}</button>
            )}
        </div>
    );
};

export default Card;

import React from 'react';
import { MessageCircle } from 'lucide-react';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/201055923515"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default WhatsAppButton;

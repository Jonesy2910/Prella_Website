// Logo.js
import React from 'react';
import logoImage from './LogoFull.png'; // Import the image using ES6 import
import './Logo.css';

function Logo() {
    return (
        <div className="logo-container">
            <img src={logoImage} alt="Logo" />
        </div>
    );
}

export default Logo;
import React from 'react';
import './Logo.css';

function Logo() {
    return (
        <logo>
            <div className="logo-container">
                <img src={require('./LogoFull.png')} alt="Logo" />
            </div>
        </logo>
    );
}

export default Logo;
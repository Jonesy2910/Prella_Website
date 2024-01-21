// Header.js
import React from 'react';
import Logo from './Logo';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="header-container">
                <Logo />
                <nav>
                    <ul className="nav_links">
                        {navItems.map((item) => (
                            <li key={item.label} className="dropdown">
                                <a href={item.link}>{item.label}</a>
                                {item.submenu && (
                                    <ul className="dropdown-menu">
                                        {item.submenu.map((subItem) => (
                                            <li key={subItem.label}>
                                                <a href={subItem.link}>{subItem.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div>
                <ul className="login_links">
                    <li><a href="#">Login</a></li>
                    <li className="divider">|</li>
                    <li><a href="#">Register</a></li>
                </ul>
            </div>
        </header>
    );
}

const navItems = [
    {
        label: "New Arrivals",
        link: "#",
        submenu: [
            { label: "Men's Clothing", link: "#" },
            { label: "Women's Clothing", link: "#" },
            { label: "Children's Clothing", link: "#" },
            { label: "Home Products", link: "#" },
        ],
    },
    {
        label: "Men's Clothing",
        link: "#",
        submenu: [
            { label: "T-Shirts", link: "#" },
            { label: "Sweatshirts", link: "#" },
            { label: "Shirts", link: "#" },
            { label: "Suits", link: "#" },
            { label: "Men's Sale", link: "#" },
        ],
    },
    {
        label: "Women's Clothing",
        link: "#",
        submenu: [
            { label: "T-Shirts", link: "#" },
            { label: "Demin", link: "#" },
            { label: "Shorts", link: "#" },
            { label: "Dresses", link: "#" },
            { label: "Women's Sale", link: "#" },
        ],
    },
    {
        label: "Children's Clothing",
        link: "#",
        submenu: [
            { label: "T-Shirts", link: "#" },
            { label: "Shoes", link: "#" },
            { label: "Shirts", link: "#" },
            { label: "Hoodies", link: "#" },
            { label: "Children's Sale", link: "#" },
        ],
    },
    {
        label: "Home Products",
        link: "#",
        submenu: [
            { label: "Electricals", link: "#" },
            { label: "Kitchenware", link: "#" },
            { label: "Furniture", link: "#" },
            { label: "Bathroom", link: "#" },
            { label: "Home Sale", link: "#" },
        ],
    },
];

export default Header;
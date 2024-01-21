import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <ul className="nav_links">
                    <li className="dropdown">
                        <a href="#">New Arrivals</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Men's Clothing</a></li>
                            <li><a href="#">Women's Clothing</a></li>
                            <li><a href="#">Children's Clothing</a></li>
                            <li><a href="#">Home Products</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Men's Clothing</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">T-Shirts</a></li>
                            <li><a href="#">Sweatshirts</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Suits</a></li>
                            <li><a href="#">Men's Sale</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Women's Clothing</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">T-Shirts</a></li>
                            <li><a href="#">Demin</a></li>
                            <li><a href="#">Shorts</a></li>
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Women's Sale</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Children's Clothing</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">T-Shirts</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Hoodies</a></li>
                            <li><a href="#">Children's Sale</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Home Products</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Electricals</a></li>
                            <li><a href="#">Kitchenware</a></li>
                            <li><a href="#">Furniture</a></li>
                            <li><a href="#">Bathroom</a></li>
                            <li><a href="#">Home Sale</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div>
                <ul class="login_links">
                    <li><a href="#">Login</a></li>
                    <li className="divider">|</li>
                    <li><a href="#">Register</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <a href="index.html" className="logo">
                Food Cafe
            </a>
            <nav>
                <ul className="nav-bar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header

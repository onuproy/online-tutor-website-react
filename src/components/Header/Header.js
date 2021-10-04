import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header className="header-full-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header-area">
                            <div className="logo">
                                <img src="https://coderitsolution.com/wp-content/uploads/2021/01/footer-logo.png" alt="logo" />
                            </div>
                            <nav className="menu">
                                <ul>
                                    <li>
                                    <NavLink to="/home">Home</NavLink>
                                    <NavLink to="/about">About</NavLink>
                                    <NavLink to="/services">Services</NavLink>
                                    <NavLink to="/contact">Conact</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
        
    );
};

export default Header;
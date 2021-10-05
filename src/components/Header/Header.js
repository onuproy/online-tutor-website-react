import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        color: "#009AF5",
    }
    return (
        <header className="header-full-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header-area">
                            <div className="logo">
                                <NavLink to="/home"><img src="https://coderitsolution.com/wp-content/uploads/2021/01/footer-logo.png" alt="logo" /></NavLink>
                            </div>
                            <nav className="menu">
                                <ul>
                                    <li>
                                    <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                                    <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                                    <NavLink activeStyle={activeStyle} to="/services">Services</NavLink>
                                    <NavLink activeStyle={activeStyle} to="/contact">Conact</NavLink>
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
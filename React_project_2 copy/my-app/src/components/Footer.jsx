import React from 'react';
import './Footer.css';
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { Route, Routes } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Connect us</h2>
                <div className="footer-section about">

                    <p>
                        Aa online shop for you best kind of
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> Phone: +95414567890</span>
                        <span><i className="fas fa-envelope"></i> Email: info@Gmail.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <p className="footer-bottom-text">© 2024 Maria Pechen. All rights reserved.</p>
        </footer>
    );
};

export default Footer;


/**/
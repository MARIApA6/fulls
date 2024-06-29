import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        vitae gravida turpis. Nulla euismod turpis quis velit lacinia, eget
                        vestibulum eros faucibus.
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> Phone: +1234567890</span>
                        <span><i className="fas fa-envelope"></i> Email: info@example.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <p className="footer-bottom-text">© 2024 Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

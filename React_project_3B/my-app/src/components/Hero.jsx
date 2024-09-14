import React from 'react'
import './Hero.css';

function Hero() {
    return (
        <>
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Product shop Main Page</h1>
                    <p>Explore new items, experience different cultures, and create memories that last a lifetime.</p>
                    <button className="hero-btn">Explore Now</button>
                </div>
                <div className="hero-image">
                    {/* Replace with your own image */}
                    <img src="https://via.placeholder.com/800x600" alt="Hero Image" />
                </div>
            </div>
        </>

    )
}

export default Hero;

import React from 'react';
import './assets/product_1.jpg';
import './Card.css';

function Card({ productImg, title, description }) {
    return (
        <div className="card">
            <img className="card-img" src={productImg} alt="Product Picture" />
            <h2 className="card_title" >{title}</h2>
            <p className="card-descrition">{description}</p>
        </div>
    )
}

export default Card

/*<p src={desciption}> Descritpion about the product </p>
*/
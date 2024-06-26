import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    return (
        <div className="ProductItem">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
    );
}

export default ProductItem;
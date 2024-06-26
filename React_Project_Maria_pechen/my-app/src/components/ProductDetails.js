import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails({ products }) {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="ProductDetails">
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;
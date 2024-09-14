import React, { useState } from 'react'
import { PRODUCTS } from '../../models/Products';

const ProductList = () => {

    const [products] = useState(PRODUCTS);

    const handleShowDetails = (product) => {
        alert(`${product.id} - ${product.name}`)
    }

    return (
        <div>
            <h3>Product List</h3>

            <table>

                <tbody>

                    {/*
                    

                    {products.map(product => (
                        < key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <>
                                {/* <button onClick={() => alert(`${product.id} - ${product.name}`)}>Show Details</button> */}
                    {/* <button onClick={() => handleShowDetails(product)}>Show Details</button>
                                */}

                </tbody>

            </table>
        </div>
    )
}

export default ProductList;
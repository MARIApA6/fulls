import React, { useState } from 'react'
import product from '../../../models/Products';

const ProductNewClassInstance = () => {

    const [product, setProduct] = useState(new product);

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setProduct(prevProduct => {
            return {
                ...prevProduct,
                [key]: value
            }
        });
    }

    const handleSubmit = (e) => {

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="id">ID</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="id"
                                    name="id"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">Name</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="price">Price</label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="quantity">Quantity</label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'right' }}>
                                <button>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default ProductNewClassInstance

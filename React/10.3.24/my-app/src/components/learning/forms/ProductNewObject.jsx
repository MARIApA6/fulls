import React, { useState } from 'react'

const ProductNewObject = () => {

    const [product, setProduct] = useState({

        name: "",
        price: 0,
        quantity: 0

    });

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setProduct({
            ...product,// ==> pName: pName: 'Table', price: 4, quantity: 20
            [key]: value // ==> pName: 'Book'
        });// ==> pName: 'Table', price: 4, quantity: 20, pName: 'Book' ==> price: 4, quantity: 20, pName: 'Book' 
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
                                <label htmlFor="pName">Name</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="pName"
                                    name="pName"
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
                                    type="text"
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
                                    type="text"
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

export default ProductNewObject

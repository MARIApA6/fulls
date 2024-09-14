import React, { useState } from 'react'

const ProductNewOneField = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        alert(name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="Product Name">Product Name</label>
                            </td>
                            <td><input
                                type="text"
                                id='product_name'
                                //  onChange={(event) => setName(event.target.value)}
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

export default ProductNewOneField

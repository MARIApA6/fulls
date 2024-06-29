
import React, { useState } from 'react';
import pages from './pages.css';


function SignUp() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Example: You can handle form submission logic here, like sending data to a server or validating inputs
        console.log('Form submitted:', formData);
        // Reset form fields after submission (optional)
        setFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <h1>SignUp</h1>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </>
    )
}


export default SignUp;
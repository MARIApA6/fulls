import React, { useState } from 'react';
import "./Login_SignUp.css";


const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        dob: '',
        phoneNumber: '',
        address: '',
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation and submission logic
        console.log('Form submitted:', formData);
        // Reset form fields after submission (optional)
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            fullName: '',
            dob: '',
            phoneNumber: '',
            address: '',
            agreeToTerms: false,
        });
    };

    return (

        <>
            <h1>Sign up Page</h1>
            <form onSubmit={handleSubmit} className='signup-container'>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="number" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <textarea id="text" name="address" value={formData.address} onChange={handleChange} />
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </>

    );
};


export default SignUpForm;
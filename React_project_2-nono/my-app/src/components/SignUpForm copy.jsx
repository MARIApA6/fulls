import React, { useState } from 'react';
import "./Login_SignUp.css";



const SignUpForm = ({ handleLogin }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(firstName, lastName, phoneNumber, password, email, city);
    };

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='signup-container'>
                    <div >
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div >
                        <label htmlFor="last Name">Last name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required />
                    </div>
                    <div >
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="numbr"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required />
                    </div>
                    <div >
                        <label htmlFor="Email">Email</label>
                        <input
                            type="email"
                            id="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div >
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <div >
                        <label htmlFor="City">City</label>
                        <input
                            type="text"
                            id="City"
                            value={password}
                            onChange={(e) => setCity(e.target.value)}
                            required />
                    </div>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </>

    );
};

export default SignUpForm;
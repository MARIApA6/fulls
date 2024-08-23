import React, { useState } from 'react';
import "./Login_SignUp.css";
import axios from 'axios';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/Login', {
                username,
                password,
            });
            console.log('Login success:', response.data);
        } catch (error) {
            console.error('Login error:', error);

        }
    };

    /*
    const LoginForm = ({ handleLogin }) => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            handleLogin(username, password);
        };
    */

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='login-container'>
                    <div >
                        <div >
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit">Login</button>
                    </div>
                </div>
            </form>
        </>

    );
};

export default LoginForm;
import React, { useState, useRef, useEffect, useContext } from 'react';
import "./Login_SignUp.css";
import axios from '../api/axios'
import AuthContext from '../Admin/AuthProvider';
//זה משהו שנוצר בבאק אנד צריך להאיתם לפרוייקט
//const LOGIN_URL = '/auth';


const LoginForm = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();

    const errRef = useRef();


    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrormsg] = useState('');
    const [success, setSuccess] = useState(false);// פה אפשר לשים ראוטין למעבר הדף הרצוי היוזר נכנס בהצלחה


    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrormsg('');
    }, [userName, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', {
                userName: 'Maria',
                password: '123'
            });


        } catch (error) {
            if (!error.response) {
                setErrormsg('No server response');
            } else if (errRef.response?.status === 400) {
                setErrormsg('Missing user name or password');
            } else if (error.response?.status === 401) {
                setErrormsg('Unauthorized')
            } else {
                setErrormsg('Login fail')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            <p ref={errRef} className={errorMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errorMsg}</p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='login-container'>
                    <div >
                        <div >
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e) => setUsername(e.target.value)}
                                value={userName}
                                required />
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
}


export default LoginForm;



/*

const response = await axios.post(LOGIN_URL, JSON.stringify({ userName, password }), {
headers: { 'Contect-type': 'appliction/json' },
withCredentials: true,

 //console.log(JSON.stringify(response?.data));

const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;//משהו שהוא בנה לפני זה לבדוק?
            setAuth({ userName, password, accessToken, roles });
            setUsername('');
            setPassword('');

*/
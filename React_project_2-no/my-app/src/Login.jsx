import React from 'react'
import { useHistory } from 'react-router-dom';
import LoginForm from '../../../React_project_2-nono/my-app/src/components/LoginForm';

const Login = () => {

    const history = useHistory();

    const handleLogin = (username, password) => {
        // Example: Validate credentials (normally you would call an API)
        if (username === 'admin' && password === 'adminpassword') {
            // Redirect to Admin Dashboard after successful login
            history.push('/admin');
        } else if (username === 'user' && password === 'userpassword') {
            // Redirect to User Dashboard after successful login
            history.push('/user');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm handleLogin={handleLogin} />
        </div>
    )
}

export default Login;

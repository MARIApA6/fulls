import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
    return (
        <div className='weapper'>
            <form>
                <h2>Login Form</h2>
                <div className='input_box'>
                    <input type="text" placeholder="Username"></input>
                </div>
                <div className='input_box'>
                    <input type="password" placeholder="Password"></input>
                </div>

            </form>

        </div>
    )
}

export default LoginForm;


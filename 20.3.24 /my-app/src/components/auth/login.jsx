import React from "react";

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password
            : '',
    });

    const [status, setStatus] = 

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //check if
        if (user.email === 'ma@gmail.com' && user.password === '123')
            alert('SUCESSE');
        else
            alert('FAIL');
    }


    return (
        <div>
            <form >
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='email'>Email</label>
                            </td>
                            <td>
                                <inp htmlFor='password'>password</inp>
                            </td>
                            <td>
                                <input type='password' id='password' onChange={handleChange}></input>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div>
                {status}
            </div>
        </div>
    )
}
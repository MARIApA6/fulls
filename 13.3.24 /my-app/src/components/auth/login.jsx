import React from "react";

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password
            : '',
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.valueX
        });
    }

    const handleSubmit = (e) => {
        e.preventDefalute
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
        </div>
    )
}
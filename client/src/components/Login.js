import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

const Login = (props) => {
    const [cred, setCred] = useState({username: '', password: ''});

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('', cred)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.history.push('/');
            })
    }
    const handleChange = e => {
        e.preventDefault();
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Log In</label>
                <input
                    type='text'
                    name='username'
                    value={cred.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={cred.password}
                    onChange={handleChange}
                />
                <p>Don't have an account? <a className="signup-prompt" onClick={()=> {props.history.push('/signup')}}>Sign Up</a></p>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;
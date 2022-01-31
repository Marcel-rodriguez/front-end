import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {

    const { push } = useHistory();
    const [ credentials, setCredentials ] = useState({
        username: "",
        password: ""
    })
    
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        //post authentication token to endpoint
    //     axios.post('', credentials)
    //         .then(resp => {
    //             console.log(resp);
    //             localStorage.setItem("token", resp.data.token)
    //             push("/dashboard")
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }

    console.log(credentials);

  return (
  <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder='username'
            id="username"
        />
        <input 
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder='password'
            id="password"
        />
        <button id="submit">Log in</button>
    </form>
  </div>);
}

export default Login;

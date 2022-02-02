import React, { useState, useContext} from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import {LoggedInContext} from '../contexts/LoggedInContext';
import "../styles/login.css";

export default function Login() {

    const { setIsLoggedIn } = useContext(LoggedInContext)

    const { push } = useHistory();
    const [ credentials, setCredentials ] = useState({
        username: "",
        password: ""
    })


    const [error, setError] = useState(false)
    
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        setError(false)
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://secret-family-recipes-8.herokuapp.com/api/auth/login', credentials)
        .then(resp => {
            localStorage.setItem('token', resp.data.token)
            localStorage.setItem('role', 'user')
            if(resp.data.token){
                push('/dashboard')
                setIsLoggedIn(true)
            }
        }).catch(err => {
            setError(true)
            console.log(err)
        })
    }

  return (
    
  <div className='loginContainer'>
    <div className='loginWrapper'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='formContainer'>
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
                <button className="loginButton" id="submit">Log in</button>
                {error && <p className='error-message'>Username or Password is incorrect!</p>}
                <p>Don't have an account? <Link to='/register'>Register Here</Link> </p>
            </div>
        </form>
        </div>
  </div>);
};
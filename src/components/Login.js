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
        axios.get('https://secret-family-recipes-8.herokuapp.com/api/users')
        .then(resp => {
            for(let i = 0; i < resp.data.length; i++){
                if(resp.data[i].username === credentials.username /*&& resp.data[i].password === credentials.password*/){
                    localStorage.setItem('username', resp.data[i].username)
                    localStorage.setItem('role', 'user')
                    setIsLoggedIn(true)
                    push('/dashboard')
                } else {
                    setError(true)
                }
            }
        }).catch(err => console.error(err))
    }

  return (
<<<<<<< HEAD
=======
    
>>>>>>> 43c74d6748650467e5f4c6784ec3ad6a6b9fb351
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
                {error && <p>Username or Password is incorrect!</p>}
                <p>Don't have an account? <Link to='/register'>Register Here</Link> </p>
            </div>
        </form>
    </div>
    
        <div>
            {error && <p>Username or Password is incorrect!</p>}
            <p>Don't have an account? <Link to='/register'>Register Here</Link> </p>
        </div>
<<<<<<< HEAD
    </div>)
=======
  </div>);
>>>>>>> 43c74d6748650467e5f4c6784ec3ad6a6b9fb351
};
import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const { push } = useHistory();
    const [ newUser, setNewUser ] = useState({
        username: "",
        password: ""
    })
    
    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        //post authentication token to endpoint
        await axios.post('https://secret-family-recipes-8.herokuapp.com/api/users/register', newUser)
        .then(resp => {
            console.log(resp)
            push('/login')
        }).catch(err => console.error(err))
    }

  return (
  <div>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleChange}
            placeholder='username'
            id="username"
        />
        <input 
            type="text"
            name="password"
            value={newUser.password}
            onChange={handleChange}
            placeholder='password'
            id="password"
        />
        <button id="submit">Register</button>
        <p>Already have an account? <Link to='/login'>Login Here</Link></p>
    </form>
  </div>);
};

export default Register;

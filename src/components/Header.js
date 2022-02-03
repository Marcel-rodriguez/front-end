import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../styles/header.css";
import {LoggedInContext} from '../contexts/LoggedInContext';

function Header() {
    const {isLoggedIn} = useContext(LoggedInContext)

  return (
    <nav>
        <div className='headerTitle'>
            <h1>Secret Family Recipes #8</h1>
        </div>
        <div className='links'>
            {!isLoggedIn && <Link className="loginLink" to='/login'>Login</Link>}
            {isLoggedIn && <Link className='dashboardLink' to='/dashboard'>Dashboard</Link>}
            {isLoggedIn && <Link className='loginLink' to='/recipeform'>Add Recipe</Link> }
            {isLoggedIn && <Link className='loginLink' to='/logout'>Logout</Link>}
        </div>
    </nav>);
}

export default Header;

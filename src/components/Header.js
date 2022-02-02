import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../styles/header.css";
import {LoggedInContext} from '../contexts/LoggedInContext';

function Header() {
    const {isLoggedIn} = useContext(LoggedInContext)

  return (
    <nav>
        <div className='headerTitle'>
            <h3>Grandma's Secret Recipes</h3>
        </div>
        <div className='links'>
            {!isLoggedIn && <Link className="loginLink" to='/login'>Login</Link>}
            {isLoggedIn && <Link className="logoutLink" to='/logout'>Logout</Link>}
            {isLoggedIn && <Link className="dashboardLink" to='/dashboard'>Dashboard</Link>}
        </div>
    </nav>);
}

export default Header;

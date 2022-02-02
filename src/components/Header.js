import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======

>>>>>>> 43c74d6748650467e5f4c6784ec3ad6a6b9fb351
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
<<<<<<< HEAD
            {!isLoggedIn && <Link className="loginLink" to='/login'>Login</Link>}
            {isLoggedIn && <Link className="logoutLink" to='/logout'>Logout</Link>}
            {isLoggedIn && <Link className="dashboardLink" to='/dashboard'>Dashboard</Link>}
=======
    
            {isLoggedIn && <Link className='loginLink' to='/logout'>Logout</Link>}
            {isLoggedIn && <Link className='dashboardLink' to='/dashboard'>Dashboard</Link>}
>>>>>>> 43c74d6748650467e5f4c6784ec3ad6a6b9fb351
        </div>
    </nav>);
}

export default Header;

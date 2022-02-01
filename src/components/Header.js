import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import "../styles/header.css";
=======
import {LoggedInContext} from '../contexts/LoggedInContext';
>>>>>>> 0e766f30d45c4f1e4a9707e1f61033100a3555e6

function Header() {
    const {isLoggedIn} = useContext(LoggedInContext)

  return (
    <nav>
        <div className='headerTitle'>
            <h3>Grandma's Secret Recipes</h3>
        </div>
        <div className='links'>
<<<<<<< HEAD
            <Link className='loginLink' to='/login'>Login</Link>
            <Link className='dashboardLink' to='/'>Dashboard</Link>
=======
            {isLoggedIn && <Link to='/logout'>Logout</Link>}
            {isLoggedIn && <Link to='/dashboard'>Dashboard</Link>}
>>>>>>> 0e766f30d45c4f1e4a9707e1f61033100a3555e6
        </div>
    </nav>);
}

export default Header;

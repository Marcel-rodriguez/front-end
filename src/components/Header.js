import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {LoggedInContext} from '../contexts/LoggedInContext';

function Header() {
    const {isLoggedIn} = useContext(LoggedInContext)

  return (
    <nav>
        <div className='headerTitle'>
            <h3>Grandma's Secret Recipes</h3>
        </div>
        <div className='links'>
            {isLoggedIn && <Link to='/logout'>Logout</Link>}
            {isLoggedIn && <Link to='/dashboard'>Dashboard</Link>}
        </div>
    </nav>);
}

export default Header;

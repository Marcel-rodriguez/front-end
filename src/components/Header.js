import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
        <div className='headerTitle'>
            <h3>Grandma's Secret Recipes</h3>
        </div>
        <div className='links'>
            <Link to='/login'>Login</Link>
            <Link to='/'>Dashboard</Link>
        </div>
    </nav>);
}

export default Header;

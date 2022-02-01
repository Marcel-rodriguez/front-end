import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/header.css";

function Header() {
  return (
    <nav>
        <div className='headerTitle'>
            <h3>Grandma's Secret Recipes</h3>
        </div>
        <div className='links'>
            <Link className='loginLink' to='/login'>Login</Link>
            <Link className='dashboardLink' to='/'>Dashboard</Link>
        </div>
    </nav>);
}

export default Header;

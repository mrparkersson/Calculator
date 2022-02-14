import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className='navbar-container'>
        <h1>Math Magicians</h1>
        <ul>
          <Link to='/home'>
            <li>Home</li>
          </Link>
          <Link to='/calculator'>
            <li>Calulator</li>
          </Link>
          <Link to='/quotes'>
            <li>Quote</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

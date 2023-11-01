import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to="/">
    <div className='header'>
        <h1>Geek City</h1>
        <h2>Tienda de posters y comics online</h2>
    </div>
    </Link>
  );
};

export default Header
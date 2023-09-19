import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';





function NavBar() {
  return (
    <nav className='NavBar'>
        <ul>
        <li>Home</li>
        <li>Categories</li>
        <li>About</li>
        </ul>
        <CartWidget />
    </nav>
  );
};

export default NavBar
import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'





function NavBar() {
  return (
    <nav className='NavBar'>
        <ul>
        <Link style={{ listStyle: "none" }} to="/">Home</Link>
        <Link style={{ listStyle: "none" }} to="/categories">Categories</Link>
        <Link style={{ listStyle: "none" }} to="/about">About</Link>
        <Link style={{ listStyle: "none" }} to="/comics">Comics</Link>
        </ul>
        <CartWidget />
    </nav>
  );
};

export default NavBar
import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'





function NavBar() {
  return (
    <nav className='NavBar'>
        <ul>
        <Link style={{ listStyle: "none" }} to="/">Home</Link>
        <Link style={{ listStyle: "none" }} to="/comics">Todos los Comics</Link>
        <Link style={{ listStyle: "none" }} to="/category/day">Top del dia</Link>
        <Link style={{ listStyle: "none" }} to="/category/week">Top semanal</Link>
        </ul>
        <CartWidget />
    </nav>
  );
};

export default NavBar
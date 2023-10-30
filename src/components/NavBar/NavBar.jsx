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
        <Link style={{ listStyle: "none" }} to="/top">Más votados</Link>
        </ul>
        <Link style={{ listStyle: "none "}}to="/cart"><CartWidget /></Link>
    </nav>
  );
};

export default NavBar
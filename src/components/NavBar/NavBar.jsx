import React from 'react'
import "./NavBar.css"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function NavBar() {
  return (
    <nav className='NavBar'>
        <ul>
        <li>Home</li>
        <li>Categories</li>
        <li>About</li>
        <li className='carrito'><ShoppingCartIcon fontSize='large'/>2</li>
        </ul>
    </nav>
  );
};

export default NavBar
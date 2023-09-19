import React from 'react'
import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
  return (
    <div>
        <ul>
        <li className='carrito'><ShoppingCartIcon fontSize='large'/>2</li>
        </ul>
    </div>
  );
};

export default CartWidget
import React from 'react'
import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../CartContext';

function CartWidget() {
  const { cartItems } = useCart(); 

  return (
    <div>
        <ul>
            <li className='carrito'>
                <ShoppingCartIcon fontSize='large'/>
                {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </li>
        </ul>
    </div>
  );
};

export default CartWidget;

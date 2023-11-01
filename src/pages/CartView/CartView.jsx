import React, { useEffect, useState } from 'react';
import { useCart } from '../../CartContext';
import "./CartView.css";

const CartView = () => {
  const { cartItems, removeFromCart} = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce((acumular, item) => {
      return acumular + item.prices.reduce((acumularPrecio, price) => {
        return acumularPrecio + price.price;
      }, 0);
    }, 0);
    setTotal(newTotal);
  }, [cartItems]);

  return (
    <div className='seccionCarrito'>
      <h1>Carrito:</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title}
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.title} width={"200px"} />
            {item.prices.map((price, priceIndex) => (
              <li key={priceIndex}>Precio: ${price.price}</li>
            ))}
            <button onClick={() => removeFromCart(item)}>Eliminar del carrito</button>
          </li>
        ))}
      </ul>
      <span>Total: ${total.toFixed(2)}</span>
      <button className='compra'>Finalizar Compra</button>
    </div>
  );
}

export default CartView;

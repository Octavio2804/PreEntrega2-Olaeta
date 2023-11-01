import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext';
import Swal from 'sweetalert2';
import "./CartView.css";

const CartView = () => {
  const { cartItems, removeFromCart } = useCart();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const newTotal = cartItems.reduce((acumular, item) => {
      return acumular + item.prices.reduce((acumularPrecio, price) => {
        return acumularPrecio + price.price;
      }, 0);
    }, 0);
    setTotal(newTotal);
  }, [cartItems]);

  const alertAndRedirect = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Compra realizada! Volviendo al inicio',
      showConfirmButton: false,
      timer: 2500
    });

    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

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
      {cartItems.length > 0 ? (
        <button className='compra' onClick={alertAndRedirect}>Finalizar Compra</button>
      ) : null}
    </div>
  );
}

export default CartView;
import React, { useEffect, useState } from "react";
import "../Registration/Cart.css";
const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart-box" key={item.id}>
          <div className="cart_img">
            <img className="imgwidth" src={item.img} alt="" />
            <p className="name">{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div className="Price">
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
            <div className="rupee">
              <span>&#8377; {item.price}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <p> Total price: Rs {price}</p>
      </div>
    </article>
  );
};
export default Cart;

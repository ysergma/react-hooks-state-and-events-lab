import React, { useState } from "react";

function Item({ name, category }) {
  const[cart,setCart]=useState("in-cart")
  const [btn,setBtn]=useState('Remove From Cart')
  const Cart = cart==="" ? "in-cart" : ""
  const Btn = btn ==="Remove From Cart" ?  "Add to Cart" :"Remove From Cart"
  return (
    <li className={Cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=>(setCart(Cart),setBtn(Btn))} >{Btn}</button>
    </li>
  );
}

export default Item;

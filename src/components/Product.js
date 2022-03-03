import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToCard } from "../store/cartSlice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
const dispatch = useDispatch()
const cartItems = useSelector(state=>state.cart.itemsList)

console.log(cartItems)
  const addToCart_ = ()=>{
    dispatch(addToCard({
      name,
      id,
      price,
    }))
 }
 
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart_}>Add to cart</button>
    </div>
  );
};

export default Product;

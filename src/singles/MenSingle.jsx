import React from "react";
import { menData } from "../stores/data/men";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { useCart } from "../stores/context/CartContext";

const MenSingle = () => {
  //useParams --> used to get end point --> id
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const product = menData.find((item) => item.id === id);
  return (
    <>
      <Navbar />
      <div className="ind-page">
        <div className="ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="ind-details">
          <div className="ind-model">
            <h3>{product.brand}</h3>
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc">
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default MenSingle;

import React from "react";
import "../css/product-card.css";
const ProductCard = (props) => {
  return (
    <div className="product-card-container">
      <img src={props.img} alt="product" />
      <p className="product-title">{props.title}</p>
      <p className="product-price">{props.price}</p>
    </div>
  );
};

export default ProductCard;

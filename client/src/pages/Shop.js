import React, { useState } from "react";
import "../css/shop.css";
import "boxicons";
import { shopdata } from "../shop-data/shopdata";
import ProductCard from "../UI/ProductCard";

const Shop = () => {
  const [img, setImg] = useState(1);

  const handleImages = () => {
    if (img === 1) {
      setImg(0);
    } else if (img === 0) {
      setImg(1);
    }
  };

  const shopImages = [
    "https://www.bvbonlineshop.com/media/image/2b/b9/0f/Int-Shop-Hauptbuehne-neu.jpg",
    "https://www.bvbonlineshop.com/media/image/74/g0/b1/Int-Shop-Hauptbuehne-1920x650px-PUMA-SALE-EN.jpg",
  ];
  return (
    <div className="shop-container-wrapper" id="shop">
      <div className="shop-container">
        <div className="shop-images">
          <img src={shopImages[img]} alt="news-background" />
          <button className="arrow-left" onClick={handleImages}>
            <i class="bx bx-chevron-left"></i>
          </button>
          <button className="arrow-right" onClick={handleImages}>
            <i class="bx bx-chevron-right"></i>
          </button>
        </div>
        <div className="shop-products-container">
          {shopdata.map((item) => (
            <a href="https://shop.bvb.de/" target="_blank">
              <ProductCard
                img={item.img}
                title={item.title}
                price={`${item.price}$`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

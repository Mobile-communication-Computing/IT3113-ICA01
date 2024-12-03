import "../assets/CSS/layout.css";
import { useState } from "react";
import { flowers } from "./FlowerDB";
import Product from "./Product";

export default function Products() {
  return (
    <>
      <div className="item1">
        <h1>Flower Shop</h1>
      </div>
      <div className="item2">
        <h4 className="card-title">Buy flowers</h4>
        <div className="grid-container">
          {
            flowers.map((flower, index) => {
              return <Product />;
            })
            //product
          }
        </div>
      </div>
      <div className="item3">
        {
          //cart
        }
      </div>
    </>
  );
}
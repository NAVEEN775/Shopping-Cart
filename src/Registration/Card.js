import React from "react";
import "../Registration/Card.css";
import { useState } from "react";
import data from "./Data";

export default function Card({ item, cart, setCart, handleonClick }) {
  // const{id,title,author,price,img}=item;
  const [IsClicked, setIsClicked] = useState(false);
  function HandleClick() {
    setIsClicked(true);
  }
  const splitvalue = data.slice(10);
  return (
    <div>
      <div className="products">
        {data.map((item) => (
          <div className="cards">
            <div className="product-image">
              <img src={item.img} alt="Images" />
            </div>
            <div className="details">
              <p>{item.title}</p>
              {/* <p>{author}</p> */}
              <p>Price:{item.price}</p>
              <button
                onClick={() => handleonClick(item)}
                className="product-button"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        {!IsClicked && (
          <button
            onClick={HandleClick}
            className="effect"
            style={{
              height: "30px",
              width: "130px",
              borderRadius: "10px",
              marginTop: "-3px",
              marginLeft: "550px",
              marginBottom: "50px",
            }}
          >
            load more
          </button>
        )}
        {IsClicked && (
          <div className="products">
            {splitvalue.map((item) => (
              <div className="cards">
                <div className="product-image">
                  <img src={item.img} alt="Images" />
                </div>
                <div className="details">
                  <p>{item.title}</p>
                  {/* <p>{author}</p> */}
                  <p>Price:{item.price}</p>
                  <button
                    onClick={() => handleonClick(item)}
                    className="product-button"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

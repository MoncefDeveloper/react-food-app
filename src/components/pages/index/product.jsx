import React from "react";
import { PiFlameThin } from "react-icons/pi";
import foodImg from "../../../assets/images/LemonPepperChicken.webp";
import { Link } from "react-router-dom";

export const Product = ({
  id,
  name,
  category,
  area,
  image,
  ingredient1,
  ingredient2,
  ingredient3,
  measure1,
  measure2,
  measure3,
}) => {
  return (
    <Link to={`/details/${id}`} className="product-box">
      <div className="img">
        <img src={image} alt="food" />
      </div>
      <div className="details">
        <div className="detail">SHAPE UP</div>
        <div className="detail orange">LOW CAL</div>
      </div>
      <div className="title">{name}</div>
      <div className="categories">
        {[0, 1, 2].map((index) => {
          return (
            <div className="category-box" key={index}>
              <div className="icon">
                <PiFlameThin />
              </div>
              <div className="title">315 GRAMS</div>
            </div>
          );
        })}
      </div>
      <div className="ingredients">
        <div className="ingredient">
          {measure1} {ingredient1}
        </div>
        <div className="ingredient orange">
          {measure2} {ingredient2}
        </div>
        <div className="ingredient">
          {measure3} {ingredient3}
        </div>
      </div>
      <div className="add-to-cart-btn-and-price">
        <div className="title">Add to cart</div>
        <div className="price">$9.95</div>
      </div>
    </Link>
  );
};

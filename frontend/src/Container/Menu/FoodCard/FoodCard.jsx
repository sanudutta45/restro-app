import React from "react";

//scss
import FoodCardStyle from "./FoodCard.module.scss";

const FoodCard = ({ dish }) => {
  return (
    <div className={`${FoodCardStyle.wrapper} d-flex`}>
      <div className={FoodCardStyle.imageContainer}>
        <img src="/images/pic1.jpg" alt="food" />
      </div>
      <div className={`${FoodCardStyle.content} p-3 flex-grow-1`}>
        <h3>{dish && dish.name}</h3>
        <p>{dish && dish.desc}</p>
        <div>{`Rs. ${dish.price} / ${dish.per}`}</div>
      </div>
    </div>
  );
};

export default FoodCard;

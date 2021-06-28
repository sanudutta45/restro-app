import React from "react";

//scss
import CategoryCardStyle from "./CategoryCard.module.scss";

const CategoryCard = ({ name, active, onClick }) => {
  return (
    <div
      className={`${CategoryCardStyle.wrapper} ${active && CategoryCardStyle.active}`}
      onClick={onClick}
    >
      {name && name}
    </div>
  );
};

export default CategoryCard;

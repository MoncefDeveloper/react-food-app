import React, { useEffect, useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

export const Details = ({
  idMeal,
  strArea,
  strCategory,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strMeal,
  strMealThumb,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
  description,
}) => {
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
  const myIngredients = [
    { ingredient: strIngredient1, amount: strMeasure1 },
    { ingredient: strIngredient2, amount: strMeasure2 },
    { ingredient: strIngredient3, amount: strMeasure3 },
    { ingredient: strIngredient4, amount: strMeasure4 },
    { ingredient: strIngredient5, amount: strMeasure5 },
  ];

  useEffect(() => {
    document.title = strMeal;
  }, [strMeal]);

  return (
    <section className="meal-details">
      <div className="img">
        <img src={strMealThumb} alt="meal" />
      </div>
      <div className="details">
        <div className="title">{strMeal}</div>
        <div className="descrption">
          {description?.slice(0, 600)}
          {description?.length > 600 && "..."}
        </div>
        <div className="price">
          {strCategory} | {strArea}
        </div>
        <div className="shipping">
          <div className="icon">
            <LiaShippingFastSolid />
          </div>
          <div className="text">
            Fast delivery to over 3,000 suburbs Australia-wide for $14.99, or
            free if you subscribe.
          </div>
        </div>
        <div className="ingredients">
          <div
            className="head"
            onClick={() => setIsIngredientsOpen((prev) => !prev)}
          >
            <div className="title">Ingredients</div>
            <div className="icon">
              <IoIosArrowDown />
            </div>
          </div>
          {isIngredientsOpen &&
            myIngredients.map(({ ingredient, amount }, index) => {
              return (
                <div className="ingredient-box" key={index}>
                  <div className="ingredient">{ingredient}</div>
                  <div className="amount">{amount}</div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

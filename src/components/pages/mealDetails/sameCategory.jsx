import React, { useEffect, useState } from "react";
import { Product } from "../index/product";
import axios from "axios";

export const SameCategory = ({ category }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = new FormData();
      data.append("api_password", process.env.REACT_APP_API_PASSWORD);
      data.append("category", category);

      try {
        axios
          .post(process.env.REACT_APP_BASE_API_URL + "mealsByCategory", data)
          .then((data) => {
            if (data.data.status) {
              setMeals(data.data.meals);
            } else {
              // add trait
            }
            // console.log(data.data.meals);
          });
      } catch (e) {
        console.log("Error");
      }
    };

    fetchData();
  }, [category]);

  return (
    <section className="more-meals">
      <div className="more-meals-title">Same Category</div>
      <div className="products">
        {meals.slice(0, 3).map((meal) => {
          return <Product key={meal.id} {...meal} />;
        })}
      </div>
    </section>
  );
};

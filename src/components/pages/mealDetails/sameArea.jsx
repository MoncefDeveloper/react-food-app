import React, { useEffect, useState } from "react";
import { Product } from "../index/product";
import axios from "axios";

export const SameArea = ({ area }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = new FormData();
      data.append("api_password", process.env.REACT_APP_API_PASSWORD);
      data.append("area", area);

      try {
        axios
          .post(process.env.REACT_APP_BASE_API_URL + "mealsByArea", data)
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
  }, [area]);

  return (
    <section className="more-meals">
      <div className="more-meals-title">Same Area</div>
      <div className="products">
        {meals.slice(0, 3).map((meal) => {
          return <Product key={meal.id} {...meal} />;
        })}
      </div>
    </section>
  );
};

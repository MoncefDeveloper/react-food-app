import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/meals-deatils.css";
import { Details } from "./details";
import { SameCategory } from "./sameCategory";
import { SameArea } from "./sameArea";
import axios from "axios";
import { Loader } from "../index/loader";

export const MealDetails = () => {
  const { id } = useParams();
  const [mealDetails, setMealDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      const data = new FormData();
      data.append("api_password", process.env.REACT_APP_API_PASSWORD);
      data.append("id", id);

      try {
        axios
          .post(process.env.REACT_APP_BASE_API_URL + "mealById", data)
          .then((data) => {
            setIsLoading(false);
            if (data.data.status) {
              setMealDetails(data.data.meal);
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
  }, [id]);

  return (
    <main className="meail-details-page">
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        mealDetails && (
          <>
            <Details {...mealDetails} />
            <SameCategory category={mealDetails.strCategory} />
            <SameArea area={mealDetails.strArea} />
          </>
        )
      )}
    </main>
  );
};

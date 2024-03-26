"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useRef, useState } from "react";
export const ContextProvider = createContext();

export function HomeContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const isMountedRef = useRef(false);

  const [category, setCategory] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [area, setArea] = useState("");
  const [myApiLink, setMyApiLink] = useState("randomMeals");

  useEffect(() => {
    if (category || ingredient || area) {
      setMyApiLink("mealsByAreaAndCategoryAndIngredient");
    } else {
      setMyApiLink("randomMeals");
    }
    setIsLoading(true);
    isMountedRef.current = false;
  }, [category, ingredient, area]);

  useEffect(() => {
    const fetchData = () => {
      const data = new FormData();
      data.append("api_password", process.env.REACT_APP_API_PASSWORD);
      data.append("category", category);
      data.append("ingredient", ingredient);
      data.append("area", area);

      try {
        axios
          .post(process.env.REACT_APP_BASE_API_URL + myApiLink, data)
          .then((data) => {
            setIsLoading(false);
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

    if (!isMountedRef.current) {
      isMountedRef.current = true;
      fetchData();
      return undefined;
    }
  }, [isLoading]);

  return (
    <ContextProvider.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        meals,
        isLoading,
        category,
        ingredient,
        area,
        setCategory,
        setIngredient,
        setArea,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export const useHomeContext = () => useContext(ContextProvider);

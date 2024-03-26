import React from "react";
import { MdOutlineBreakfastDining } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { LuBeef } from "react-icons/lu";
import { TbArrowsRandom } from "react-icons/tb";
import { GiChicken } from "react-icons/gi";
import { GiGoat } from "react-icons/gi";
import { IoFishSharp } from "react-icons/io5";
import { LuVegan } from "react-icons/lu";
import { MdOutlineDinnerDining } from "react-icons/md";
import { useHomeContext } from "../../../context/homeContext";

export const Categories = () => {
  const { category, setCategory, setIngredient, setArea, ingredient, area } =
    useHomeContext();

  const collection1 = [
    { icon: <MdOutlineBreakfastDining />, title: "Breakfast" },
    { icon: <LuDessert />, title: "Dessert" },
    { icon: <MdOutlineDinnerDining />, title: "Pasta" },
    { icon: <LuBeef />, title: "Beef" },
  ];
  const collection2 = [
    { icon: <GiChicken />, title: "chicken" },
    { icon: <GiGoat />, title: "Goat" },
    { icon: <IoFishSharp />, title: "Seafood" },
    { icon: <LuVegan />, title: "Vegan" },
  ];

  return (
    <section className="categories">
      <div className="row">
        <div
          className={`category-box ${
            category === "" && ingredient === "" && area === "" && "active"
          }`}
          onClick={() => {
            setCategory("");
            setIngredient("");
            setArea("");
          }}
        >
          <div className="icon">
            <TbArrowsRandom />
          </div>
          <div className="title">Random</div>
        </div>
      </div>
      <div className="row">
        {[...collection1, ...collection2].map(({ icon, title }, index) => {
          return (
            <div
              className={`category-box ${title === category && "active"}`}
              key={index}
              onClick={() => setCategory(title === category ? "" : title)}
            >
              <div className="icon">{icon}</div>
              <div className="title">{title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

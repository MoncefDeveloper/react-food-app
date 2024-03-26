import React, { useRef, useState } from "react";

import { GiSettingsKnobs } from "react-icons/gi";
import { CgSortAz } from "react-icons/cg";
import { Product } from "./product";
import { MdCancel } from "react-icons/md";

import { GiFrance } from "react-icons/gi";
import { SiAircanada } from "react-icons/si";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiEgyptianSphinx } from "react-icons/gi";

import { TbEggs } from "react-icons/tb";
import { TbBread } from "react-icons/tb";
import { LuMilk } from "react-icons/lu";
import { GiOlive } from "react-icons/gi";

import { Loader } from "./loader";
import { useHomeContext } from "../../../context/homeContext";

const flags = [
  { icon: <GiFrance />, title: "French" },
  { icon: <SiAircanada />, title: "Canadian" },
  { icon: <LiaFlagUsaSolid />, title: "American" },
  { icon: <GiEgyptianSphinx />, title: "Egyptian" },
];

const ingredients = [
  { icon: <TbEggs />, title: "Eggs" },
  { icon: <TbBread />, title: "Bread" },
  { icon: <LuMilk />, title: "Milk" },
  { icon: <GiOlive />, title: "olive oil" },
];

export const Products = () => {
  const { meals, isLoading, setIngredient, setArea, ingredient, area } =
    useHomeContext();
  const [isSortOptionsOpen, setIsSortOptionsOpen] = useState(false);
  const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);

  // const [sortOption, setSortOption] = useState("Most Recommended");

  return (
    <section className="Products">
      <div className="filter-and-sort">
        <div
          className="filter-btn"
          onClick={() => setIsFilterOptionsOpen((prev) => !prev)}
        >
          <div className="icon">
            <GiSettingsKnobs />
          </div>
          <h1 className="title">More filters</h1>
        </div>
        <div
          className="sort-btn"
          onClick={() => setIsSortOptionsOpen((prev) => !prev)}
        >
          <h1 className="title">Sort by: Most Recommended</h1>
          <div className="icon">
            <CgSortAz />
          </div>
        </div>

        {isFilterOptionsOpen && (
          <div className="More-filters">
            <div
              className="cancel-icon"
              onClick={() => setIsFilterOptionsOpen(false)}
            >
              <MdCancel />
            </div>
            <div className="title">ALLERGENS</div>
            <div className="categories">
              {ingredients.map(({ icon, title }, index) => {
                return (
                  <div
                    className={`category-box ${
                      title === ingredient && "active"
                    }`}
                    key={index}
                    onClick={() =>
                      setIngredient(title === ingredient ? "" : title)
                    }
                  >
                    <div className="icon">{icon}</div>
                    <div className="title">{title}</div>
                  </div>
                );
              })}
            </div>
            <div className="categories">
              {flags.map(({ icon, title }, index) => {
                return (
                  <div
                    className={`category-box ${title === area && "active"}`}
                    key={index}
                    onClick={() => setArea(title === area ? "" : title)}
                  >
                    <div className="icon">{icon}</div>
                    <div className="title">{title}</div>
                  </div>
                );
              })}
            </div>

            <div className="notice">
              <b>Allergens: </b>Our meals are made in a kitchen that also
              handles other allergens, and cross-contamination may occur.
            </div>
          </div>
        )}

        {isSortOptionsOpen && (
          <div className="sort-list">
            <div
              className="cancel-icon"
              onClick={() => setIsSortOptionsOpen(false)}
            >
              <MdCancel />
            </div>
            {[
              "Most Recommended",
              "Most Recent",
              "Most Popular",
              "Alphabetical (A-Z)",
            ].map((name, index) => {
              return <MySortBox name={name} key={index} />;
            })}
          </div>
        )}
      </div>
      <div className="products">
        {isLoading ? (
          <div className="loader">
            <Loader />
          </div>
        ) : (
          meals.map((meal) => {
            return <Product key={meal.id} {...meal} />;
          })
        )}
      </div>
    </section>
  );
};

export const MySortBox = ({ name }) => {
  let myInput = useRef(null);

  return (
    <div
      className="sort-box"
      onClick={(e) => {
        if (e.target.name !== "sort") {
          myInput.checked = !myInput.checked;
        }
      }}
    >
      <input type="radio" name="sort" ref={(e) => (myInput = e)} />
      <div className="title">{name}</div>
    </div>
  );
};

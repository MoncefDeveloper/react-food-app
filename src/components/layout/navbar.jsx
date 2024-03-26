import React, { useEffect, useState } from "react";
import "../../styles/navbar.css";
import logo from "../../assets/images/logo.png";
import { FiSearch } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [meals, setMeals] = useState([]);
  const location = useLocation();
  const { pathname } = location;

  const fetchData = (searchWord) => {
    const data = new FormData();
    data.append("api_password", process.env.REACT_APP_API_PASSWORD);
    data.append("name", searchWord);

    try {
      axios
        .post(process.env.REACT_APP_BASE_API_URL + "mealsByName", data)
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
    if (searchWord === "") {
      setMeals([]);
      return;
    }
  };

  useEffect(() => {
    setIsSearchOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setMeals([]);
  }, [isSearchOpen]);

  return (
    <nav className="my-Navbar">
      <div className="bar">
        <NavLink className="logo" to="/">
          <img src={logo} alt="website_logo" />
        </NavLink>
        <div className="links">
          <NavLink to="/" className="link origin">
            Our Menu
          </NavLink>
          <NavLink to={"/contact"} className="link">
            Contact Us
          </NavLink>
        </div>
        <div className="search-icon" onClick={() => setIsSearchOpen(true)}>
          <FiSearch />
        </div>
      </div>
      {isSearchOpen && (
        <div className="navbar-Search">
          <div className="out-icon" onClick={() => setIsSearchOpen(false)}>
            <ImCancelCircle />
          </div>
          <div className="title">Search here</div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Search for a meal"
              onChange={(e) => fetchData(e.target.value)}
            />
            <div className="search-btn">Search</div>
            <div className={`products ${meals.length > 0 && "products-open"}`}>
              {meals.map((meal) => {
                const { id, name, area, category, image } = meal;
                return (
                  <Link to={"/details/" + id} className="product" key={id}>
                    <div className="img">
                      <img src={image} alt="meal" />
                    </div>
                    <div className="text">
                      <div className="title">{name}</div>
                      <div className="description">
                        {area} | {category}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

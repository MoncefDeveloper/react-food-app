import React from "react";
import { Header } from "./header";
import { Categories } from "./categories";
import { Products } from "./products";
import "../../../styles/home.css";

export const Index = () => {
  return (
    <div className="home-page">
      <Header />
      <Categories />
      <Products />
    </div>
  );
};

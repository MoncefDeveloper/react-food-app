import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import { Index } from "./components/pages/index";
import { MealDetails } from "./components/pages/mealDetails";
import { Contact } from "./components/pages/contact";
import { HomeContextProvider } from "./context/homeContext";
// import { About } from "./components/pages/about";
// import { Menu } from "./components/pages/menu";
// import { Contact } from "./components/pages/contact";

function App() {
  return (
    <main className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomeContextProvider>
                <Index />
              </HomeContextProvider>
            }
          />
          <Route exact path="/details/:id" element={<MealDetails />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/about" element={About} /> */}
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;

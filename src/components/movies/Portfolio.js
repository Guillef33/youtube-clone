import React, { useState } from "react";
import MovieList from "./MovieList";
import Categories from "./Categories";
import items from "./projects.js";

import './portfolio.css';

//Get all the value of the cateogies prop
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const allTechnologies = ["all", ...new Set(items.map((item) => item.technology))];

// console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [technology, setTechnology] = useState(allTechnologies);


  const filterItems = (technology) => {
    if (technology === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.technology === technology);
    setMenuItems(newItems);
  };

  return (
    <>
      <section className="portfolio-section">
        <Categories technology={technology} filterItems={filterItems} />
        <MovieList items={menuItems} />
      </section>
    </>
  );
}

export default App;

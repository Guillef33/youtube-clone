import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Categories from "./Categories";
import Movie from "./Movie";
import items from "./projects.js";

import './portfolio.css'

  //Get all the value of the cateogies prop

  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  const allTechnologies = [
    "all",
    ...new Set(items.map((item) => item.technology)),
  ];


const MovieList = ( ) => {

  const [movieItems, setMovieItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [technology, setTechnology] = useState(allTechnologies);

  const filterItems = (technology) => {
    if (technology === "all") {
      setMovieItems(items);
      return;
    }
    const newItems = items.filter((item) => item.technology === technology);
    setMovieItems(newItems);
  };

  return (
    <div className="movielist-section">
      
      <Categories technology={technology} filterItems={filterItems} />

      <section className="section-center">
        {items.map((project) => (
          <Movie
            img={project.img}
            title={project.title}
            technology={project.technology}
            id={project.id}
            job={project.job}
            url={project.url}
            category={project.category}
            key={project.id}
            description={project.description}
            isNovedad={project.isNovedad}
          />
        ))}
      </section>
    </div>
  );
};

export default MovieList;

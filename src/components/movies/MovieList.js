import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Movie from "./Movie";

const MovieList = ({ items }) => {
  

  return (
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
  );
};

export default MovieList;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useParams } from "react-router-dom";
import movies from "./Categories";


const MovieSingle = (props) => {
  const { img, title, url, id, category, description, technology } = props; // objet destructuring the properties

   let { idUrl } = useParams();

   console.log(movies);
   let requestedMovies;

   movies.forEach((movie) => {
     if (movie.id === idUrl) {
       requestedMovies = movie;
     }
   });
//   const destino = `/movies/${id}`;

  return (
    <article key={id} className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <a href={url} className="item-text">
            <h4>{title}</h4>{" "}
          </a>
          <h4 className="price">{technology}</h4>
        </header>

        <p className="portfolio-description">{description}</p>
        {/* <NavLink to={destino}>
          <button>Ver mas</button>
        </NavLink> */}
      </div>
    </article>
  );
};

export default MovieSingle;

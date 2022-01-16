import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const Movie = (props) => {
  const { img, title, url, id, category, description, technology, isNovedad } =
    props; // objet destructuring the properties

  const destino = `/movies/${id}`;

  return (
    <article key={id} className="menu-item">
      <img src={img} alt={title} className={isNovedad ? "border" : "photo"} />
      <div className="item-info">
        <header>
          <picture>
            <img src={img} alt={title} className="avatar" />
          </picture>
          <div className="video-data">
            <a href={url} className="item-text">
              <h4>{title}</h4>
              <p className="portfolio-description">{description}</p>
              <div className="profile-data">
                <p>{technology}</p>
                <p>{category}</p>
              </div>
            </a>
          </div>
          {/* <h4 className="price">{technology}</h4> */}
        </header>

        <NavLink to={destino}>
          <button>Ver mas</button>
        </NavLink>
      </div>
    </article>
  );
};

export default Movie;
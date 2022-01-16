import React, { useState} from 'react'
import Logo from "../components/header/Logo";
import Hamburger from "../components/header/SideBarHamburger";
import SearchBar from "../components/header/SearchBar";
import Profile from "../components/header/Profile";

import Body from "../components/body/Body";
import Portfolio from "../components/movies/Portfolio";
import projects from "../components/movies/projects";
import './Home.css'

const Home = () => {

    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = React.useState(projects);

    // iniciamos con los todos desde 0
    let searchedMovies = [];

    // si no hay nada escrito, imprime la lista original
    if (!searchValue.length >= 1) {
    searchedMovies = movies;
    } else {
    searchedMovies = movies.filter((movie) => {
        const todoText = movie.title.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className='menu-logo-section'>
            <Hamburger />
            <Logo />
          </div>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <Profile />
        </header>
        <section>
          <Body />
        </section>
      </div>
    );
}

export default Home;
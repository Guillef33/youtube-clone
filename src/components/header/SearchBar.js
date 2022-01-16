import React from "react";
import "./SearchBar.css";

import { FaSearch } from "react-icons/fa";


function SearchBar({ searchValue, setSearchValue }) {
  // const [searchValue, setSearchValue] = React.useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="searchbar-wrapper">
      <input
        className="SearchBar"
        onChange={onSearchValueChange}
        placeholder="Buscar"
        value={searchValue}
      />
      <button>
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;

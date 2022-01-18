import React from "react";
import "./SearchBar.css";
import { Autocomplete, TextField } from "@mui/material";
// import SearchIcon from "@mui/icons-material";
// import Data from '../../movies/projects';

import { FaSearch } from "react-icons/fa";

function SearchBar({ searchValue, setSearchValue, data, placeholder }) {
  // const [searchValue, setSearchValue] = React.useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="searchbar-wrapper">
      <Autocomplete
        id="combo-box-demo"
        options={data}
        getOptionLabel={(option) => option.title}
        className="SearchBar"
        renderInput={(params) => (
          <TextField
            {...params}
            label="limitTags"
            placeholder={placeholder}
            autoFocus="true"
          />
        )}
      ></Autocomplete>
      {/* <button>
        <FaSearch />
      </button> */}
      {/* <SearchIcon /> */}

      {/* <input
        className="SearchBar"
        onChange={onSearchValueChange}
        placeholder="Buscar"
        value={searchValue}
      />
*/}
    </div>
  );
}

export default SearchBar;

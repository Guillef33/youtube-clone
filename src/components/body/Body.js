import { MenuList } from '@mui/material';
import React from 'react';
import MovieList from "../movies/MovieList";
import SideBar from "../sidebar/Sidebar";

const Body = ({ isOpen, setOpen }) => {
  return (
    <div className="body-container">
      <SideBar isOpen={isOpen} setOpen={setOpen} />
      <MovieList />
    </div>
  );
};
export default Body;

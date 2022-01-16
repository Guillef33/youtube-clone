import React from 'react';

import './Body.css'

import Portfolio from '../movies/Portfolio'
import SideBar from "../sidebar/Sidebar";

const Body = ({ isOpen, setOpen }) => {
  return (
    <div className="body-container">
      <SideBar isOpen={isOpen} setOpen={setOpen} />
      <Portfolio />
    </div>
  );
};
export default Body;

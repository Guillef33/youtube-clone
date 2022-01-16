import React from "react";
import './Sidebar.css'
import '../header/SideBarHamburger.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const SideBar = ( {isOpen, setOpen} ) => {
  return (
    // <div className={`panel ${isOpen ? "abierto" : "close"}`}>
    <div className="sidebar-container">
      <ul>
        <li>
          <NavLink to={'/hola'}>Hola</NavLink>
        </li>
        <li>Favoritos</li>
        <li>Que mas</li>
        <li>Algo</li>
      </ul>
    </div>
  );
};

export default SideBar;

import React, { useState } from "react";
// import "./navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import './SideBarHamburger.css'
// import SideBar from "../sidebar/Sidebar";
// import Body from '../body/Body'
// import Portfolio from '../movies/Portfolio'

// import { StyledNavLink } from "../StyledNavLink";

  const Panel = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="hamb-container">
      <button
        onClick={() => setOpen(!isOpen)}
        className={`hamburger-button ${isOpen ? "open" : "close"}`}
      />

      {/* <SideBar isOpen={isOpen} setOpen={setOpen} /> */}
    </div>
  );
};
export default Panel;

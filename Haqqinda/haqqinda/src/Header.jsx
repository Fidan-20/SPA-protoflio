import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul >
        <li>
        <NavLink activebutton='active' to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activebutton='active' to="/haqqinda">Haqqinda</NavLink>
        </li>
        <li>
          <NavLink activebutton='active' to= "/work" >Is numuneleri</NavLink>
        </li>
        
        <li>
          <NavLink activebutton='active' to="/contact">CONTACTS</NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.scss";



const Navigation = () => {

  return (
    <ul className="Nav-List">
      <li className="Nav-Item">
        <NavLink to="/user-list">User List</NavLink>
      </li>
      <li className="Nav-Item">
        <NavLink to="/registration">Registration</NavLink>
      </li>
      <li className="Nav-Item">
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
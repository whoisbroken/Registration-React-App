import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/user-list">User List</NavLink>
      </li>
      <li>
        <NavLink to="/registration">Registration</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
import React from 'react';
import "./Navigation.scss";
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Navigation = () => {

  return (
    <ul className="Nav-List"> 
      <Button variant="outlined" color="primary" className="Nav-Item">
        <NavLink to="/user-list">User List</NavLink>
      </Button>
      <Button variant="outlined" color="primary" className="Nav-Item">
        <NavLink to="/registration">Registration</NavLink>
      </Button>
      <Button variant="outlined" color="primary" className="Nav-Item">
        <NavLink to="/about">About</NavLink>
      </Button>
    </ul>
  );
}

export default Navigation;
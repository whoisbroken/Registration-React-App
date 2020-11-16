
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";

import Navigation from "../Navigation/Navigation";
import UserList from "../UserList/UserList";
import Registration from "../Registration/Registration";
import About from "../About/About";

class App extends Component {
  state = {
    users: [],
  }

  addUser = (user) => {
    this.setState((prevState) => {
      return {
        users: [...prevState.users, { ...user }],
      };
    });
  };

  

  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/registration">
            <Registration addUser={this.addUser} />
          </Route>
          <Route path="/user-list">
            <UserList users={this.state.users} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Redirect to="/registration" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

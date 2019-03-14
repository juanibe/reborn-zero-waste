import React, { Component } from "react";
import "./App.css";
import Manufacturer from "./pages/Manufacturer";
import ManufacturerPublic from "./pages/Manufacturer-public";
import ManufacturerPrivate from "./pages/Manufacturer-private";
import { Switch, Route } from "react-router-dom";
import AuthService from "./components/auth/auth-service";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavbarHeader from "./components/NavbarHeader";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      //here goes
    }
    return (
      <div className="App">
        <NavbarHeader isLogged={this.getTheUser} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() => <Login getUser={this.getTheUser} />}
          />
          <Route
            exact
            path="/signup"
            render={() => <Signup getUser={this.getTheUser} />}
          />
          {/* <Route path="/concept" component={Concept} />
          <Route path="/designer" component={Designer} /> */}
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;

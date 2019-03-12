import React, { Component } from "react";
import "./App.css";
import Manufacturer from "./pages/Manufacturer";
import ManufacturerPublic from "./pages/Manufacturer-public";
import ManufacturerPrivate from "./pages/Manufacturer-private";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavbarHeader from "./components/NavbarHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    return (
      <div className="App">
        <NavbarHeader isLogged={this.getTheUser} />
        <Home />
        <Footer />

        <Switch>
          <Route
            path="/signup"
            render={() => <Manufacturer getUser={this.getTheUser} />}
          />
          <Route path="/reborn" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/concept" component={Concept} />
          <Route path="/designer" component={Designer} />
        </Switch>
      </div>
    );
  }
}

export default App;

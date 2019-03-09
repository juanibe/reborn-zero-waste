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
        <Switch>
          <Route
            exact
            path="/signup"
            render={() => <Manufacturer getUser={this.getTheUser} />}
          />
        </Switch>
        <NavbarHeader />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

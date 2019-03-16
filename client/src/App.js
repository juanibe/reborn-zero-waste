import React, { Component } from "react";
import "./App.css";
//import "./public/Style.css";
import Manufacturer from "./pages/Manufacturer";
import ManufacturerPublic from "./pages/Manufacturer-public";
import ManufacturerPrivate from "./pages/Manufacturer-private";
import DesignerPublic from "./pages/Designer-profile-public";
import DesignerPrivate from "./pages/Designer-profile-private";
import { Switch, Route } from "react-router-dom";
import AuthService from "./components/auth/auth-service";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavbarHeader from "./components/NavbarHeader";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Modal from "./components/ModalLogin";
import Concept from "./pages/Concept";
import ModalManufacturer from "./components/Modalmanufacturer";
import ModalDesigner from "./components/Modaldesigner";

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

          {/* Two signup : one for designers, one for manufacturers */}
          <Route
            exact
            path="/signup"
            render={() => <Signup getUser={this.getTheUser} />}
          />

          <Route exact path="/manufacturers" component={ManufacturerPublic} />

          <Route
            exact
            path="/manufacturers-private"
            component={ManufacturerPrivate}
          />

          <Route exact path="/designers" component={DesignerPublic} />
          <Route exact path="/designers-private" component={DesignerPrivate} />

          <Route exact path="/concept" component={Concept} />
        </Switch>

        <Modal />

        <ModalManufacturer />

        <ModalDesigner />

        <Footer />
      </div>
    );
  }
}

export default App;

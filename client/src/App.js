import React, { Component } from "react";
import "./App.css";
import ManufacturerPublic from "./pages/Manufacturer-public";
import ManufacturerPrivate from "./pages/Manufacturer-private";
import DesignerPublic from "./pages/Designer-profile-public";
import DesignerPrivate from "./pages/Designer-profile-private";
import { Switch, Route } from "react-router-dom";
import AuthService from "./components/auth/auth-service";
import Home from "./pages/Home";
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";
import Signup from "./components/auth/Signup";
import Concept from "./pages/Concept";
import MyProfile from "./pages/MyProfile";
import ModalLogin from "./components/ModalLogin";

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
    }
    return (
      <div className="App">
        <NavbarHeader
          getUser={this.getTheUser}
          userInSession={this.state.loggedInUser}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home getUser={this.getTheUser} />}
          />
          <Route
            exact
            path="/login"
            render={() => <ModalLogin getUser={this.getTheUser} />}
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
          <Route exact path="/profile" component={MyProfile} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

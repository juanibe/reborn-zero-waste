import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Navbar } from "mdbreact";
import NavbarHeader from "./components/NavbarHeader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHeader />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "../App.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

//import AuthService from './auth-service';

class DesignerPublic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designers: [],
      city: "",
      brand: "",
      email: ""
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3001/api/list-designers")
      .then(res => {
        console.log('designer test', res)
        this.setState({ designers: res.data })
      })
  }
  render() {
    console.log('TEST2', this.state.designers)
    return (

      <div className="container">
        {this.state.designers &&
          this.state.designers.map(a =>
            <h1>{a.user.username}</h1>
          )
        }
      </div>
    );
  }
}

export default DesignerPublic;

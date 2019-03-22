import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Link, withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import AuthService from "../components/auth/auth-service";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", error: false };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service
      .login(username, password)
      .then(response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response);
        this.props.history.push("/");
        console.log(this.props.history);
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Popup
        trigger={<button className="button"> Open Modal </button>}
        modal
        closeOnDocumentClick
      >
        <div className="container login-container">
          <div className="row">
            <div className="col-4" />
            <div className="col-4">
              {this.state.error ? <h1>ERROR!</h1> : ""}
              <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    size="sm"
                    type="email"
                    placeholder="Enter email"
                    name="username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    size="sm"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                  />
                </Form.Group>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </Form>
            </div>
            <div className="col-4" />
          </div>
          <br />
          <p className="signup-message">
            Don't have account? <Link to={"/signup"}> Signup</Link>
          </p>
        </div>
      </Popup>
    );
  }
}

export default Modal;

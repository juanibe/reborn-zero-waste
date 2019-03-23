import React, { Component } from "react";
import Popup from "reactjs-popup";
import Form from "react-bootstrap/Form";
import AuthService from "./auth/auth-service";

class ModalManufacturer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", username: "", password: "", error: false };
    this.service = new AuthService();
  }
  componentWillMount() {
    document.addEventListener("mousedown", this.documentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.documentClick, false);
  }

  documentClick = e => {
    if (!this.node || this.node.contains(e.target)) {
      return;
    }
    this.setState({ modalOpen: false });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const company = this.state.company;

    this.service
      .signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          company: "",
          modalOpen: false
        });
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleButtonClick = () => {
    this.setState({ modalOpen: true });
  };

  render() {
    return (
      <span>
        <Popup modal open={this.state.modalOpen} closeOnDocumentClick={false}>
          <div
            ref={node => (this.node = node)}
            className="container signup-container"
          >
            <div className="row">
              <div className="col-2" />
              <div className="col-8">
                <h4 className="signup-manufacturer-title">
                  Register as a manufacturer
                </h4>

                <Form onSubmit={this.handleFormSubmit}>
                  <Form.Group controlId="nameCompany">
                    <Form.Label>Name of your company</Form.Label>
                    <Form.Control
                      size="sm"
                      type="name"
                      placeholder="Name of your company"
                      name="name"
                      value={this.state.company}
                      onChange={e => this.handleChange(e)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      size="sm"
                      type="name"
                      placeholder="Enter email"
                      name="username"
                      value={this.state.username}
                      onChange={e => this.handleChange(e)}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      size="sm"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={e => this.handleChange(e)}
                    />
                    {this.state.password.length < 8 ? (
                      <Form.Text style={{ color: "red", fontSize: "0.5em" }}>
                        Your password has to be 8 character long at least
                      </Form.Text>
                    ) : (
                      <Form.Text style={{ color: "green", fontSize: "0.5em" }}>
                        Password is valid
                      </Form.Text>
                    )}
                  </Form.Group>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Signup"
                  />
                </Form>
              </div>
              <div className="col-2" />
            </div>
          </div>
        </Popup>
        <button className="button" onClick={this.handleButtonClick}>
          {" "}
          Sign up{" "}
        </button>
      </span>
    );
  }
}

export default ModalManufacturer;

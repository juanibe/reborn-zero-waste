import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link, withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import content from '../../text.json'


class Login extends Component {
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
            <div className="container login-container">
                <div className="row">
                    <div className="col-4" />
                    <div className="col-4">

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
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </Form>
                        <hr />
                        {this.state.error ? <p className='error-message'>{content.errorMessage.errorMessage}!</p> : ""}
                    </div>
                    <div className="col-4" />

                </div>
                <p className="login-message">
                    Dont have account? <Link to={"/signup"}> Signup</Link><br />
                    Forgot your password? ... Sorry about that man
                </p>
            </div>
        );
    }
}

export default withRouter(Login);

import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;

        this.service.signup(username, password)
            .then(response => {
                this.setState({
                    username: "",
                    password: "",
                });
                this.props.getUser(response)
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                        <h4 className='signup-manufacturer-title'>Register as a <br /> manufacturer</h4>

                        <Form onSubmit={this.handleFormSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control size="sm" type="email" placeholder="Enter email" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control size="sm" type="password" placeholder="Password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                                {this.state.password.length < 8 ?
                                    <Form.Text style={{ color: 'red', fontSize: '0.5em' }}>Your password has to be 8 character long at least</Form.Text>
                                    :
                                    <Form.Text style={{ color: 'green', fontSize: '0.5em' }}>Password is valid</Form.Text>
                                }

                            </Form.Group>
                            <input className="btn btn-primary" type="submit" value="Signup"></input>
                        </Form>
                    </div>
                    <div className='col-3'></div>
                </div>
            </div>
        )
    }
}

export default Signup;
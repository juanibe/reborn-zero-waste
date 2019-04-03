import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import Calendar from './DatePicker';
import RequiredFabric from './RequiredFabrics';
import { withRouter } from 'react-router-dom';
import AuthService from '../auth/auth-service';



class AddFabricCard extends Component {
    constructor() {
        super()
        this.state = {

            type: "Cotton",
            amount: "",
            collectiondeadline: new Date(),
            plans: ""

        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.service = new AuthService();
    };

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFabric(this.state.fabric)
    }

    dateHandler = date => this.setState({ collectiondeadline: date })

    handleFormSubmit(event) {
        event.preventDefault();
        const formData = {
            quantity: this.state.amount,
            type: this.state.fabricType,
            description: this.state.plans,
        };
        this.service
            .createFabric(formData)
            .then(() => {
                this.setState({
                    type: "",
                    amount: "",
                    plans: "",
                })
                //  this.props.history.push('/profile')
            })
            .catch(error => {
                console.log("No" + error);
            });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="type">
                                <Form.Label>Which fabric would you like to buy?</Form.Label>
                                <Form.Control required name="type" value={this.state.type} onChange={this.handleChange} as="select">
                                    <option>Cotton</option>
                                    <option>Denim</option>
                                    <option>Wool</option>
                                    <option>Linen</option>
                                    <option>Synthetic</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="fabricQty">
                                <Form.Label>How much fabric would you like?</Form.Label>
                                <Form.Control required name="amount" value={this.state.amount} onChange={this.handleChange} type='text'></Form.Control>meters
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="type">
                                <Form.Label>By when would you need the fabric?</Form.Label>
                                <Calendar required onChange={this.dateHandler} /*value={this.state.fabric.collectiondeadline}*/ />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="fabricPlan">
                                <Form.Label>How do you plan to use it?</Form.Label>
                                <Form.Control name="plans" value={this.state.plans} onChange={e => this.handleChange(e)} type='text' placeholder='Optional'></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row><br />
                    <Row>
                        <Col>
                            <Button variant="outline-success" type="submit">Add Fabric</Button>
                            {/* fabricList.push(<RequiredFabric type={this.state.type} amount={this.state.amount}/>)} variant="outline-success">*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="finalOrder" />
                            <p><strong>Total Fabric Needed</strong></p>
                            <RequiredFabric type={this.state.type} amount={this.state.amount} />
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
export default withRouter(AddFabricCard);

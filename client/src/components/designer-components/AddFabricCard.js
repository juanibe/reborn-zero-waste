import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import Calendar from './DatePicker';
<<<<<<< HEAD
import RequiredFabric from './RequiredFabrics';


class AddFabricCard extends Component {
    state = {
        fabric: {
            type:"",
            amount:"",
            collectiondeadline: new Date(),
            plans:""
    }};

    handleChange = (event) => {
        event.preventDefault();
		const { name, value } = event.target;
		this.setState({ [name]: value });
=======
import RequiredFabrics from './RequiredFabrics';
import AuthService from "../../components/auth/auth-service"


class AddFabricCard extends Component {
    constructor() {
        super()
        this.state = {
            fabricType: "",
            quantity: "",
            deadline: new Date(),
            plans: ""
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.service = new AuthService();
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
>>>>>>> 78bb505b8954d53d01dcf11cf2b59ee1eae2c7b0
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.addPlayer(this.state.value);
    //     this.setState({ value: '' });
    //   }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFabric(this.state.fabric)
    }

    dateHandler = date => this.setState({ collectiondeadline: date })
   

    handleFormSubmit(event) {
        event.preventDefault();

        const formData = {
            fabricType: this.state.fabricType,
            quantity: this.state.quantity,
            plans: this.state.plans,

        };
        this.service
            .createFabric(formData)
            .then(res => {
                console.log(formData);
                this.props.history.push('/profile')
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
                                <Form.Control required name="type" value={this.state.fabric.type} onChange={this.handleChange} as="select">
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
                                <Form.Control required name="amount" value={this.state.fabric.amount} onChange={this.handleChange} type='input'></Form.Control>meters
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="type">
                                <Form.Label>By when would you need the fabric?</Form.Label>
<<<<<<< HEAD
                            <Calendar required onChange={this.dateHandler} /*value={this.state.fabric.collectiondeadline}*//>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="fabricPlan">
                                        <Form.Label>How do you plan to use it?</Form.Label>
                                        <Form.Control name="plans" /*value={this.state.fabric.plans}*/ onChange={e => this.handleChange(e)} type='input' placeholder='Optional'></Form.Control>
                                    </Form.Group>
                                </Col>
                    </Row><br/>
                    <Row>
                        <Col>
                            <Button variant="outline-success" onClick={(e) => this.handleSubmit(e)}>Add Fabric</Button>
                                {/* fabricList.push(<RequiredFabric type={this.state.type} amount={this.state.amount}/>)} variant="outline-success">*/}
=======
                                <Calendar required onChange={this.dateHandler} value={this.state.deadline} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="fabricQty">
                                <Form.Label>How do you plan to use it?</Form.Label>
                                <Form.Control name="plans" value={this.state.plans} onChange={e => this.handleChange(e)} type='input' placeholder='Optional'></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row><br />
                    <Row>
                        <Col>
                            <Button type="submit">Add Fabric</Button>
                            {/* fabricList.push(<RequiredFabrics type={this.state.fabricType} quantity={this.state.quantity}/>)} variant="outline-success">*/}
>>>>>>> 78bb505b8954d53d01dcf11cf2b59ee1eae2c7b0
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="finalOrder" />
                            <p><strong>Total Fabric Needed</strong></p>
<<<<<<< HEAD
                            <RequiredFabric type={this.state.type} amount={this.state.amount}/>
=======
                            <RequiredFabrics type={this.state.fabricType} quantity={this.state.quantity} />>
>>>>>>> 78bb505b8954d53d01dcf11cf2b59ee1eae2c7b0
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
<<<<<<< HEAD
=======





>>>>>>> 78bb505b8954d53d01dcf11cf2b59ee1eae2c7b0
export default AddFabricCard;
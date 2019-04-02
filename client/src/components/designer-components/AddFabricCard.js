import React, {Component} from 'react';
import {Button, Form, Col, Row } from 'react-bootstrap';
import Calendar from './DatePicker';
import RequiredFabrics from './RequiredFabrics';


class AddFabricCard extends Component {
    state = {
        fabricType:"",
        quantity:"",
        deadline:"",
        plans:""   
    };

    handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
    }

    render() {
        return(
                <div>
                    <Row>
                        <Col>
                            <Form.Group controlId="fabricType">
                                <Form.Label>Which fabric would you like to buy?</Form.Label>
                                <Form.Control required name="type" value={this.state.fabricType} onChange={e => this.handleChange(e)} as="select">
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
                                <Form.Control required name="quantity" value={this.state.quantity} onChange={e => this.handleChange(e)} type='input'></Form.Control>meters
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="fabricType">
                                <Form.Label>By when would you need the fabric?</Form.Label>
                            <Calendar required name="collectiondeadline" value={this.state.deadline} onChange={e => this.handleChange(e)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="fabricQty">
                                        <Form.Label>How do you plan to use it?</Form.Label>
                                        <Form.Control name="plans" value={this.state.plans} onChange={e => this.handleChange(e)} type='input' placeholder='Optional'></Form.Control>
                                    </Form.Group>
                                </Col>
                    </Row><br/>
                    <Row>
                        <Col>
                            <Button>Add Fabric</Button>
                                {/* fabricList.push(<RequiredFabrics type={this.state.fabricType} quantity={this.state.quantity}/>)} variant="outline-success">*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="finalOrder" />
                            <p><strong>Total Fabric Needed</strong></p>
                            <RequiredFabrics type={this.state.fabricType} quantity={this.state.quantity}/>>
                        </Col>
                    </Row>
                </div>
        )
    }
}



    

    export default AddFabricCard;
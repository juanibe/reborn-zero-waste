import React from 'react';
import {Button, Form, Col, Row } from 'react-bootstrap';
import Calendar from './DatePicker'

const AddFabricCard = () => 
    <div>
        <Row>
            <Col>
                <Form.Group controlId="fabricType">
                    <Form.Label>Which fabric would you like to buy?</Form.Label>
                    <Form.Control as="select">
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
                    <Form.Control type='input'></Form.Control>meters
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group controlId="fabricType">
                    <Form.Label>By when would you need the fabric?</Form.Label>
                   <Calendar />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="fabricQty">
                            <Form.Label>What do you plan to make?</Form.Label>
                            <Form.Control type='input' placeholder='Optional'></Form.Control>
                        </Form.Group>
                    </Col>
        </Row><br/>
        <Row>
            <Col>
                <Button variant="outline-success">Add Fabric</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group controlId="finalOrder" />
                <p><strong>Total Fabric Needed</strong></p>
                <p>123 meters of Cotton, 300 meters of Denim, 110 meters of Linen </p>
            </Col>
        </Row>
    </div>

    export default AddFabricCard;
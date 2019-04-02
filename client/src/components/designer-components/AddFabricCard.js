import React from 'react';
import {Button, Form, Col, Row } from 'react-bootstrap';
import Calendar from './DatePicker';
import RequiredFabrics from './RequiredFabrics';

let fabricList = [];
const AddFabricCard = (props) => 
    <div>
        <Form>
        <Row>
            <Col>
                <Form.Group controlId="fabricType">
                    <Form.Label>Which fabric would you like to buy?</Form.Label>
                    <Form.Control required name="type" value={props.fabricType} onChange={e => props.fabricDetailsHandler(e)} as="select">
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
                    <Form.Control required name="quantity" value={props.quantity} onChange={e => props.fabricDetailsHandler(e)} type='input'></Form.Control>meters
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group controlId="fabricType">
                    <Form.Label>By when would you need the fabric?</Form.Label>
                   <Calendar required name="collectiondeadline" value={props.deadline} onChange={e => props.fabricDetailsHandler(e)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="fabricQty">
                            <Form.Label>How do you plan to use it?</Form.Label>
                            <Form.Control name="plans" value={props.plans} onChange={e => props.fabricDetailsHandler(e)} type='input' placeholder='Optional'></Form.Control>
                        </Form.Group>
                    </Col>
        </Row><br/>
        <Row>
            <Col>
                <Button onClick={fabricList.push(<RequiredFabrics type={props.fabricType} quantity={props.quantity}/>)} variant="outline-success">Add Fabric</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group controlId="finalOrder" />
                <p><strong>Total Fabric Needed</strong></p>
                <RequiredFabrics type={props.fabricType} quantity={props.quantity}/>>
            </Col>
        </Row>
        </Form>
    </div>
    

    export default AddFabricCard;
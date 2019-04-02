import React from 'react';
import AddFabricCard from './AddFabricCard';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
import Calendar from './DatePicker'

const StartACollectionCard = () => 
    <Col sm={8}>
        <Card>
            <h2>Start A Fabric Collection Drive</h2>
            <Form>
                {/* ------>  AddFabricCard*/}
                <AddFabricCard />
                {/* <------- */}
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
                </Row>
                <Row>
                    <Col>
                    
                        <h4><Form.Control type='input' placeholder='Name of your upcoming Collection'></Form.Control></h4>
                        <Form.Control type='input' placeholder='What is this collection about?'></Form.Control>                                    
                    </Col>
                </Row>
            </Form>
            <br/>
            <Form>
                <Form.Label>Approximately what date will you launch your collection?</Form.Label>
                <Calendar/><br/>
                <Button variant="primary">Start Collection Drive</Button>
            </Form>
        </Card>
    </Col>

export default StartACollectionCard;
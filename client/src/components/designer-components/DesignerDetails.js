import React, { Component } from 'react';
import { Card, Button, Form, Container, Col, Row } from 'react-bootstrap';
import Calendar from './DatePicker'
import SampleGallery from './Gallery';


class DesignerDetails extends Component {
    state= {
        designer: {
            name:'Jane Doe',
            email:'janedoe@gmail.com',
            brandname: "Nico",
			address: "123 Nico Default",
			city: "Berlin",
			state: "Berlin",
			country: "Germany",
			zipcode: "10553",
			design_inspiration: "I like stripes, checked T-Shirts, Flannels and dope hoodies. Check out my collection!",
			product_types: ["Flannels", "Shirts", "Hoodies"],
            product_gallery: "imgsrc",
            collections:[
                {
                    name:"Summer Is Coming",
                    about:"What else is there to know?",
                    fabrics:[
                        {
                        type:"Cotton",
                        amount:"45 meters",
                        date_created:"",
                        deadline:"24/05/2019",
                        note:"I need some cotton for my upcoming collection"
                    }]        
                }
            ]
        }  
    };

    render() {
        return (
            <Container>
                    <Row>
                        {/* ------>  DesignerProfileCard*/}
                        <Col sm={4}> 
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="../images/avatar.png" />
                                <Card.Body>
                                    <Card.Title>{this.state.designer.name}</Card.Title>
                                    <Card.Title>Label: {this.state.designer.brandname}</Card.Title>
                                    <Card.Title>Email: {this.state.designer.email}</Card.Title>
                                    <Card.Text>{this.state.designer.design_inspiration}</Card.Text>
                                    <Card.Text>I make => {this.state.designer.product_types.map((product,index) => {return (" " + product + " |")})}</Card.Text>
                                    <Button variant="outline-secondary">Edit Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <------- */}
                        {/* ------>  FabricCollectionCard*/}
                        <Col sm={8}>
                            <Card>
                                <h2>Start A Fabric Collection Drive</h2>
                                <Form>
                                    <Row>
                                        {/* ------>  AddFabricCard*/}
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
                                        <Col>
                                            <br/><br/> 
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
                        {/* <------- */}
                    </Row>
                    <br/><br/>
                    {/* DesignerGalleryCard --------> */}
                    <Row>
                        <Col>
                            <h3>{this.state.designer.brandname}'s Latest Designs</h3>
                            <SampleGallery />
                        </Col>
                    </Row>
                    {/* <------- */}
                    <br></br><br></br>
                    <Row>
                        <Col>
                        <h3>{this.state.designer.brandname}'s Collection Drives</h3>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <Row>
                        <Col>
                            <Card bg="light">
                                <Card.Header>Last Day - {this.state.designer.collections[0].fabrics[0].deadline}.</Card.Header>
                                <Card.Body>
                                <Card.Title>Light Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer><Button variant="outline-success">25 Potential Suppliers</Button></Card.Footer>
                            </Card>                        
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default DesignerDetails;

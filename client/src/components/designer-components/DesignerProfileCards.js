import React from 'react';
import { Card, Button, Col} from 'react-bootstrap';

const DesignerProfileCards = (props) => 
    <Col sm={4}> 
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../images/avatar.png" />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Title>Label: {props.label}</Card.Title>
            <Card.Title>Email: {props.email}</Card.Title>
            <Card.Text>{props.design_inspiration}</Card.Text>
            <Card.Text>I make => {props.product_types}</Card.Text>
            <Button variant="outline-secondary">Edit Details</Button>
        </Card.Body>
    </Card>
</Col>

export default DesignerProfileCards;
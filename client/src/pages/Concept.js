import React, { Component } from "react";
import { MDBRow, MDBContainer } from "mdbreact";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";

class Concept extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={6}>
            <Image
              src="/images/cotton.jpeg"
              alt="fabric"
              width="750"
              height="550"
              rounded
            />
          </Col>

          <Col sm={6}>
            <h2>How to be sustainable</h2>
            <p>
              Most actors today agree that our modern society has to develop in
              more sustainable ways.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Concept;

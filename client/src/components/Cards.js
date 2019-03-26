import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Cards = props => {
  return (
    <div>
      <Container>
        <Row>
          <Card style={{ width: "18rem" }}>
            <div className="card">
              <img
                className="card-img-top"
                src={props.image}
                alt="manufacturer"
              />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
              </div>
              <div className="card-body">{props.signUpLink}</div>
            </div>
          </Card>
        </Row>
      </Container>
    </div>
  );
};
export default Cards;

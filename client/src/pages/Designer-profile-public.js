import React, { Component } from "react";
import "../App.css";
import { Card, Container, Row, Col } from "react-bootstrap";

class DesignerPublic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someData: "",
      someData2: ""
    };
  }

  render() {
    return (
      <Container>
        <h2>Get in touch with designers right now ! </h2>
        <Row>
          <Col>
            {this.state.manufacturers.map(m => {
              return (
                <Card style={{ width: "18rem" }}>
                  <div className="card">
                    <img className="card-img-top" alt="designer" />
                    {/* <div className="card-body"> */}
                    {/* <h5 className="card-name">{props.name}</h5> */}
                    {/* <p className="card-text">{props.text}</p> */}
                    {/* </div> */}
                    {/* <div className="card-body">{props.signUpLink}</div> */}
                  </div>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

// brand / city / email

export default DesignerPublic;

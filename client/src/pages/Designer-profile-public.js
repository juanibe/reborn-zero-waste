import React, { Component } from "react";
import "../App.css";
import { Card, Container, Row, Col } from "react-bootstrap";

//import AuthService from './auth-service';

class DesignerPublic extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     someData: "",
  //     someData2: ""
  //   };
  // }



  render() {
    return (
      <div className="container">
        {/*<h3>Get in touch with designers right now ! </h3>
        <div className="row">
          <Container>
            <Row>
              <Col>
                {this.state.manufacturers.map(m => {
                  return (<Card style={{ width: "18rem" }}>
                    <div className="card">
                      <img className="card-img-top" alt="designer" />
                     
                    </div>
                  </Card>)
                })}
              </Col>
            </Row>
          </Container>
        </div>*/}
      </div>
    );
  }
}

export default DesignerPublic;

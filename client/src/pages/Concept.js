import React, { Component } from "react";
import { MDBRow, MDBContainer } from "mdbreact";
import Image from "react-bootstrap/Image";

class Concept extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <div class="col">
            <Image
              src="/images/cotton.jpeg"
              alt="fabric"
              width="1000"
              height="800"
              rounded
            />
            <p>Blablablalbalblalba</p>
          </div>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Concept;

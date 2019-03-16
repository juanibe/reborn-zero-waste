import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
// Add menu + footer in this page

class Concept extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <div class="col">
            <img src="/images/cotton.jpeg" alt="fabric" />
          </div>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Concept;

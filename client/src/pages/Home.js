// This will have 4 components
// 1. Navbar
// 2. Header text component
// 3. Signup List component
// 4. Footer component

import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

class Home extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <div className="Home">
            <div className="HeaderText">
              <h1>REBORN</h1>
              <h3>Be a part of the Zero-Waste movement</h3>
            </div>

            <div className="SignupText">
              <MDBCol lg="6">
                <p class="imagealigned">
                  <div class="col">
                    <img src="/images/manufacturer.png" alt="manufacturer" />
                  </div>

                  <h1>Manufacturers</h1>
                  <p class="home">
                    List you excess fabric on the site, and work with talented
                    designers to make new clothes. Earn more money from unused
                    fabric, and be more eco-friendly and sustainable.
                  </p>

                  <a href="https://en.wiktionary.org/wiki/manufacturer">
                    Register as a manufacturer
                  </a>
                </p>
              </MDBCol>

              <MDBCol lg="6">
                <p class="imagealigned">
                  <div class="col">
                    <img src="/images/designer.png" alt="designer" />
                  </div>

                  <h1>Designers</h1>
                  <p class="home">
                    Post your fabric requirements on the site, and receive
                    updates whenever the fabric you need is listed on the site.
                  </p>

                  <a href="https://en.wikipedia.org/wiki/Designer">
                    Register as a designer
                  </a>
                </p>
              </MDBCol>
            </div>
          </div>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Home;

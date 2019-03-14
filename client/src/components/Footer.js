import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">REBORN</h5>
            <p>Blalala - SEO concept of Reborn in a line</p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Support</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Contact us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Legal</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms of use</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Company</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Careers</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Press</a>
              </li>
            </ul>
            <div className="footer-copyright text-center py-3">
              © 2019 Reborn - Made in Berlin
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;

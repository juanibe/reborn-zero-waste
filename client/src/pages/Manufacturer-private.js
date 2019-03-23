import React, { Component } from "react";
import "../App.css";

//import AuthService from './auth-service';

class ManufacturerPrivate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someData: "",
      someData2: ""
    };
  }

  // ---------- Here goes react-bootstrap --------- //

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div>
                <h3>Rayban Factory LTD</h3>
                <p>About the company ! Blablablablablablablablablablabla.</p>
                <div>
                  <h3>Fabric available</h3>
                  <p className="fabric-listed-manufacturer-public">
                    <h5>Denim</h5>
                    <div className="price">
                      <p>50€ /meter</p>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc eleifend ultrices orci, ac bibendum erat tincidunt ut.
                    Ut pellentesque ut nulla id posuere. Integer non tempor mi,
                    vitae gravida dolor.
                  </p>
                  <p className="fabric-listed-manufacturer-public">
                    <h5>Cotton</h5>
                    <div className="price">
                      <p>50€ /meter</p>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc eleifend ultrices orci, ac bibendum erat tincidunt ut.
                    Ut pellentesque ut nulla id posuere. Integer non tempor mi,
                    vitae gravida dolor.
                  </p>
                  <p className="fabric-listed-manufacturer-public">
                    <h5>Wool</h5>
                    <div className="price">
                      <p>50€ /meter</p>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc eleifend ultrices orci, ac bibendum erat tincidunt ut.
                    Ut pellentesqus ut nulla id posuere. Integer non tempor mi,
                    vitae gravida dolor.
                  </p>
                  <p className="fabric-listed-manufacturer-public">
                    <h5>Velvet</h5>
                    <div className="price">
                      <p>50€ /meter</p>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc eleifend ultrices orci, ac bibendum erat tincidunt ut.
                    Ut pellentesque ut nulla id posuere. Integer non tempor mi,
                    vitae gravida dolor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <h4 className="send-message-title-manufacturer-public">
                Send a message to the user
              </h4>
              <form>
                <textarea
                  className="form-control send-message-box-manufaturer-public"
                  aria-label="With textarea"
                />
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManufacturerPrivate;

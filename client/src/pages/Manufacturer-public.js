import React, { Component } from "react";
import "../App.css";

//import AuthService from './auth-service';

class ManufacturerPublic extends Component {
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
        <div className="manufacturer-public">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div>
                  <h3>Rayban Factory LTD</h3>
                  <div className="description">
                    About the company ! Blablablablablablablablablablabla.
                  </div>
                  <div>
                    <h3>Fabric available</h3>
                    <div className="fabric-listed-manufacturer-public">
                      <h5>Denim</h5>
                      <div className="price">50€ /meter</div>
                      <div className="amount">1 meter</div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc eleifend ultrices orci, ac bibendum erat tincidunt
                      ut. Ut pellentesque ut nulla id posuere. Integer non
                      tempor mi, vitae gravida dolor.
                    </div>
                    <div className="fabric-listed-manufacturer-public">
                      <h5>Cotton</h5>
                      <div className="price">50€ /meter</div>
                      <div className="amount">1 meter</div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc eleifend ultrices orci, ac bibendum erat tincidunt
                      ut. Ut pellentesque ut nulla id posuere. Integer non
                      tempor mi, vitae gravida dolor.
                    </div>
                    <div className="fabric-listed-manufacturer-public">
                      <h5>Wool</h5>
                      <div className="price">50€ /meter</div>
                      <div className="amount">1 meter</div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc eleifend ultrices orci, ac bibendum erat tincidunt
                      ut. Ut pellentesqus ut nulla id posuere. Integer non
                      tempor mi, vitae gravida dolor.
                    </div>
                    <div className="fabric-listed-manufacturer-public">
                      <h5>Velvet</h5>
                      <div className="price">50€ /meter</div>
                      <div className="amount">1 meter</div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc eleifend ultrices orci, ac bibendum erat tincidunt
                      ut. Ut pellentesque ut nulla id posuere. Integer non
                      tempor mi, vitae gravida dolor.
                    </div>
                    <div className="fabric-listed-manufacturer-public">
                      <h5>Leather</h5>
                      <div className="price">50€ /meter</div>
                      <div className="amount">1 meter</div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc eleifend ultrices orci, ac bibendum erat tincidunt
                      ut. Ut pellentesque ut nulla id posuere. Integer non
                      tempor mi, vitae gravida dolor.
                    </div>
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
      </div>
    );
  }
}

export default ManufacturerPublic;

import React, { Component } from "react";
import Form from "react-bootstrap/Form";
// import AuthService from "./auth/auth-service";
import "../App.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class ManufacturerPrivate extends Component {
  constructor(props) {
    super(props);
    this.state = { descriptionfabrics: "", amountfabrics: "", error: false };
  }

  render() {
    return (
      <div className="manufacturer-private">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="description-fabrics">
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
              </div>
            </div>

            <div className="col-5">
              <div className="list-fabrics">
                <h4 className="title-form">List of fabrics</h4>

                <Form onSubmit={this.handleFormSubmit}>
                  <Form.Group controlId="description">
                    <Form.Label>Describe the fabric</Form.Label>
                    <Form.Control
                      size="sm"
                      type="descriptionfabrics"
                      placeholder="Description"
                      name="descriptionfabrics"
                      value={this.state.descriptionfabrics}
                      // onChange={e => this.handleChange(e)}
                    />
                  </Form.Group>

                  <Form.Group controlId="amount">
                    <Form.Label>Amount of fabric</Form.Label>
                    <Form.Control
                      size="sm"
                      type="amountfabrics"
                      placeholder="How many meters do you have ? "
                      name="amountfabrics"
                      value={this.state.amountfabrics}
                      onChange={e => this.handleChange(e)}
                    />
                  </Form.Group>

                  <Form.Group controlId="cost">
                    <Form.Label>Cost of fabric</Form.Label>
                    <Form.Control
                      size="sm"
                      type="costfabrics"
                      placeholder="Cost per meter in euros"
                      name="costfabrics"
                      value={this.state.costfabrics}
                      onChange={e => this.handleChange(e)}
                    />
                  </Form.Group>

                  <div className="dropdownfabrics">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Choose the fabrics"
                    >
                      <Dropdown.Item href="#/fabric-1">Denim</Dropdown.Item>
                      <Dropdown.Item href="#/fabric-2">Cotton</Dropdown.Item>
                      <Dropdown.Item href="#/fabric-3">Wool</Dropdown.Item>
                      <Dropdown.Item href="#/fabric-4">Velvet</Dropdown.Item>
                      <Dropdown.Item href="#/fabric-5">Leather</Dropdown.Item>
                    </DropdownButton>
                  </div>

                  <input
                    className="btn btn-secondary"
                    type="submit"
                    value="Submit"
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ManufacturerPrivate;

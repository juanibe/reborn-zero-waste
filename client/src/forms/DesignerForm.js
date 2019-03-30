import React, { Component } from "react";
import { MDBFileInput } from "mdbreact";
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import AuthService from "../components/auth/auth-service";

class DesignerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "",
      //   full_name: "",
      address: "",
      city: "",
      state: "",
      country: "",
      //   email: "",
      //   repeat_email: "",
      design_inspiration: "",
      product_types: "",
      image_gallery: "",
      category_types: "",
      source: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.service = new AuthService();
  }

  handleChange(event) {
    // this.setState({
    // 	logo: event.target.logo,
    // 	full_name: event.target.full_name,
    // 	address: event.target.address,
    // 	city: event.target.city,
    // 	state: event.target.state,
    // 	country: event.target.country,
    // 	email: event.target.email,
    // 	repeat_email: event.target.repeat_email,
    // 	design_inspiration: event.target.design_inspiration,
    // 	product_types: event.target.product_types,
    // 	image_gallery: event.target.image_gallery,
    // 	category_types: event.target.category_types,
    // 	source: event.target.source
    // });
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const formData = {
      brand: this.state.brand,
      //   full_name: this.state.full_name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      //   email: this.state.email,
      //   repeat_email: this.state.repeat_email,
      design_inspiration: this.state.design_inspiration,
      product_types: this.state.product_types,
      image_gallery: this.state.image_gallery,
      category_types: this.state.category_types,
      source: this.state.source
    };
    this.service
      .createDesigner(formData)
      .then(response => {
        console.log("Yes");
      })
      .catch(error => {
        console.log("No" + error);
      });
  }

  render() {
    return (
      <div className="row">
        <div className="designer-registration">
          <Form onSubmit={this.handleFormSubmit}>
            <div className="register-title">
              <h2>Register as a designer</h2>
            </div>

            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>Name of your brand</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="brand"
                  placeholder="Enter your brand name"
                  value={this.state.brand}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>
              {/* <Form.Group as={Col} md="6">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="full_name"
                value={this.state.full_name}
                onChange={e => this.handleChange(e)}
              />
            </Form.Group> */}
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="4">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="zip_code"
                  value={this.state.zip_code}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>State</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="state"
                  value={this.state.state}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  required
                  as="select"
                  name="country"
                  value={this.state.country}
                  onChange={e => this.handleChange(e)}
                >
                  <option>Choose...</option>
                  <option>Germany</option>
                  <option>Great Britain</option>
                  <option>Sweden</option>
                  <option>Spain</option>
                  <option>Poland</option>
                  <option>Greece</option>
                  <option>Russia</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>France</option>
                  <option>Denmark</option>
                  <option>Portugal</option>
                  <option>Finland</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            {/* <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Form.Label>Repeat Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="repeat_email"
                value={this.state.repeat_email}
                onChange={e => this.handleChange(e)}
              />
            </Form.Group>
          </Form.Row> */}

            <Form.Row>
              <Form.Group as={Col} md="12">
                <Form.Label>Tell us about your design inspirations</Form.Label>
                <Form.Control
                  required
                  type="textarea"
                  row="6"
                  name="design_inspiration"
                  placeholder="what does your brand stand for?"
                  value={this.state.design_inspiration}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="12">
                <Form.Label>
                  What type of products are you designing?
                </Form.Label>
                <Form.Control
                  required
                  type="textarea"
                  row="6"
                  name="product_types"
                  placeholder="Accessories, shoes, pants etc"
                  value={this.state.product_types}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="12">
                <Form.Label>Uplaod photos of your past products</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.image_gallery}
                  name="image_gallery"
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="12">
                <Form.Label>
                  Please choose the categories for which you would like to get
                  updates for
                </Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Accessories"
                  name="categories"
                  id="formcategorycheckbox1"
                />
                <Form.Check
                  type="checkbox"
                  label="Pants"
                  name="categories"
                  id="formcategorycheckbox2"
                />
                <Form.Check
                  type="checkbox"
                  label="Shirts"
                  name="categories"
                  id="formcategorycheckbox3"
                />
                <Form.Check
                  type="checkbox"
                  label="Jackets"
                  name="categories"
                  id="formcategorycheckbox4"
                />
                <Form.Check
                  type="checkbox"
                  label="Leftover fabric"
                  name="categories"
                  id="formcategorycheckbox5"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="12">
                <Form.Label>
                  What type of fabric are you looking to source?
                </Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Cotton"
                  name="source"
                  id="formsourcecheckbox1"
                />
                <Form.Check
                  type="checkbox"
                  label="Wool"
                  name="source"
                  id="formsourcecheckbox2"
                />
                <Form.Check
                  type="checkbox"
                  label="Denim"
                  name="source"
                  id="formsourcecheckbox3"
                />
                <Form.Check
                  type="checkbox"
                  label="Leather"
                  name="source"
                  id="formsourcecheckbox4"
                />
                <Form.Check
                  type="checkbox"
                  label="Synthetics"
                  name="source"
                  id="formsourcecheckbox5"
                />
                <Form.Check
                  type="checkbox"
                  label="Velvet"
                  name="source"
                  id="formsourcecheckbox6"
                />
                <Form.Check
                  type="checkbox"
                  label="Muslin"
                  name="source"
                  id="formsourcecheckbox6"
                />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Create List{" "}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default DesignerForm;

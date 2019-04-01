import React, { Component } from "react";
// import AuthService from "../components/auth/auth-service";
import "../App.css";
import content from "../text.json";

class DesignerPrivate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      address: "",
      city: "",
      state: "",
      country: "",
      design_inspiration: "",
      product_types: "",
      image_gallery: "",
      category_types: "",
      source: ""
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="register-title">
            <h2>My profile page</h2>
          </div>

          <div className="row">
            <div className="profile-block">
              <h5 className="brand">Brand : {this.state.brand}</h5>
              <h5 className="address">Address :{this.state.addrress}</h5>
              <h5 className="city">City :{this.state.city}</h5>
              <h5 className="state">State :{this.state.state}</h5>

              <h5 className="country">Country :{this.state.country}</h5>
              <h5 className="design_inspiration">
                Design's inspiration :{this.state.design_inspiration}
              </h5>
              <h5 className="product_types">
                Products :{this.state.product_types}
              </h5>
              <h5 className="image_gallery">
                Images :{this.state.image_gallery}
              </h5>
              <h5 className="category_types">
                Categories :{this.state.category_types}
              </h5>
              <h5 className="source">Type of fabrics :{this.state.source}</h5>
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesignerPrivate;

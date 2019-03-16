// This will have 4 components
// 1. Navbar
// 2. Header text component
// 3. Signup List component
// 4. Footer component

import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Cards from '../components/Cards'
import Header from '../components/Header'
import content from '../text.json'

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <Cards title={content.manufacturer.title} text={content.manufacturer.text} image={content.manufacturer.image} />
            </div>
            <div className='col-4'>
              <Cards title={content.designer.title} text={content.designer.text} image={content.designer.image} />
            </div>
            <div className='col-4'>
              <Cards title={content.individuals.title} text={content.individuals.text} image={content.individuals.image} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

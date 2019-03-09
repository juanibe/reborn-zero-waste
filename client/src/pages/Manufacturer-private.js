
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';


//import AuthService from './auth-service';

class ManufacturerPrivate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            someData: '',
            someData2: ''
        };
    }

    // ---------- Here goes react-bootstrap --------- //

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-8'>
                            <div>
                                <h3>Rayban Factory LTD</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada tempus turpis. Proin et tortor turpis. Sed vulputate tortor ut nisl egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus laoreet elit tincidunt tortor mattis euismod. Suspendisse potenti. Donec et erat convallis, ullamcorper ligula sit amet, dictum dolor. Sed a commodo felis, at ornare dolor. Mauris et massa sit amet est elementum tincidunt. In lobortis accumsan mi ac finibus. Morbi eu blandit magna. Sed ornare eu ex eget pretium. Aliquam facilisis lectus arcu, sed imperdiet nunc pretium eget. Phasellus id ullamcorper nisi. Proin varius dolor quis imperdiet finibus. Etiam aliquet diam ut condimentum bibendum.
                                </p>
                                <div>
                                    <h3>Fabric available</h3>
                                    <p className='fabric-listed-manufacturer-public'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend ultrices orci, ac bibendum erat tincidunt ut. Ut pellentesque ut nulla id posuere. Integer non tempor mi, vitae gravida dolor.</p>
                                    <p className='fabric-listed-manufacturer-public'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend ultrices orci, ac bibendum erat tincidunt ut. Ut pellentesque ut nulla id posuere. Integer non tempor mi, vitae gravida dolor.</p>
                                    <p className='fabric-listed-manufacturer-public'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend ultrices orci, ac bibendum erat tincidunt ut. Ut pellentesque ut nulla id posuere. Integer non tempor mi, vitae gravida dolor.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <h4 className='located-in-manufacturer-public'>Located in: <strong>Berlin</strong></h4>
                            <h4 className='send-message-title-manufacturer-public'>Send a message to the user</h4>
                            <form>
                                <textarea className="form-control send-message-box-manufaturer-public" aria-label="With textarea"></textarea>
                                <input className="btn btn-primary" type="submit" value="Submit"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManufacturerPrivate;  
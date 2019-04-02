import React, {Component} from 'react';
import AddFabricCard from './AddFabricCard';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
import Calendar from './DatePicker'
import RequiredFabrics from './RequiredFabrics';

class StartACollectionCard extends Component {
    state={
        pendingFabric:[{
            type:"",
            quantity:"",
            collectiondeadline:"",
            plans:""       
        }
        ],
        collectionName:"",
        aboutCollection:'',
        launchDate:''
    }

    enterFabricHandler = (event) => {
		const { name, value } = event.target;
        this.setState({ 
            pendingFabric:[
                {[name]: value}
            ]
        });
    }

    dateHandler = date => this.setState({ launchdate: date })

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
    }
    
    addFabricHandler = () => 
        console.log('Reaching');
        // <RequiredFabrics type={this.state.pendingFabric.type} quantity={this.state.pendingFabric.quantity}/>


    render() {
        return(
            <Col sm={8}>
                <Card>
                    <h2>Start A Fabric Collection Drive</h2>
                    <Form>
                        {/* ------>  AddFabricCard*/}
                        <AddFabricCard fabricType={this.state.pendingFabric.type} quantity={this.state.pendingFabric.quantity} deadline={this.state.pendingFabric.collectiondeadline} plans={this.state.pendingFabric.plans} fabricDetailsHandler={this.enterFabricHandler}/>
                        {/* <------- */}
                        <Row>
                            <Col>    
                                <h4><Form.Control name="collectionName" value={this.statecollectionName} onChange={e => this.handleChange(e)} type='input' placeholder='Name of your upcoming Collection'></Form.Control></h4>
                                <Form.Control name="aboutCollection" type='input' placeholder='What was your inpiration behind this collection?'></Form.Control>                                    
                            </Col>
                        </Row>
                    </Form>
                    <br/>
                    <Form>
                        <Form.Label>Approximately what date will you launch your collection?</Form.Label>
                        <Calendar onChange={this.dateHandler} value={this.state.launchdate}/><br/>
                        <Button variant="primary">Start Collection Drive</Button>
                    </Form>
                </Card>
            </Col>
        )
    }
}


export default StartACollectionCard;
import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import { Button, Col } from 'react-bootstrap';
import AuthService from "../components/auth/auth-service";

class ManufactureForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			business_name: '',
			full_name: '',
			address: '',
			city: '',
			zip_code: '',
			state: '',
			country: '',
			email: '',
			repeat_email: '',
			logo: '',
			service: '',
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.service = new AuthService();
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value});
	}

	handleFormSubmit(event) {
		event.preventDefault();
		const formData = {
			business_name: this.state.business_name,
			full_name: this.state.full_name,
			address: this.state.address,
			city: this.state.city,
			zip_code: this.state.zip_code,
			state: this.state.state,
			country: this.state.country,
			email: this.state.email,
			repeat_email: this.state.repeat_email,
			logo: this.state.logo,
			service: this.state.service,
		}
		this.service
			.createManufacturer(formData)
			.then(response => {
				console.log("yes")
			})
			.catch(error => {
				console.log("error: " + error);
			})
	}

	render() {
		return (
			<div className="row">
				<Form onSubmit={this.handleFormSubmit}>
					<h1>Register as a manufacturer</h1>
					<Form.Row>
						<Form.Group as={Col} md="6">
							<Form.Label>Name of your business</Form.Label>
							<Form.Control required type="text" name="business_name" value={this.state.business_name} onChange={e => this.handleChange(e)}/>
						</Form.Group>

						<Form.Group as={Col} md="6">
							<Form.Label>Full Name</Form.Label>
							<Form.Control required type="text" name="full_name" value={this.state.full_name} onChange={e => this.handleChange(e)}/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="4">
							<Form.Label>Address</Form.Label>
							<Form.Control required type="text" name="address" value={this.state.address} onChange={e => this.handleChange(e)}/>
						</Form.Group>

						<Form.Group as={Col} md="4">
							<Form.Label>City</Form.Label>
							<Form.Control required type="text" name="city" value={this.state.city} onChange={e => this.handleChange(e)}/>
						</Form.Group>

						<Form.Group as={Col} md="4">
							<Form.Label>Zip Code</Form.Label>
							<Form.Control required type="text" name="zip_code" value={this.state.zip_code} onChange={e => this.handleChange(e)}/>
					</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="6">
							<Form.Label>State</Form.Label>
							<Form.Control required type="text" name="state" value={this.state.state} onChange={e => this.handleChange(e)}/>
						</Form.Group>

						<Form.Group as={Col} md="6">
							<Form.Label>Country</Form.Label>
							<Form.Control required as="select" name="country" value={this.state.country} onChange={e => this.handleChange(e)}>
								<option>Choose...</option>
								<option>Germany</option>
								<option>Russia</option>
								<option>Japan</option>
								<option>India</option>
							</Form.Control>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="6">
							<Form.Label>Email</Form.Label>
							<Form.Control required type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)}/>
						</Form.Group>

						<Form.Group as={Col} md="6">
							<Form.Label>Repeat Email</Form.Label>
							<Form.Control required type="email" name="repeat_email" value={this.state.repeat_email} onChange={e => this.handleChange(e)}/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="6">
							<Form.Label>Upload the logo of your business</Form.Label>
							<Form.Control required type="text" name="logo" value={this.state.logo} onChange={e => this.handleChange(e)}/>
						</Form.Group>

						<Form.Group as={Col} md="6">
							<Form.Label>Tell designers about your services</Form.Label>
							<Form.Control required as="textarea" name="services" value={this.state.services} onChange={e => this.handleChange(e)}/>
					</Form.Group>
					</Form.Row>
					<Button variant="primary" type="submit">Create List </Button>
				</Form>
			</div>
		)
	}
}

export default ManufactureForm;
import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import { Button, Col } from 'react-bootstrap';

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
	}

	render() {
		return (
			<div className="row">
				<Form onSubmit={this.handleFormSubmit}>
					<h1>Register as a manufacturer</h1>
					<Form.Row>
						<Form.Group as={Col} md="6">
							<Form.Label>Name of your business</Form.Label>
							<Form.Control type="text" name="business_name" value={this.state.business_name} />
						</Form.Group>

						<Form.Group as={Col} md="6">
							<Form.Label>Full Name</Form.Label>
							<Form.Control type="text" name="full_name" value={this.state.full_name} />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="4">
							<Form.Label>Address</Form.Label>
							<Form.Control type="text" name="address" value={this.state.address} />
						</Form.Group>

						<Form.Group as={Col} md="4">
							<Form.Label>City</Form.Label>
							<Form.Control type="text" name="city" value={this.state.city} />
						</Form.Group>

						<Form.Group as={Col} md="4">
							<Form.Label>Zip Code</Form.Label>
							<Form.Control type="text" name="zip_code" value={this.state.zip_code} />
					</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="6">
							<Form.Label>State</Form.Label>
							<Form.Control type="text" name="state" value={this.state.state} />
						</Form.Group>

						<Form.Group as={Col} md="6">
							<Form.Label>Country</Form.Label>
							<Form.Control as="select" name="country" value={this.state.country}>
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
							<Form.Control type="email" name="email" value={this.state.email} />
						</Form.Group>

						<Form.Group as={Col} md="6">
							<Form.Label>Repeat Email</Form.Label>
							<Form.Control type="email" name="repeat_email" value={this.state.repeat_email} />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="6">
							<Form.Label>Upload the logo of your business</Form.Label>
							<Form.Control type="text" name="logo" value={this.state.logo} />
						</Form.Group>

						<Form.Group as={Col} md="6">
							<Form.Label>Tell designers about your services</Form.Label>
							<Form.Control as="textarea" name="services" value={this.state.services} />
					</Form.Group>
					</Form.Row>
					<Button variant="primary" type="submit">Create List </Button>
				</Form>
			</div>
		)
	}
}

export default ManufactureForm;
import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";

class DesignerForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			logo: '',
			full_name: '',
			address: '',
			city: '',
			state: '',
			country: '',
			email: '',
			repeat_email: '',
			design_inspiration: '',
			product_types: '',
			image_gallery: '',
			category_types: '',
			source: ''
		}
	}

	render() {
		return (
			<div className="row">
				<Form onSubmit={this.handleFormSubmit}>
					<h1>Register as a designer</h1>
					<Form.Row>
						<Form.Group as={Col} md="6">
							<Form.Label>Name of your logo</Form.Label>
							<Form.Control type="text" name="logo" value={this.state.logo} />
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
						<Form.Group as={Col} md="12">
							<Form.Label>Tell us about your design inspirations</Form.Label>
							<Form.Control as="textarea" row="6" placeholder="what does your brand stand for?" />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="12">
							<Form.Label>what are the types of products you make?</Form.Label>
							<Form.Control as="textarea" row="6" placeholder="Accessories, shoes, pants etc" />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="12">
							<Form.Label>Uplaod pohots of your past products</Form.Label>
							<Form.Control as="text" />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="12">
							<Form.Label>Please choose the categories for which you would like to get updates for</Form.Label>
							<Form.Check type="checkbox" label="Accessories" />
							<Form.Check type="checkbox" label="Pants" />
							<Form.Check type="checkbox" label="Shirts" />
							<Form.Check type="checkbox" label="Jackets" />
							<Form.Check type="checkbox" label="Leftover Fabric" />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="12">
							<Form.Label>what type of fabric  are you looking to source?</Form.Label>
							<Form.Check type="checkbox" label="Cotton" />
							<Form.Check type="checkbox" label="Wool" />
							<Form.Check type="checkbox" label="Denim" />
							<Form.Check type="checkbox" label="Synthetics" />
							<Form.Check type="checkbox" label="Muslin" />
						</Form.Group>
					</Form.Row>
					<Button variant="primary" type="submit">Create List </Button>
				</Form>
			</div>
		)
	}
}

export default DesignerForm;
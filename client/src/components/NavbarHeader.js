import React from "react";


import { Link } from 'react-router-dom';

// reactstrap components
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

//https://demos.creative-tim.com/blk-design-system-react/#/documentation/navbar

class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.props.getUser(null);
      })
  }

  render() {
    console.log(this.state.loggedInUser)
    return (

      <div>
        <Navbar className="bg-white" expand="lg">
          <Container>
            <NavbarBrand tag={Link} to='/' >
              HOME
            </NavbarBrand>
            <button className="navbar-toggler" id="navbarColor05" type="button">
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarColor05">
              <Nav className="mr-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Designers <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Manufacturers
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Concept
                  </NavLink>
                </NavItem>
                {this.state.loggedInUser ?
                  <NavItem>
                    <NavLink tag={Link} to="/login" >
                      Logout
                 </NavLink>
                  </NavItem>
                  :
                  <NavItem>
                    <NavLink tag={Link} to="/login" >
                      Login
               </NavLink>
                  </NavItem>
                }


                <NavItem>
                  <NavLink tag={Link} to="/signup">
                    Signup
                  </NavLink>
                </NavItem>
              </Nav>

              <Form className="form-inline ml-auto">
                <FormGroup>
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarHeader;

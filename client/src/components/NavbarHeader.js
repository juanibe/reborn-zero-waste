import React from "react";

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
  render() {
    return (
      <>
        <Navbar className="bg-white" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
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

                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Login
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
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
      </>
    );
  }
}

export default NavbarHeader;

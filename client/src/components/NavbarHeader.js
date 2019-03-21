
import AuthService from "./auth/auth-service";
import Modalmanufacturer from "./Modalmanufacturer";
import Image from "react-bootstrap/Image";

// //https://demos.creative-tim.com/blk-design-system-react/#/documentation/navbar

import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";

export default class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, loggedInButton: "Login" };
    this.service = new AuthService();

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    console.log(this.state.loggedInUser)
    return (
      <div>
        {/* color="secondary" */}
        <Navbar className="navbar-style" light expand="md">
          <Link to="/">
            {" "}
            <Image src="/images/needle.png" />{" "}
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="active link-navbar">
                <Link to="/designers">Designers</Link>
              </NavItem>
              <NavItem className="active link-navbar">
                <Link to="/manufacturers">Manufacturers</Link>
              </NavItem>
              <NavItem className="active link-navbar">
<<<<<<< HEAD
                {this.state.loggedInUser
                  ?
                  <Link onClick={() => this.logoutUser()} tag={Link} to="/logout"> Logout </Link>
                  :
                  <ModalLogin getUser={this.props.getUser} />
                }
=======
                <Link to="/concept">Concept</Link>
              </NavItem>
              <NavItem className="active link-navbar">
                {this.state.loggedInUser ? (
                  <Link
                    onClick={() => this.logoutUser()}
                    tag={Link}
                    to="/logout"
                  >
                    Logout
                  </Link>
                ) : (
                  <ModalLogin />
                )}
>>>>>>> 82ed0d06983626115d31146dd61bfc651b29242c
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <Dropd
                  ownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

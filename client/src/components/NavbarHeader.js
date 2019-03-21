// import React from "react";

// import { Link } from 'react-router-dom';

// // reactstrap components
// import {
//   Collapse,
//   UncontrolledCollapse,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   FormGroup,
//   Form,
//   Input,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container
// } from "reactstrap";

import AuthService from "./auth/auth-service";
import Modalmanufacturer from "./Modalmanufacturer";
import Image from "react-bootstrap/Image";

// //https://demos.creative-tim.com/blk-design-system-react/#/documentation/navbar

// class NavbarHeader extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { loggedInUser: null, loggedInButton: 'Login' };
//     this.service = new AuthService();
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
//   }

//   logoutUser = () => {
//     this.service.logout()
//       .then(() => {
//         this.setState({ loggedInUser: null });
//         this.props.getUser(null);
//       })
//   }

//   render() {
//     console.log(this.state.loggedInUser)
//     return (

//       <div>
//         <Navbar className="bg-white" expand="lg">
//           <Container>
//             <NavbarBrand tag={Link} to='/' >
//               HOME
//             </NavbarBrand>
//             <button className="navbar-toggler" id="navbarColor05" type="button">
//               <span className="navbar-toggler-bar navbar-kebab" />
//               <span className="navbar-toggler-bar navbar-kebab" />
//               <span className="navbar-toggler-bar navbar-kebab" />
//             </button>
//             <UncontrolledCollapse navbar toggler="#navbarColor05">
//               <Nav className="mr-auto" navbar>
//                 <NavItem className="active">
//                   <NavLink
//                     href="/designers-public"
//                     onClick={e => e.preventDefault()}
//                   >
//                     Designers <span className="sr-only">(current)</span>
//                   </NavLink>
//                 </NavItem>

//                 <NavItem>
//                   <NavLink
//                     href="/manufacturers-public"
//                     onClick={e => e.preventDefault()}
//                   >
//                     Manufacturers
//                   </NavLink>
//                 </NavItem>

//                 <NavItem>
//                   <NavLink href="/concept" onClick={e => e.preventDefault()}>
//                     Concept
//                   </NavLink>
//                 </NavItem>
//                 {this.state.loggedInUser
//                   ?
//                   <NavLink onClick={() => this.logoutUser()} tag={Link} to="/logout">Logout</NavLink>
//                   :
//                   <NavLink tag={Link} to="/login" >Login</NavLink>
//                 }
//                 <NavItem>

//                 </NavItem>
//               </Nav>

//               <Form className="form-inline ml-auto">
//                 <FormGroup>
//                   <Input placeholder="Search" type="text" />
//                 </FormGroup>
//               </Form>
//             </UncontrolledCollapse>
//           </Container>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default NavbarHeader;
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
    return (
      <div>
        <Navbar color="light" light expand="md">
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
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
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

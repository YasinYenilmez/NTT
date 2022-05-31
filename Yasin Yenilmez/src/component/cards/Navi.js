import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Collapse,
  NavbarToggler,
} from "reactstrap";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="primary" expand="md" light>
          <NavbarBrand href="/">NTT DATA</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
             
              <NavItem className="d-inline-block align-top">
                <NavLink href="https://www.nttdata.com/global/en/" >
                  Sepet
                </NavLink>
              </NavItem>
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

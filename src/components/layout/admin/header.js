import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="inverse" light toggleable>
        <NavbarBrand href="/">
          <span className="brand-logo"></span>
          <span>MANAGEMENT CONSOLE</span>
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#" className="auth-link">
              <span>Antony Collins</span>
              <span>Administrator</span>
              <span></span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="sign">SIGN OUT</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

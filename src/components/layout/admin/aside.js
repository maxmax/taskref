import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Aside extends React.Component {
  render() {
    return (
      <aside className="aside-nav">
        <Nav vertical>
          <NavItem>
            <NavLink href="#">
              <span className="icon"></span>
              Service
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <span className="icon"></span>
              Users
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <span className="icon"></span>
              Limits
            </NavLink>
          </NavItem>
          <NavItem className="active">
            <NavLink href="#">
              <span className="icon"></span>
              Alerts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <span className="icon"></span>
              Keys
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <span className="icon"></span>
              Reports
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <span className="icon"></span>
              Security
            </NavLink>
          </NavItem>
        </Nav>
      </aside>
    );
  }
}

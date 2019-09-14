import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
const TMDB = '../img/tmdb.svg';

const Navigation = () => {
   return(
      <Navbar className="fixed-top" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}  dark expand="md">
          <NavbarBrand href="/"><img style={{width:"30%"}} src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" /></NavbarBrand>
          <NavbarToggler  />
          <Collapse  navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Search</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
   )
}
export default Navigation;

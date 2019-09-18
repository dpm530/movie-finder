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
import { Link } from "react-router-dom";
import './Navigation.css';
const TMDB = '../img/tmdb.svg';


const Navigation = () => {
   return(
      <Navbar className="fixed-top navigation" dark expand="md">
          <NavbarBrand href="/"><img src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" /></NavbarBrand>
          <NavbarToggler  />
          <Collapse  navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/"><NavLink>Home</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/search"><NavLink>Search</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
   )
}
export default Navigation;

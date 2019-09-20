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


class Navigation extends React.Component {
   constructor(props){
      super(props)

      this.state = {
         navStyle: "navigation",
      }

   }

   componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
   }

   componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
   }

   handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > 500){
         this.setState({
            navStyle: "onScrollNav"
         })
      }
      else if (currentScrollPosition < 500) {
         this.setState({
            navStyle: "navigation"
         })
      }
   }

   render() {
      return(
         <Navbar id={this.state.navStyle} className="fixed-top" dark expand="md">
            <NavbarBrand href="/"><img style={{width: "30%"}} src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" /></NavbarBrand>
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
}
export default Navigation;

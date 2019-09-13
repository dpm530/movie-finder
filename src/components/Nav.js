import React from 'react';
const TMDB = '../img/tmdb.svg';

const Nav = () => {
   return(
      <nav className="black">
         <div className="nav-wrapper container">
            <a href="#" className="brand-logo" style={{padding:"5px"}}>
               <img style={{width:"30%"}} src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li><a href="">Home</a></li>
               <li><a href="">Search</a></li>
            </ul>
         </div>
      </nav>
   )
}
export default Nav;

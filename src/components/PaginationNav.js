import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationNav = (props) => {
   const pageLinks = []

   for(let i = 1; i<= props.pages+1; i++){
      let active = props.currentPage == i ? 'active' : '';

      pageLinks.push( <PaginationItem className={`${active}`} key={i} onClick={() => props.nextPage(i)} ><PaginationLink href="#">{i}</PaginationLink></PaginationItem>);
   }

   return (
      <div className="container">
         <div className="row">
            <ul className="pagination">
               { props.currentPage > 1 ? <PaginationItem onClick={() => props.nextPage(props.currentPage - 1)} ><PaginationLink previous href="#" /></PaginationItem> : ""}
               {pageLinks}
               { props.currentPage < props.pages + 1 ? <PaginationItem onClick={() => props.nextPage(props.currentPage + 1)} ><PaginationLink next href="#" /></PaginationItem> : ""}
            </ul>
         </div>
      </div>
   )
}

export default PaginationNav;

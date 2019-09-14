import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const SearchArea = (props) => {
   return (
      <Container className="text-center">
         <Row>
            <Col md="12">
               <form action="" onSubmit={props.handleSubmit}>
                  <div className="input-field">
                     <input placeholder="Search movie" type="text" onChange={props.handleChange} />
                  </div>
               </form>
            </Col>
         </Row>
      </Container>
   )
}

export default SearchArea;

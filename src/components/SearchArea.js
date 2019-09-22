import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';

const SearchArea = (props) => {
   return (

      <Jumbotron>
         <Container>
            <Row>
               <Col className="mx-auto text-center" md="10">
                  <h1 className="display-3 text-white">Movie Guru</h1>
                  <p className="lead text-white">Search for your favorite movies!</p>
               </Col>
            </Row>
            <hr className="my-4" />
            <Row>
               <Col className="mx-auto" sm="9" md="10" lg="5">

                  <Form onSubmit={props.handleSubmit}>
                     <FormGroup>
                        <Input placeholder="Search Movie" type="text" onChange={props.handleChange} />
                     </FormGroup>

                     <Button outline color="light" size="lg" block>Search</Button>
                  </Form>

               </Col>
            </Row>
         </Container>
      </Jumbotron>

   )
}

export default SearchArea;

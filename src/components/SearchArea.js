import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SearchArea = (props) => {
   return (
      <Container>
         <Row>
            <Col className="mx-auto" sm="9" md="7" lg="5">

               <Form onSubmit={props.handleSubmit}>
                  <FormGroup>
                     <Input placeholder="Search Movie" type="text" onChange={props.handleChange} />
                  </FormGroup>

                  <Button>Search</Button>
               </Form>

            </Col>
         </Row>
      </Container>
   )
}

export default SearchArea;

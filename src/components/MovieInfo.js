import React from 'react';
import { Container, Row, Col, Button, CardImg } from 'reactstrap';

const MovieInfo = (props) => {
   return (
      <Container>
         <Row>
            <Col md="12">
               <Button outline color="success" onClick={props.closeMovieInfo}><i className="fas fa-arrow-left"></i> Go Back</Button>
            </Col>
         </Row>

         <Row>
            <Col md="4">
               {
                  props.currentMovie.poster_path == null ? <CardImg src="https://via.placeholder.com/300" alt="Card image" style={{width:"100%", height:"100%"}} /> : <CardImg src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`} alt="card image" style={{width:"100%", height:"100%"}} />
               }
            </Col>
            <Col md="8">
               <Container>
                  <p>{props.currentMovie.title}</p>
                  <p>{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
                  <p>{props.currentMovie.overview}</p>
               </Container>
            </Col>
         </Row>
      </Container>
   )
}

export default MovieInfo;

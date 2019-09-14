import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Movie = (props) => {
   return (
      <Col md="3">
         <div>
            <Card>
               {
                  props.image == null ? <CardImg src="https://via.placeholder.com/300" alt="card image" style={{width:"100%", height:360}} /> : <CardImg src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="card image" style={{width:"100%", height:360}} />
               }
               <CardBody>
                  <Button className="btn" onClick={ () => props.viewMovieInfo(props.movieId) }>View Details</Button>
               </CardBody>
            </Card>
         </div>
      </Col>
   )
}
export default Movie;

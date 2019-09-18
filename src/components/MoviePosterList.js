import React from 'react';
import PosterImage from './PosterImage';
import { Container, Row, Col } from 'reactstrap';

const MoviePosterList = (props) => {
   return (
      <Container>
         <Row>
            <Col md="12">
               <Row>
                  {
                     props.movies.map((movie,i) => {
                        return (
                           <PosterImage key={i} movieId={movie.id} image={movie.poster_path} />
                        )
                     })
                  }
               </Row>
            </Col>
         </Row>
      </Container>
   )
}

export default MoviePosterList;

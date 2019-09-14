import React from 'react';
import Movie from './Movie';
import { Container, Row, Col } from 'reactstrap';

const MovieList = (props) => {
   return (
      <Container>
         <Row>
            <Col md="12">
               <Row>
                  {
                     props.movies.map((movie,i) => {
                        return (
                           <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} />
                        )
                     })
                  }
               </Row>
            </Col>
         </Row>
      </Container>
   )
}

export default MovieList;

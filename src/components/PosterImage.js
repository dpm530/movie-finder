import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const PosterImage = (props) => {
   return (
         <div>
            <Card inverse>
               <CardImg width="100%" src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="Card image cap" />
            </Card>
         </div>
   )
}
export default PosterImage;

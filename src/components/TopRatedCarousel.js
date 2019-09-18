import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import PosterImage from './PosterImage';
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';

const TopRatedCarousel = (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="py-4" style={{ padding: `0 ${chevronWidth}px` }}>
      <div style={{ padding: `0 ${chevronWidth}px` }}>
         <ItemsCarousel
           requestToChangeActive={setActiveItemIndex}
           activeItemIndex={activeItemIndex}
           numberOfCards={5}
           gutter={20}
           leftChevron={<button>{'<'}</button>}
           rightChevron={<button>{'>'}</button>}
           outsideChevron
           chevronWidth={chevronWidth}
         >
         {
            props.topRated.map((movie,i) => {
               return (
                  <PosterImage key={i} movieId={movie.id} image={movie.poster_path} />
               )
            })
         }

         </ItemsCarousel>
      </div>
    </div>
  );
};

export default TopRatedCarousel;

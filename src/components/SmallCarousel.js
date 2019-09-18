import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';

const SmallCarousel = (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
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
            <div>
               <Card inverse>
                  <CardImg width="100%" src="https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SL1500_.jpg" alt="Card image cap" />
               </Card>
            </div>

         </ItemsCarousel>
      </div>
    </div>
  );
};

export default SmallCarousel;

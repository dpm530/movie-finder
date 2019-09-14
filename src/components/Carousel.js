import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src:'https://image.tmdb.org/t/p/original/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 '
  },
  {
    src:'https://image.tmdb.org/t/p/original/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 '
  },
  {
    src:'https://image.tmdb.org/t/p/original/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 '
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;

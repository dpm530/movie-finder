import React from "react";
import Carousel from '../Carousel';
import Navigation from '../Navigation/Navigation';
import SmallCarousel from '../SmallCarousel';

class HomePage extends React.Component {
   constructor() {
      super();
      this.state = {
         images: []
      }
      this.apiKey = process.env.REACT_APP_API
   }

   componentDidMount() {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1&region=US`)
      .then(data => data.json())
      .then(data => {
         console.log(data.results[0].poster_path);
         this.setState({
            images: [...data.results],
         })
         console.log("https://image.tmdb.org/t/p/w500" + data.results[0].poster_path)

      })
   }

   render() {


      return (
         <div>
            <Navigation />
            <Carousel />
            <br />
            <SmallCarousel images={this.state.images} />
            <br />
            <div>
               {
                  this.state.images.map((movie) => {

                     return (
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                     )
                  })
               }
            </div>
         </div>
      )
   }
}

export default HomePage;

import React from "react";
import Carousel from '../Carousel';
import Navigation from '../Navigation/Navigation';
import TopRatedCarousel from '../TopRatedCarousel';
import PopularCarousel from '../PopularCarousel';
import MoviePosterList from '../MoviePosterList';

class HomePage extends React.Component {
   constructor() {
      super();
      this.state = {
         topRated: [],
         popular: [],
         upcoming: []

      }
      this.apiKey = process.env.REACT_APP_API
   }

   componentDidMount() {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1&region=US`)
      .then(data => data.json())
      .then(data => {
         console.log(data.results);
         this.setState({
            topRated: [...data.results],
         })
      });

      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1&region=US`)
      .then(data => data.json())
      .then(data => {
         console.log(data.results);
         this.setState({
            popular: [...data.results],
         })
      });

      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1&region=US`)
      .then(data => data.json())
      .then(data => {
         console.log(data.results);
         this.setState({
            upcoming: [...data.results],
         })
      });
   }

   render() {

      return (
         <div>
            <Navigation />
            <Carousel />
            <h1>Top Rated Movies:</h1>
            <TopRatedCarousel topRated={this.state.topRated} />
            <PopularCarousel popular={this.state.popular} />
         </div>
      )
   }
}

export default HomePage;

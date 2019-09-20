import React from "react";
import Carousel from '../Carousel';
import Navigation from '../Navigation/Navigation';
import TopRatedCarousel from '../TopRatedCarousel';
import PopularCarousel from '../PopularCarousel';
import UpcomingCarousel from '../UpcomingCarousel';
import MoviePosterList from '../MoviePosterList';

class HomePage extends React.Component {
   constructor() {
      super();
      this.state = {
         topRated: [],
         popular: [],
         upcoming: [],
         classStyle: "fixed-top",
         page: "home"

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
            <Navigation page={this.state.page} classStyle={this.state.classStyle} />
            <Carousel />
            <UpcomingCarousel upcoming={this.state.upcoming} />
            <PopularCarousel popular={this.state.popular} />
            <TopRatedCarousel topRated={this.state.topRated} />
         </div>
      )
   }
}

export default HomePage;

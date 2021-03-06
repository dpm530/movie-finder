import React from "react";
import Navigation from '../Navigation/Navigation';
import SearchArea from '../SearchArea';
import PaginationNav from '../PaginationNav';
import MovieInfo from '../MovieInfo';
import MovieList from '../MovieList';
import { Jumbotron, Button } from 'reactstrap';
import './Search.css';

class SearchPage extends React.Component {
   constructor() {
      super()
      this.state = {
         movies: [],
         searchTerm: '',
         totalResults: 0,
         currentPage: 1,
         currentMovie: null,
         page: "not home"
      }
      this.apiKey = process.env.REACT_APP_API
   }

   componentDidMount() {

   }



   handleSubmit = (e) => {
      e.preventDefault();

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
      .then(data => data.json())
      .then(data => {
         console.log(data);
         this.setState({
            movies: [...data.results],
            totalResults: data.total_results
         })
      })
   }

   handleChange = (e) => {
      this.setState({ searchTerm: e.target.value })
   }

   nextPage = (pageNumber) => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
         console.log(data);
         this.setState({
            movies: [...data.results],
            currentPage: pageNumber
         })
      })
   }

   viewMovieInfo = (id) => {
      const filteredMovie = this.state.movies.filter(movie => movie.id == id)
      const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

      this.setState({
         currentMovie: newCurrentMovie
      })
   }

   closeMovieInfo = () => {
      this.setState({
         currentMovie: null
      })
   }

   render() {
      const numberPages = Math.floor(this.state.totalResults / 20);

      return (
         <div>
            <Navigation page={this.state.page}  />
            { this.state.currentMovie == null ? <div><SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange} /><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} /></div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} /> }
            { this.state.totalResults > 20 && this.state.currentMovie == null ? <PaginationNav pages={numberPages} nextPage ={this.nextPage} currentPage={this.state.currentPage} /> : "" }
            <br />
         </div>
      )
   }
}

export default SearchPage;

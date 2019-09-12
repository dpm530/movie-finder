import React from 'react';
import Nav from './components/Nav';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';


class App extends React.Component {
   constructor() {
      super()
      this.state = {
         movies: [],
         searchTerm: ''
      }
      this.apiKey = process.env.REACT_APP_API
   }

   handleSubmit = (e) => {
      e.preventDefault();

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
      .then(data => data.json())
      .then(data => {
         console.log(data);
         this.setState({ movies: [...data.results] })
      })
   }

   handleChange = (e) => {
      this.setState({ searchTerm: e.target.value })
   }

   render(){

      return(
         <div className="App">
            <Nav />
            <br />
            <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            <MovieList movies={this.state.movies} />
         </div>
      )
   }
}

export default App;

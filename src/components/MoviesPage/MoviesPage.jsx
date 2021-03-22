import { Component } from 'react';
import s from './MoviesPage.module.css';

import BtnBack from '../BtnBack/BtnBack';
import MoviesList from '../MoviesList';

import Axios from 'axios';
let key = '68bc44794965f90c41d1f35ad9bb144b';

class MoviePage extends Component {
  state = {
    query: '',
    movies: [],
  };

  hanldeChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.setState({ query });
    this.fetchMovie();
  };
  fetchMovie = () => {
    const { query } = this.state;
    const response = Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
    ).then(response => {
      this.setState({
        movies: response.data.results,
      });
    });
  };

  render() {
    const { movies } = this.state;
    // console.log(movies);
    //console.log(this.props.match.url, 'url MoviePage');

    return (
      <div>
        {/* <BtnBack /> */}
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.hanldeChange}
          ></input>
          <button className={s.SearchFormButton} type="submit">
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default MoviePage;

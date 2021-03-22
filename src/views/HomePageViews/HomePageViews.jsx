import { Component } from 'react';
import MoviesList from '../../components/MoviesList';
import PropTypes from 'prop-types';

import Axios from 'axios';
let key = '68bc44794965f90c41d1f35ad9bb144b';

class HomePageViews extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h2>Today such films are popular</h2>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default HomePageViews;

HomePageViews.propTypes = {
  movies: PropTypes.array,
};

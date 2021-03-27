import { Component } from 'react';
import api from '../../api/api.js';
import PropTypes from 'prop-types';

import MoviesList from '../../components/MoviesList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    api.getPopularMovie().then(movies => {
      this.setState({ movies });
    });
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

export default HomePage;

HomePage.propTypes = {
  movies: PropTypes.array,
};

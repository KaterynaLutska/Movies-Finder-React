import { Component } from 'react';
import api from '../../api/api.js';

import MoviesList from '../../components/MoviesList';

class HomePage extends Component {
  state = {
    movies: [],
    error: null,
  };

  componentDidMount() {
    api
      .getPopularMovie()
      .then(movies => {
        this.setState({ movies });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2>Today such films are popular: </h2>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default HomePage;

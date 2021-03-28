import { Component } from 'react';
import api from '../../api/api.js';

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
        <h2>Today such films are popular: </h2>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default HomePage;

import { Component } from 'react';
import api from '../../api/api';

import MoviesList from '../../components/MoviesList';
import SearchForm from '../../components/SearchForm';

class MoviePage extends Component {
  state = {
    query: '',
    movies: [],
    error: null,
  };

  componentDidMount() {
    //console.log(this.props.location.pathname, 'pathname');
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = prevState;
    const { query: currentQuery } = this.state;

    if (prevQuery !== currentQuery) {
      this.fetchMovie(currentQuery);
    }
  }

  onChangeQuery = data => {
    this.setState({
      query: data.toLowerCase(),
    });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${data}`,
    });
  };

  fetchMovie = () => {
    const { query } = this.state;
    api
      .fetchMovieByName(query)
      .then(movies => {
        this.setState({ movies });
        return movies;
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.onChangeQuery} />
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default MoviePage;

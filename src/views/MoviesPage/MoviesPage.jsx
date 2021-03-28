import { Component } from 'react';
import api from '../../api/api';
import queryString from 'query-string';

import MoviesList from '../../components/MoviesList';
import SearchForm from '../../components/SearchForm';

class MoviePage extends Component {
  state = {
    query: '',
    movies: [],
    error: null,
  };

  componentDidMount() {
    const { pathname, search } = this.props.location;
    if (pathname && search) {
      this.setState({ query: queryString.parse(search).query });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = prevState;
    const { query: currentQuery } = this.state;

    if (prevQuery !== currentQuery) {
      this.fetchMovie(currentQuery);
    }
  }

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

  onChangeQuery = data => {
    const { history, location } = this.props;

    this.setState({
      query: data.toLowerCase(),
    });
    history.push({
      pathname: location.pathname,
      search: `query=${data}`,
    });
  };

  render() {
    const { location } = this.props;
    const { movies } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.onChangeQuery} />
        <MoviesList movies={movies} location={location} />
      </div>
    );
  }
}

export default MoviePage;

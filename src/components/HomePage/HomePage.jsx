import { Component } from 'react';
import { Link } from 'react-router-dom';

import BtnBack from '../BtnBack';
import MoviesList from '../MoviesList';
import routes from '../../routes';
import MoviePreview from '../MoviePreview';

import Axios from 'axios';
let key = '68bc44794965f90c41d1f35ad9bb144b';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    );
    this.setState({ movies: response.data.results });
    // console.log(this.state.movies, 'movies');
  }

  render() {
    const { movies } = this.state;
    // const { url } = this.props.match;
    // console.log(this.props.match, 'url HomePage');

    return (
      <div className="HomePage">
        <h2>Today such films are popular</h2>
        <MoviesList movies={movies} />
        {/* <ul>
          {movies.map(el => (
            <li key={el.id}>
              <Link to={`${routes.movies}/${el.id}`}>{el.title} </Link>
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default HomePage;

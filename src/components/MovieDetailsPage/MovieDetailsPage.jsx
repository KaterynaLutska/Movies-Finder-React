import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';

// import BtnBack from '../BtnBack/BtnBack';
import Cast from '../Cast';
import Reviews from '../Reviews';
// import MoviePreview from '../MoviePreview';

import Axios from 'axios';
let key = '68bc44794965f90c41d1f35ad9bb144b';

class MovieDetailsPage extends Component {
  state = {
    movieId: null,
    movieTitle: null,
    movieGenres: [],
    movieOverview: null,
    moviePoster: null,
    movieData: null,
    movieVote: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(this.props.match, 'url MovieDetail');

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`,
    );

    // console.log(response.data, 'response');

    // this.setState ({...response.data}) - інший спосіб

    this.setState({
      movieId: response.data.id,
      movieTitle: response.data.title,
      movieGenres: response.data.genres,
      movieOverview: response.data.overview,
      moviePoster: response.data.poster_path,
      movieData: response.data.release_date,
      movieVote: response.data.vote_average,
    });
  }

  render() {
    const {
      movieId,
      movieTitle,
      movieGenres,
      movieOverview,
      moviePoster,
      movieData,
      movieVote,
    } = this.state;

    return (
      <div className={s.MovieDetailsPageWrap}>
        <div className={s.MovieDetailsPage}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${moviePoster}?api_key=${key}`}
            width="300px"
          ></img>
          <div className={s.MovieDetailsPageInfo}>
            <h1>{movieTitle} </h1>
            <h2>Overview</h2>
            <p>{movieOverview}</p>
            <h2>Release data</h2>
            <p>{movieData}</p>
            <h2>Vote</h2>
            <p>{movieVote}</p>
            <h2>Genres</h2>
            <ul className={s.Genre}>
              {movieGenres.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2> More info...</h2>
          <ul>
            <li>
              <NavLink
                exact
                to={`${this.props.match.path}/cast`}
                className={s.NavLink}
                activeClassName="NavLink-active"
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`${this.props.match.path}/reviews`}
                className={s.NavLink}
                activeClassName="NavLink-active"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Route
          exact
          path={`${this.props.match.path}/cast`}
          render={props => <Cast {...props} movieId={movieId} />}
        />
        <Route
          exact
          path={`${this.props.match.path}/reviews`}
          render={props => <Reviews {...props} movieId={movieId} />}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;

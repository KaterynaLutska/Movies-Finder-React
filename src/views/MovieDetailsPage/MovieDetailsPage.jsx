import { Component, Suspense, lazy } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

// import s from './MovieDetailsPage.module.css';
import PropTypes from 'prop-types';

import api from '../../api/api';
import MovieDetailsCard from '../../components/MovieDetailsCard';
import NavigationDeteils from '../../components/Navigation/NavigationDetails';

const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkNamme: "Cast" */),
);

const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkNamme: "Cast" */),
);

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    cast: [],
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    api.getMovieDetailPage(movieId).then(res => {
      this.setState({ movie: res.data });
      return res.data;
    });

    api.getCast(movieId).then(cast => {
      this.setState({ cast });
      return cast;
    });

    api.getReviews(movieId).then(reviews => {
      this.setState({ reviews });
      return reviews;
    });
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <MovieDetailsCard movie={movie} />
        <div>
          <h2> More info...</h2>
          <NavigationDeteils
            url={this.props.match.url}
            location={this.props.location}
          />
          <Suspense fallback={<h1>Loading...</h1>}>
            {/* <Switch> */}
            <Route
              path={`${this.props.match.path}`}
              render={props => <Cast {...props} cast={this.state.cast} />}
            />
            <Route
              path={`${this.props.match.path}/reviews`}
              render={props => (
                <Reviews {...props} reviews={this.state.reviews} />
              )}
            />
            {/* </Switch> */}
          </Suspense>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  movies: PropTypes.array,
};

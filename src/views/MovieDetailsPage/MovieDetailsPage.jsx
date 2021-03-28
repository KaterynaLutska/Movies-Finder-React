import { Component, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import PropTypes from 'prop-types';
import api from '../../api/api';

import MovieDetailsCard from '../../components/MovieDetailsCard';
import NavigationDeteils from '../../components/Navigation/NavigationDetails';
import BtnBack from '../../components/BtnBack/BtnBack';

const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "Cast" */),
);

const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName: "Reviews" */),
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
  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push('/');
  };

  render() {
    const { movie, cast, reviews } = this.state;
    const { url, path } = this.props.match;
    return (
      <div>
        <BtnBack onClick={this.handleGoBack} />
        <MovieDetailsCard movie={movie} />
        <div>
          <h2> More info...</h2>
          <NavigationDeteils url={url} location={this.props.location} />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route
              path={`${path}/cast`}
              render={props => <Cast {...props} cast={cast} />}
            />

            <Route
              path={`${path}/reviews`}
              render={props => <Reviews {...props} reviews={reviews} />}
            />
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

import s from './App.css';
import routes from './routes';

import { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import AppBar from './components/AppBar';

const HomePageViews = lazy(() =>
  import('./views/HomePageViews' /* webpackChunkNamme: "HomePage" */),
);
const MoviesPageViews = lazy(() =>
  import('./views/MoviesPageViews' /* webpackChunkNamme: "MoviesPage" */),
);
const MovieDetailsPageViews = lazy(() =>
  import(
    './views/MovieDetailsPageViews' /* webpackChunkNamme: "MoviesDetailPage" */
  ),
);

class App extends Component {
  render() {
    console.log(this.props, 'HomePage');

    return (
      <div className={s.App}>
        <AppBar />
        <Container>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {/* головна стрінка  */}
              <Route exact path={routes.home} component={HomePageViews} />
              {/* сторінка пошуку  */}
              <Route exact path={routes.movies} component={MoviesPageViews} />
              {/* сторінка окремого фільму  movieId - це патерн або шаблон  */}
              <Route
                path={routes.movieDetails}
                component={MovieDetailsPageViews}
              />
              {/* <Route component={HomePage} /> */}
            </Switch>
          </Suspense>
        </Container>
      </div>
    );
  }
}

export default App;

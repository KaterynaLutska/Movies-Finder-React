import s from './App.css';
import routes from './routes';

import { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import AppBar from './components/AppBar';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkNamme: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkNamme: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkNamme: "MoviesDetailPage" */
  ),
);

class App extends Component {
  render() {
    //console.log(this.props, 'HomePage');

    return (
      <div className={s.App}>
        <AppBar />
        <Container>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {/* головна стрінка  */}
              <Route exact path={routes.home} component={HomePage} />
              {/* сторінка пошуку  */}
              <Route exact path={routes.movies} component={MoviesPage} />
              {/* сторінка окремого фільму  movieId - це патерн або шаблон  */}
              <Route
                exact
                path={routes.movieDetails}
                component={MovieDetailsPage}
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

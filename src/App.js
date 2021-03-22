import s from './App.css';

import { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

import Container from './components/Container';
import AppBar from './components/AppBar';
// import HomePage from './components/HomePage';
// import MoviesPage from './components/MoviesPage';
// import MovieDetailsPage from './components/MovieDetailsPage';

const HomePage = lazy(() => import('./components/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage'));

class App extends Component {
  render() {
    console.log(this.props, 'HomePage');

    return (
      <div className={s.App}>
        <AppBar />
        <Container>
          <Switch>
            {/* головна стрінка  */}
            <Route exact path={routes.home} component={HomePage} />
            {/* сторінка пошуку  */}
            <Route exact path={routes.movies} component={MoviesPage} />
            {/* сторінка окремого фільму  movieId - це патерн або шаблон  */}
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            {/* <Route component={HomePage} /> */}
          </Switch>
          {/* <HomePage /> */}
        </Container>
      </div>
    );
  }
}

export default App;

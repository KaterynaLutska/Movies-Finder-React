import Axios from 'axios';
const baseUrl = 'https://api.themoviedb.org/3/';
const key = '68bc44794965f90c41d1f35ad9bb144b';

const getPopularMovie = () => {
  const response = Axios.get(`${baseUrl}/trending/all/day?api_key=${key}`).then(
    res => res.data.results,
  );
  return response;
};

const fetchMovieByName = query => {
  const response = Axios.get(
    `${baseUrl}search/movie?query=${query}&api_key=${key}`,
  ).then(res => {
    return res.data.results;
  });
  return response;
};

const getMovieDetailPage = movieId => {
  const response = Axios.get(
    `${baseUrl}movie/${movieId}?api_key=${key}&language=en-US`,
  ).catch(error => console.error(error.message));
  return response;
};

const getCast = movieId => {
  const response = Axios.get(
    `${baseUrl}movie/${movieId}/credits?api_key=${key}`,
  )
    .then(res => res.data.cast)
    .catch(error => console.error(error.message));
  return response;
};

const getReviews = movieId => {
  const response = Axios.get(
    `${baseUrl}movie/${movieId}/reviews?api_key=${key}`,
  )
    .then(res => res.data.results)
    .catch(error => console.error(error.message));
  return response;
};

const api = {
  getPopularMovie,
  fetchMovieByName,
  getMovieDetailPage,
  getCast,
  getReviews,
};

export default api;

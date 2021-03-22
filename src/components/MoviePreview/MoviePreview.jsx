import s from './MoviePreview.module.css';
let key = '68bc44794965f90c41d1f35ad9bb144b';

const MoviePreview = ({ title, imgUrl }) => {
  return (
    <div className={s.MoviePreviewThumb}>
      <img
        className={s.moviePoster}
        alt={title}
        src={`https://image.tmdb.org/t/p/w500/${imgUrl}?api_key=${key}`}
        width="200px"
      ></img>
      <h2 className={s.MoviePreviewTitle}>{title}</h2>
    </div>
  );
};
export default MoviePreview;

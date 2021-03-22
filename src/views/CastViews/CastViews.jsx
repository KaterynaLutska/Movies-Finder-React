import { Component } from 'react';
import s from './CastViews.module.css';
import PropTypes from 'prop-types';

import Axios from 'axios';
let key = '68bc44794965f90c41d1f35ad9bb144b';

class CastViews extends Component {
  state = {
    casts: [],
  };
  async componentDidMount() {
    const { movieId } = this.props;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`,
    );
    this.setState({ casts: response.data.cast });
  }

  render() {
    const { casts } = this.state;
    return (
      <div>
        {casts.length === 0 ? (
          <h3 className={s.CastTitle}>We don`t have this information</h3>
        ) : (
          <ul className={s.Cast}>
            {casts.slice(0, 6).map(el => (
              <li key={el.id}>
                {el.name}
                <img
                  src={
                    el.profile_path !== null
                      ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                      : this.props.imgSrc
                  }
                  width="100px"
                  alt={el.name}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default CastViews;

CastViews.defaultProps = {
  imgSrc:
    'https://static.ukrinform.com/photos/2018_12/thumb_files/630_360_1546000648-830.jpg',
};
CastViews.propTypes = {
  casts: PropTypes.array,
};

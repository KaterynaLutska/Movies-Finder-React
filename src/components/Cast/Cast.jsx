import { Component } from 'react';
import s from './Cast.module.css';

import Axios from 'axios';
let key = '68bc44794965f90c41d1f35ad9bb144b';

class Cast extends Component {
  state = {
    casts: [],
  };
  async componentDidMount() {
    const { movieId } = this.props;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`,
    );
    console.log(response.data, 'response casts');
    this.setState({ casts: response.data.cast });
  }

  render() {
    console.log(this.props, 'cast ');
    const { casts } = this.state;
    return (
      <div>
        {casts.length === 0 ? (
          <h3>We don`t have this information</h3>
        ) : (
          <ul className={s.Cast}>
            {casts.slice(0, 6).map(el => (
              <li key={el.id}>
                {el.name}
                <img
                  src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
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

export default Cast;

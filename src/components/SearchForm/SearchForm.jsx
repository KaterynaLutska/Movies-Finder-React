import { Component } from 'react';
import PropTypes from 'prop-types';

import s from '../../views/MoviesPage/MoviesPage.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  hanldeChange = e => {
    e.preventDefault();
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
  };

  render() {
    return (
      <div>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.hanldeChange}
          ></input>
          <button className={s.SearchFormButton} type="submit">
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

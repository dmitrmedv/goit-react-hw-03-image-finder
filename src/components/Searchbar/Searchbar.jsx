import css from './Searchbar.module.css';
import { Component } from 'react';
import { GrSearch } from 'react-icons/gr';

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  addSearchQuery = event => {
    const { value } = event.target;
    this.setState({ searchQuery: value });
  };

  submitSearchQuery = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    const { addSearchQuery, submitSearchQuery } = this;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={submitSearchQuery}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>
              <GrSearch size={25} />
            </span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={addSearchQuery}
            value={searchQuery}
          />
        </form>
      </header>
    );
  }
}

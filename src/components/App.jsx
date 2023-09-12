import Searchbar from './Searchbar/Searchbar';
import React, { Component } from 'react';
import PixabayAPI from '../api/pixabay-api.js';
import { ImageGallery } from './ImageGallery/ImageGallery';
import css from 'App.module.css';
import { Button } from './Button/Button';

const pixabayAPI = new PixabayAPI();

export class App extends Component {
  state = {
    query: '',
    hits: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      pixabayAPI.resetPage();
      pixabayAPI.query = this.state.query;
      pixabayAPI
        .fetchImages()
        .then(({ data: { hits } }) => {
          if (hits.length < 1) {
            alert('По вашому запиту нічого не знайдено');
            return;
          }
          pixabayAPI.changePage();
          return this.setState({ hits });
        })
        .catch(error => console.log(error));
    }
  }

  onSubmit = query => {
    this.setState({
      query,
    });
  };

  loadMore = () => {
    pixabayAPI
      .fetchImages()
      .then(({ data: { hits } }) =>
        this.setState(
          prevState => ({
            hits: [...prevState.hits, ...hits],
          }),
          pixabayAPI.changePage()
        )
      )
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={this.state.hits} />
        {!!this.state.hits.length && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}

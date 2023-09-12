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
      pixabayAPI.query = this.state.query;
      pixabayAPI
        .fetchImages()
        .then(
          ({ data: { hits } }) => this.setState({ hits }),
          pixabayAPI.changePage()
        )
        .catch(error => console.log(error));
    }
  }

  onSubmit = query => {
    this.setState({
      query,
    });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={this.state.hits} />
        {this.state.hits.length && <Button />}
      </div>
    );
  }
}

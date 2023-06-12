import { Component } from 'react';
import SearchBar from './Searchbar/';
import ImageGallery from './ImageGallery';
import ApiService from '../servises/api';

const apiService = new ApiService();

export class App extends Component {
  state = {
    data: [],
  };

  fetchImages = searchQuery => {
    apiService.query = searchQuery;
    apiService.fetch().then(({ hits }) => this.setState({ data: hits }));
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.fetchImages} />
        <ImageGallery data={this.state.data} />
      </>
    );
  }
}

// console.log(ApiService);

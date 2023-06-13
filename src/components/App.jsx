import { Component } from 'react';
import css from './App.module.css';
import SearchBar from './Searchbar/';
import ImageGallery from './ImageGallery';
import ApiService from '../servises/api';
import Button from './Button';
import Loader from './Loader';

const apiService = new ApiService();

export class App extends Component {
  state = {
    data: [],
    loading: false,
  };

  fetchImages = searchQuery => {
    this.setState({ data: [], loading: true });
    apiService.query = searchQuery;
    apiService
      .fetch()
      .then(({ hits }) => this.setState({ data: hits, loading: false }));
  };

  loadMoreImeges = () => {
    this.setState({ loading: true });
    apiService.fetch().then(({ hits }) =>
      this.setState(PrevState => ({
        data: [...PrevState.data, ...hits],
        loading: false,
      }))
    );
  };

  render() {
    const { data, loading } = this.state;
    const { fetchImages, loadMoreImeges } = this;

    return (
      <div className={css.App}>
        <SearchBar onSubmit={fetchImages} />
        <ImageGallery data={data} />
        {loading && <Loader />}
        {data.length > 1 && <Button LoadMore={loadMoreImeges} />}
      </div>
    );
  }
}

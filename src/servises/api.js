import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35664660-00618b4ff35f66be868ea843f';

export default class apiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  async fetch() {
    return axios
      .get(
        `${BASE_URL}?&key=${API_KEY}&${this.searchParams}&q=${this.searchQuery}&page=${this.page}`
      )
      .then(result => {
        this.incrementPage();
        return result.data;
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}

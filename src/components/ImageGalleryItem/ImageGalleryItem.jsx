import { Component } from 'react';
import Modal from '../Modal';

import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };

  toggleModal = () => {
    this.setState(({ modal }) => ({ modal: !modal }));
  };

  render() {
    const { toggleModal } = this;
    const { modal } = this.state;
    const { webformatURL, largeImageURL } = this.props.data;

    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt=""
          className={css.ImageGalleryItemImage}
          onClick={toggleModal}
        />
        {modal && (
          <Modal largeImageURL={largeImageURL} onClose={toggleModal}></Modal>
        )}
      </li>
    );
  }
}

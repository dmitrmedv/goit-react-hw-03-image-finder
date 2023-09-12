import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import { Component } from 'react';

// ({ data, toggleModal })

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return this.props.data.map(({ id, webformatURL, largeImageURL, tags }) => {
      return (
        <li className={css.galleryItem} key={id} onClick={this.toggleModal}>
          <img src={webformatURL} alt={tags} />
          {this.state.showModal && (
            <Modal
              largeImageURL={largeImageURL}
              toggleModal={this.toggleModal}
            ></Modal>
          )}
        </li>
      );
    });
  }
}

export default ImageGalleryItem;

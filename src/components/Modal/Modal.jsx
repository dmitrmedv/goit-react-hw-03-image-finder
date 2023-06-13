import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const ModalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  hideModal = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  backDropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.hideModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hideModal);
  }

  render() {
    const { backDropClick } = this;
    const { largeImageURL } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={backDropClick}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>,
      ModalRoot
    );
  }
}

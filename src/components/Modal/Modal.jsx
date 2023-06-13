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

  componentDidMount() {
    console.log('смонтировали');
    window.addEventListener('keydown', this.hideModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hideModal);
    console.log('размонтировали');
  }

  render() {
    const { onClose, largeImageURL } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={onClose}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>,
      ModalRoot
    );
  }
}

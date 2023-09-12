import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.escCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escCloseModal);
  }

  escCloseModal = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

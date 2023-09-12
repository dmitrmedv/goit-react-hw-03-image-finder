import React, { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  render() {
    return (
      <div class={css.overlay}>
        <div class={css.modal}>{this.props.children}</div>
      </div>
    );
  }
}

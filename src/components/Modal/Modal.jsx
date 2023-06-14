import React, { Component } from "react";
import { Overlay, Instance } from './Modal,styled';

export class Modal extends Component {
  state = {
    image: null,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClose);
  }

  handleEscClose = e => {
    if (e.key === 'Escape') {
      this.props.onCloseModal(e);
    }
  }

  handleMouseClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal(e)
    }
  }

  render() {
    return (
      this.props.imagesArr.map((image) => (
        <Overlay
          key={image.id}
          onClick={this.handleMouseClose}>
          <Instance>
            <img
              src={this.props.largeImg}
              alt={image.tags}
            />
          </Instance>
        </Overlay>
      ))
    )
  }
}
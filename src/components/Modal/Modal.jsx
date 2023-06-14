import React, { Component } from "react";
import css from "../Styles/styles.module.css"

export class Modal extends Component {
  // const selectedObj = imagesArr.find(obj => obj.largeImageURL === largeImg);
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
    if (e.code === 'Escape') {
      this.props.onCloseModal();
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
        <div
          key={image.id}
          className={css.Overlay}
          onClick={this.handleMouseClose}>
          <div
            className={css.Modal}>
            <img
              src={this.props.largeImg}
              alt={image.tags}
            />
          </div>
        </div>
      ))
    )
  }
}
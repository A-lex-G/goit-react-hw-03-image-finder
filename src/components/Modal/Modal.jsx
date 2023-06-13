import React from "react";
import css from "../Styles/styles.module.css"

export const Modal = ({ imagesArr }) => {
  
  return (
    imagesArr.map((image) => (
      <div key={image.id} className={css.Overlay}>
        <div  className={css.Modal}>
          <img src={image.largeImageURL} alt="" />
        </div>
      </div>
    ))
  )
}
import css from "./ImageGalleryItem.module.css"
import React from "react";

export const ImageGalleryItem = ({ imagesArr, onClick }) => {
    return (
        imagesArr.map((image) =>  (
            <li key={image.id} className={css.ImageGalleryItem}>
                <img src={image.webformatURL} className={css.ImageGalleryItem_image} alt="" onClick={onClick} />
            </li>)
        )
    )
}
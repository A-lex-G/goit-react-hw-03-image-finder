import css from "./ImageGalleryItem.module.css";
import React from "react";
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ imagesArr, onClick }) => {
    return (
        imagesArr.map((image) =>  (
            <li
                key={image.id}
                className={css.ImageGalleryItem}
                onClick={onClick}>
                <img
                    src={image.webformatURL}
                    className={css.ImageGalleryItem_image}
                    alt={image.tags}
                />
            </li>
        ))
    )
}

ImageGalleryItem.propTypes = {
    imagesArr: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}
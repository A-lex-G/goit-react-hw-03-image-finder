import React from "react";
import PropTypes from 'prop-types';
import { ImgItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imagesArr, onClick }) => {
    return (
        imagesArr.map((image) =>  (
            <ImgItem
                key={image.id}
                onClick={onClick}>
                <Image
                    src={image.webformatURL}
                    alt={image.tags}
                />
            </ImgItem>
        ))
    )
}

ImageGalleryItem.propTypes = {
    imagesArr: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}
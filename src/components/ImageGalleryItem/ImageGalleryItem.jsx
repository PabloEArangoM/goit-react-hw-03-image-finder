import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onClick(image)}>
      <img src={image.webformatURL} alt={image.id} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;

import React, { PropTypes } from 'react';

// First, we extract images, onHandleSelectImage, and selectedImage from props
// via ES6 destructuring assignment; then, render.
const PhotoPage = ({ images, onHandleSelectImage, selectedImage }) => (
  <div className="col-md-6">
    <h2>Images</h2>

    <div className="selected-image">
      <div id={selectedImage.id}>
        <h6>{selectedImage.title}</h6>
        <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
      </div>
    </div>

    <div className="image-thumbnail">
      {images.map((image, i) => (
        <div key={i} onClick={onHandleSelectImage.bind(this, image)}>
          <img src={image.mediaUrl} alt={image.title} />
        </div>
      ))}
    </div>

  </div>
);

// Define PropTypes for destructured props
PhotoPage.propTypes = {
  images: PropTypes.array.isRequired,
  onHandleSelectImage: PropTypes.func.isRequired,
  selectedImage: PropTypes.object
};

export default PhotoPage;

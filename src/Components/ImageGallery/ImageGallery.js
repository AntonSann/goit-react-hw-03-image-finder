import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Styles from './ImageGallery.module.css';

const ImageGallery = ({images, onClick}) => {
return <ul className={Styles.ImageGallery}>
          {images.map((image) => (
              <ImageGalleryItem key={image.id} image={image} onClick={onClick}/>
        ))}
</ul>
}

export default ImageGallery;
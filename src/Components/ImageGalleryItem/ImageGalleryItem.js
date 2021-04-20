import React from 'react';
import Styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({image, onClick}) => {
return <li className={Styles.ImageGalleryItem} >
<img src={image.webformatURL} alt={image.tags} className={Styles.ImageGalleryItem_image} data-largeurl={image.largeImageURL} onClick={onClick} height="100"/>
</li>
}


export default ImageGalleryItem;


          

                  
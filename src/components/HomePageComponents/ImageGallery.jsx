// ImageGallery.js
import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageGallery = ({ images }) => {
    // Convert the image URLs into the format that react-image-gallery expects
    const galleryImages = images.map(url => ({
        original: url,
        thumbnail: url,
    }));

    return( 
        <Gallery 
            items={galleryImages}
            showThumbnails={false} 
            showPlayButton={false} 
            showFullscreenButton={false}
            autoPlay={true} 
            slideInterval={5000} 
        />
    );
};

export default ImageGallery;

import React, { useState, useEffect } from 'react';
import './BannerSlider.css';
function BannerSlider() {
    const images = [require('./BannerImage_1.png'), require('./BannerImage_2.png'), require('./BannerImage_3.png')];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="image-slider-container">
            <div className="image-slider">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className={index === currentImage ? 'active' : ''}
                    />
                ))}
            </div>
        </div>
    );
}

export default BannerSlider;
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../less/main-slider.less';

class GalleryMain extends React.Component {
    render() {
        return (
            <Carousel showThumbs={false} infiniteLoop={true} emulateTouch={true} showStatus={false}>
                <div className="main-slider__el">
                    <picture>
                        <source
                            media="(min-width: 650px)"
                            srcSet="/img/horiz2.jpg"
                        />
                        <img src="/img/mobileret.jpg"></img>
                    </picture>
                </div>
            </Carousel>
        );
    }
}

export default GalleryMain;
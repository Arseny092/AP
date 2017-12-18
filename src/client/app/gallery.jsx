import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class GalleryMain extends React.Component {
    render() {
        return (
            <Carousel showThumbs={false} infiniteLoop={true} emulateTouch={true} autoPlay={true} showStatus={false}>
                <div>
                    <img src='/bd11f268dbe3ec9e9048d2f857ace7d1.jpg'/>
                    <p className="portrait">Awesome Shit</p>
                </div>
                <div>
                    <img src='/bd11f268dbe3ec9e9048d2f857ace7d1.jpg'/>
                    <p className="portrait">Awesome Shit</p>
                </div>
            </Carousel>
        );
    }
}

const PHOTO_MAIN = [
    {
        src: '/bd11f268dbe3ec9e9048d2f857ace7d1.jpg'
    },
    {
        src: '/9e6867f8ed2df7bf77c84295771123f0.jpg'
    }
];

export default GalleryMain;
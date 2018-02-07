import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class PortfGallery extends React.Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    render() {
        return (
            <div>
            <Gallery photos={PHOTO_SET} onClick={this.openLightbox}/>
                <Lightbox images={PHOTO_SET}
                          onClose={this.closeLightbox}
                          onClickPrev={this.gotoPrevious}
                          onClickNext={this.gotoNext}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}
                />
            </div>
        );
    }
}
const PHOTO_SET = [
    {
        src: '/img/desktopret.jpg',
        width: 1920,
        height: 2560
    },
    {
        src: '/img/horiz.jpg',
        width: 1766,
        height: 1179
    },
    {
        src: '/img/desktopret.jpg',
        width: 1920,
        height: 2560
    },
    {
        src: '/img/face1.jpg',
        width: 1198,
        height: 1712
    },
    {
        src: '/img/horiz2.jpg',
        width: 1684,
        height: 1179
    }
];


export default PortfGallery;

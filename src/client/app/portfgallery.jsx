import React from 'react';
import Gallery from 'react-photo-gallery';

class PortfGallery extends React.Component {
    render() {
        return (
            <Gallery photos={PHOTO_SET} />
        );
    }
}
const PHOTO_SET = [
    {
        src: '/bd11f268dbe3ec9e9048d2f857ace7d1.jpg',
        width: 2,
        height: 2
    },
    {
        src: '/9e6867f8ed2df7bf77c84295771123f0.jpg',
        width: 2,
        height: 2
    }
];


export default PortfGallery;

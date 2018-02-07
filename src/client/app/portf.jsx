import React from 'react';

import Header from './header.jsx';
import PortfGallery from './portfgallery.jsx';
import Footer from './footer.jsx';

class Portf extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <PortfGallery list={PHOTO_SET}/>
                <Footer/>
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

export default Portf;
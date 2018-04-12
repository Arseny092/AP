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
        src: '/img/desktop6.jpg',
        srcSet: [
            '/img/mobile6.jpg 320w',
            '/img/tablet6.jpg 640w',
            '/img/desktop6.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 4
    },
    {
        src: '/img/desktop5.jpg',
        srcSet: [
            '/img/mobile5.jpg 320w',
            '/img/tablet5.jpg 640w',
            '/img/desktop5.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 4
        //width: 3,
        //height: 2
    },
    {
        src: '/img/desktop4.jpg',
        srcSet: [
            '/img/mobile4.jpg 320w',
            '/img/tablet4.jpg 640w',
            '/img/desktop4.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 4
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
    },
    {
        src: '/img/desktop1.jpg',
        srcSet: [
            '/img/mobile1.jpg 320w',
            '/img/tablet1.jpg 640w',
            '/img/desktop1.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 4
    },
    {
        src: '/img/desktop7.jpg',
        srcSet: [
            '/img/mobile7.jpg 320w',
            '/img/tablet7.jpg 640w',
            '/img/desktop7.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 4
    },
    {
        src: '/img/desktop10.jpg',
        srcSet: [
            '/img/mobile10.jpg 320w',
            '/img/tablet10.jpg 640w',
            '/img/desktop10.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 4
    },
    {
        src: '/img/desktop9.jpg',
        srcSet: [
            '/img/mobile9.jpg 320w',
            '/img/tablet9.jpg 640w',
            '/img/desktop9.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 4
    }
];

export default Portf;
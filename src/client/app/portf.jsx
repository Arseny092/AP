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
        src: '/img/desktop11.jpg',
        srcSet: [
            '/img/mobile11.jpg 320w',
            '/img/tablet11.jpg 640w',
            '/img/desktop11.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 4
    },
    {
        src: '/img/desktop12.jpg',
        srcSet: [
            '/img/mobile12.jpg 320w',
            '/img/tablet12.jpg 640w',
            '/img/desktop12.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 4
    },
    {
        src: '/img/desktop14.jpg',
        srcSet: [
            '/img/mobile14.jpg 320w',
            '/img/tablet14.jpg 640w',
            '/img/desktop14.jpg 960w'
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
    },
    {
        src: '/img/desktop2.jpg',
        srcSet: [
            '/img/mobile2.jpg 320w',
            '/img/tablet2.jpg 640w',
            '/img/desktop2.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 2
    },
    {
        src: '/img/desktop13.jpg',
        srcSet: [
            '/img/mobile13.jpg 320w',
            '/img/tablet13.jpg 640w',
            '/img/desktop13.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 4
    },
    {
        src: '/img/desktop15.jpg',
        srcSet: [
            '/img/mobile15.jpg 320w',
            '/img/tablet15.jpg 640w',
            '/img/desktop15.jpg 960w'
        ],
        sizes:['(min-width: 320px) 320px, (min-width: 640px) 640px, 960px'],
        width: 3,
        height: 4
    }
];

export default Portf;
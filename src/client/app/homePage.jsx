import React from 'react';
import Header from './header.jsx';
import GalleryMain from './gallery.jsx';
import Footer from './footer.jsx';

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <GalleryMain/>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;
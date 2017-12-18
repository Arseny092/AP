import React from 'react';
import Header from "./header.jsx";
import GalleryMain from "./gallery.jsx";

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <GalleryMain/>
            </div>
        );
    }
}

export default HomePage;
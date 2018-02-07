import React from 'react';

import Header from './header.jsx';
import PortfGallery from './portfgallery.jsx';
import Footer from './footer.jsx';

class Portf extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <PortfGallery/>
                <Footer/>
            </div>
        );
    }
}

export default Portf;
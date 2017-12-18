import React from 'react';

import Header from './header.jsx';
import PortfGallery from './portfgallery.jsx';

class Portf extends React.Component {
    render () {
        return (
            <div>
                <div>привет</div>
                <Header/>
                <PortfGallery/>
            </div>
        );
    }
}

export default Portf;
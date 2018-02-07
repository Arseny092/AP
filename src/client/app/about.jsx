import React from 'react';

import Header from './header.jsx';
import Footer from './footer.jsx';
import AboutContent from './aboutcontent.jsx';

class About extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <AboutContent/>
                <Footer/>
            </div>
        );
    }
}

export default About;
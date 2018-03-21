import React from 'react';

import Header from './header.jsx';
import Footer from './footer.jsx';
import PriceContent from './pricecontent.jsx';

class Price extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <PriceContent/>
                <Footer/>
            </div>
        );
    }
}

export default Price;
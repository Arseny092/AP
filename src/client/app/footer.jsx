import React from 'react';
import '../less/footer.less';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div className="footer-social">
                    <p className="footer-social-content">Feel free to contact us via:</p>
                    <div className="social-cont">
                        <a className="social__item social__item--insta" href="https://twitter.com/"></a>
                        <a className="social__item social__item--fb" href="https://twitter.com/"></a>
                        <a className="social__item social__item--wp" href="https://twitter.com/"></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
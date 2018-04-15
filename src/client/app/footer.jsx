import React from 'react';
import '../less/footer.less';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div className="footer-social">
                    <p className="footer-social-content">Feel free to contact us via:</p>
                    <div className="social-cont">
                        <a className="social__item social__item--insta" href="https://www.instagram.com/arseny.ph"></a>
                        <a className="social__item social__item--fb" href="https://business.facebook.com/arseny.ph/?business_id=1578181575550644"></a>
                        <a className="social__item social__item--wp" href="https://api.whatsapp.com/send?phone=79191072713"></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
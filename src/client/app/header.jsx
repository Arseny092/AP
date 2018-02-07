import React from 'react';
import { Link } from 'react-router-dom';
import '../less/header.less';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <nav className="nav">
                    <div className="nav-wrapper">
                        <ul className="nav-items">
                            <li className="nav-item"><Link to='/'>Main</Link></li>
                            <li className="nav-item"><Link to='/about'>About</Link></li>
                            <li className="nav-item">Price</li>
                            <li className="nav-item"><Link to='/portfolio'>Portfolio</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
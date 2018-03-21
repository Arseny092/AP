
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Portf from './portf.jsx';
import HomePage from './homePage.jsx';
import About from './about.jsx';
import Price from './price.jsx';

class App extends React.Component {
    render () {
        return (
            <div className="primary-layout">
                <main>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/portfolio" component={Portf} />
                        <Route path="/about" component={About} />
                        <Route path="/price" component={Price} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
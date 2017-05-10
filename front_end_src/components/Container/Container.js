import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import Navigator from '../Navigator/Navigator';

import Home from '../Home/Home';
import TodoContainer from '../TodoContainer/TodoContainer';
import BoardContainer from '../BoardContainer/BoardContainer';

import NotFound from '../NotFound/NotFound';

class componentName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Navigator/>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/todo" component={TodoContainer}/>
                            <Route path="/board/:name" component={BoardContainer}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default componentName;

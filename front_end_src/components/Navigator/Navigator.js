import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navigator.css';

class Navigator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navigator">
                <NavLink
                    exact to="/"
                    className="item"
                    activeClassName="active">
                    Home
                </NavLink>
                <NavLink
                    to="/todo"
                    className="item"
                    activeClassName="active">
                    Todo
                </NavLink>
                <NavLink
                    to="/board/jbee"
                    className="item"
                    activeClassName="active">
                    Board
                </NavLink>
            </div>
        );
    }
}

export default Navigator;

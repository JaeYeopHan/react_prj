import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const propTypes = {};

const defaultProps = {};

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>0</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/all">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>

                </ul>
            </footer>
        );
    }
}

Footer.PropTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;

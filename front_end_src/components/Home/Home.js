import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {

};

const defaultProps = {

};

class componentName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Today is {new Date().toDateString()}.
            </div>
        );
    }
}

componentName.PropTypes = propTypes;
componentName.defaultProps = defaultProps;

export default componentName;

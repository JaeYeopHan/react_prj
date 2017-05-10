import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class componentName extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.name);
    }

    render() {
        return (
            <div>
                BoardContainer
            </div>
        );
    }
}

componentName.PropTypes = propTypes;
componentName.defaultProps = defaultProps;

export default componentName;

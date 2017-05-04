import React, { Component } from 'react';

import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li id={this.props.id}>
                {this.props.todo}
            </li>
        );
    }
}

Todo.defaultProps = {
    todo: "undefined"
};

export default Todo;

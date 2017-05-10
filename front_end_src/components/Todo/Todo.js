import React, {Component} from 'react';

import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick({target}) {
        target.classList.toggle('completed');
        console.log(target);
    }

    render() {
        if (this.props.completed) {
            return (
                <li
                    className="completed"
                    id={this.props.id}
                    onClick={this.handleClick}
                >
                    {this.props.todo}
                </li>
            );
        } else {
            return (
                <li
                    id={this.props.id}
                    onClick={this.handleClick}
                >
                    {this.props.todo}
                </li>
            );
        }
    }
}

Todo.defaultProps = {
    todo: "undefined"
};

export default Todo;

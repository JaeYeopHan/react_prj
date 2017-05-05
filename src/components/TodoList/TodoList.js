import React, { Component } from 'react';
import PropsTypes from 'prop-types';

import Todo from '../Todo/Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const mapToComponent = this.props.todos.map((data, i) => {
            return (
                <Todo id={i} todo={data.todo} completed={data.completed}/>
            );
        });
        return (
            <ul className="todoList">
                {mapToComponent}
            </ul>
        );
    }
}

TodoList.PropTypes = {
    todos: PropsTypes.array
};

TodoList.defaultProps = {
    todos: []
};

export default TodoList;

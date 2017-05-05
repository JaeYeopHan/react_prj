import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import './TodoInput.css';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            completed: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange({target}) {
        let newValue = {};
        newValue[target.name] = target.value;
        this.setState(newValue);
        this.nameInput.focus();
    }

    handleKeyPress({which, target}) {
        if (which === 13 && target.value.trim() !== "") {
            console.log("target.value: ", target.value);
            this.props.handleCreate(target.value);
            this.state = {
                todo: ''
            }
        }
    }

    render() {
        return (
            <input
                className="newTodo"
                type="text"
                name="todo"
                placeholder="What to do?"
                value={this.state.todo}
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
                ref={ref => this.nameInput = ref}
            />
        );
    }
}

TodoInput.PropTypes = {
    handleKeyPress: PropsTypes.func
};

TodoInput.defaultProps = {
    handleKeyPress: () => console.warn("handleChange function is not defined")
};

export default TodoInput;

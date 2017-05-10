import React, {Component} from 'react';
import update from 'react-addons-update';

import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';
import './TodoContainer.css';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                todo: "posting",
                completed: false
            }, {
                todo: "study",
                completed: false
            }, {
                todo: "meeting",
                completed: true
            }]
        };

        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate(value) {
        const newTodo = {
            todo: value
        };
        this.setState({
            todos: update(this.state.todos, {$push: [newTodo]})
        });
        console.log(`setState() execute asynchronous!!!`);
    }

    render() {
        return (
            <div className="Container">
                <TodoInput handleCreate={this.handleCreate}/>
                <TodoList todos={this.state.todos}/>
                <Footer/>
            </div>
        );
    }
}

export default Container;

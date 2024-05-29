import React, { Component } from "react";
import "./styles.css";

export class TodoList extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card px-3">
                            <div className="card-body">
                                <h1 className="card-title text-2xl">
                                    To Do List
                                </h1>
                                <TodoListComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class TodoListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    task: "Pick up kids from school",
                    isCompleted: false,
                },
                {
                    id: 2,
                    task: "Prepare for presentation",
                    isCompleted: true,
                },
                {
                    id: 3,
                    task: "Print Statements",
                    isCompleted: false,
                },
                {
                    id: 4,
                    task: "Create invoice",
                    isCompleted: false,
                },
                {
                    id: 5,
                    task: "Call John",
                    isCompleted: true,
                },
                {
                    id: 6,
                    task: "Meeting with Alisa",
                    isCompleted: false,
                },
            ],
            inputValue: "",
        };

        this.statusChangedHandler = this.statusChangedHandler.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    statusChangedHandler(event, id) {
        const todo = { ...this.state.todos[id] };
        todo.isCompleted = event.target.checked;

        const todos = [...this.state.todos];
        todos[id] = todo;

        this.setState({
            todos: todos,
        });
    }

    addTodo(event) {
        event.preventDefault();

        const todos = [...this.state.todos];
        todos.unshift({
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            task: this.state.inputValue,
            isCompleted: false,
        });

        this.setState({
            todos: todos,
            inputValue: "",
        });
    }

    removeTodo(index) {
        const todos = [...this.state.todos];
        todos.splice(index, 1);

        this.setState({
            todos: todos,
        });
    }

    inputChangeHandler(event) {
        this.setState({
            inputValue: event.target.value,
        });
    }

    render() {
        return (
            <>
                <form
                    className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
                    onSubmit={this.addTodo}
                >
                    <input
                        type="text"
                        className="form-control bg-white rounded-md py-2 px-4 w-3/4 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="What do you need to do today?"
                        value={this.state.inputValue}
                        onChange={this.inputChangeHandler}
                        required
                    />
                    <button
                        type="submit"
                        className="btn-primary px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
                    >
                        Add
                    </button>
                </form>
                <div className="list-wrapper mt-4">
                    <ul className="divide-y divide-gray-200">
                        {this.state.todos.map((todo, index) => {
                            return (
                                <ListItem
                                    isCompleted={todo.isCompleted}
                                    changed={(event) =>
                                        this.statusChangedHandler(event, index)
                                    }
                                    key={todo.id}
                                    remove={() => this.removeTodo(index)}
                                    className="py-4"
                                >
                                    {todo.task}
                                </ListItem>
                            );
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

const ListItem = (props) => {
    return (
        <li className={props.isCompleted ? "completed" : null}>
            <div className="form-check">
                <label htmlFor="" className="form-check-label">
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={props.isCompleted}
                        onChange={props.changed}
                    />{" "}
                    {props.children} <i className="input-helper"></i>
                </label>
            </div>
            <i className="remove mdi mdi-close-box" onClick={props.remove}></i>
        </li>
    );
};

export default TodoList;

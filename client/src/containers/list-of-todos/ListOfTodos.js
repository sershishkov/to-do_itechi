import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getAllTodos,
  deleteOneTodo,
  getOneTodo
} from "../../store/actions/actionsTodo";

import ItemTodo from "../../components/item-todo/ItemTodo";

import "./ListOfTodos.scss";

class ListOfTodos extends Component {
  componentDidMount() {
    this.props.getAllTodos();
  }
  deleteTodo = id => {
    this.props.deleteOneTodo(id);
    this.props.getAllTodos();
  };
  getOneTodoToEdit = id => {
    this.props.getOneTodo(id);
  };

  render() {
    const { todos } = this.props;
    const displayList = todos.map((todo, i) => (
      <li key={todo._id} className="main-item list-group-item">
        <div className="main-item-content">
          <ItemTodo label="Задача№" number={i + 1} text={todo.mainTask} />
          <div>
            <Link
              to={`/edit-todo/${todo._id}`}
              className="btn btn-outline-success"
              onClick={() => this.getOneTodoToEdit(todo._id)}
            >
              <i className="fa fa-exclamation" />
            </Link>
            <button
              onClick={() => this.deleteTodo(todo._id)}
              className="btn btn-outline-danger"
            >
              <i className="fa fa-trash-o" />
            </button>
          </div>
        </div>{" "}
        <div className="sub-item-content">
          <ul className="list-group todo-list">
            {todo.subTask.map((sub_t, i) => (
              <li key={sub_t.id} className="list-group-item sub-item">
                <ItemTodo
                  label="Под Задача№"
                  number={i + 1}
                  text={sub_t.subText}
                />
              </li>
            ))}
          </ul>
        </div>
      </li>
    ));
    return (
      <div className="ListOfTodos">
        <div className="container">
          <div>
            <Link to="/create-todo" className="btn btn-outline-primary">
              {" "}
              Создать задачу
            </Link>
          </div>
          <h1> Список задач </h1>
          <ul className="list-group todo-list">{displayList}</ul>
        </div>
      </div>
    );
  }
}
ListOfTodos.propTypes = {
  todos: PropTypes.array.isRequired,
  getAllTodos: PropTypes.func.isRequired,
  deleteOneTodo: PropTypes.func.isRequired,
  getOneTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};

export default connect(
  mapStateToProps,
  { getAllTodos, deleteOneTodo, getOneTodo }
)(ListOfTodos);

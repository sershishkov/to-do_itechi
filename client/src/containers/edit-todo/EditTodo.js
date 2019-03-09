import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  createSubTodo,
  getAllSubTodos,
  deleteOneSubTodo,
  clearAllSubTodo
} from "../../store/actions/actionsSubTodo";
import { updateOneTodo } from "../../store/actions/actionsTodo";

import ItemTodo from "../../components/item-todo/ItemTodo";

import "./EditTodo.scss";
const uuidv1 = require("uuid/v1");

class EditTodo extends Component {
  state = {
    mainTask: "",
    subText: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      mainTask: this.props.oneTodo.mainTask
    });
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addSubTodo = e => {
    e.preventDefault();
    const newSubTodo = {
      id: uuidv1(),
      subText: this.state.subText
    };

    this.setState({
      subText: ""
    });
    this.props.createSubTodo(newSubTodo);
  };

  delSubTodo = id => {
    this.props.deleteOneSubTodo(id);
  };

  updateTodo = e => {
    e.preventDefault();
    const newTodo = {
      mainTask: this.state.mainTask,
      subTask: this.props.subTodos
    };
    this.props.updateOneTodo(this.props.match.params.id, newTodo);
    this.props.history.push("/");
    this.props.clearAllSubTodo();
  };

  render() {
    const { subTodos } = this.props;
    const listSubTodos =
      subTodos.length > 0
        ? subTodos.map((sub_t, i) => {
            return (
              <li key={sub_t.id} className="list-group-item create-sub-item">
                <ItemTodo
                  label="Под Задача№"
                  number={i + 1}
                  text={sub_t.subText}
                />
                <span>
                  {" "}
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => this.delSubTodo(sub_t.id)}
                  >
                    <i className="fa fa-trash-o" />
                  </button>{" "}
                </span>
              </li>
            );
          })
        : null;
    return (
      <div className="CreateTodo">
        <div className="container">
          <form>
            <div>
              <label>
                {" "}
                <h4> Основная задача</h4>
                <input
                  type="text"
                  name="mainTask"
                  onChange={this.onChange.bind(this)}
                  value={this.state.mainTask}
                  className="form-control"
                />
              </label>
            </div>

            <div>
              <label>
                {" "}
                <h4> Подзадача</h4>
                <input
                  type="text"
                  name="subText"
                  onChange={this.onChange.bind(this)}
                  value={this.state.subText}
                  className="form-control"
                />
              </label>
              <button
                onClick={this.addSubTodo}
                className="btn btn-outline-primary"
                disabled={!this.state.subText}
              >
                Добавить под задачу
              </button>
            </div>
            <ul className="list-group todo-list">{listSubTodos}</ul>

            <button
              onClick={this.updateTodo}
              className="btn btn-outline-success"
              disabled={!this.state.mainTask}
            >
              Обновить
            </button>
          </form>
        </div>
      </div>
    );
  }
}
EditTodo.propTypes = {
  subTodos: PropTypes.array.isRequired,
  createSubTodo: PropTypes.func.isRequired,
  getAllSubTodos: PropTypes.func.isRequired,
  deleteOneSubTodo: PropTypes.func.isRequired,
  clearAllSubTodo: PropTypes.func.isRequired,
  updateOneTodo: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    subTodos: state.subTodos.subTodos,
    oneTodo: state.todos.oneTodo
  };
};

export default connect(
  mapStateToProps,
  {
    createSubTodo,
    getAllSubTodos,
    deleteOneSubTodo,
    clearAllSubTodo,
    updateOneTodo
  }
)(EditTodo);

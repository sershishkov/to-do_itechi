import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ListOfTodos from "./containers/list-of-todos/ListOfTodos";
import CreateTodo from "./containers/create-todo/CreateTodo";
import EditTodo from "./containers/edit-todo/EditTodo";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={ListOfTodos} />
              <Route exact path="/create-todo" component={CreateTodo} />
              <Route exact path="/edit-todo/:id" component={EditTodo} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

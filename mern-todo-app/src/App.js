import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';


class App extends Component {
  render(){
    return(
      <Router>
      <div className="container">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="http://localhost:3000/">CRUD</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link to="/" className="nav-link">Todos</Link>
      </li>
      <li className="nav-item">
      <Link to="/create" className="nav-link">Create</Link>
      </li>      
      <li className="nav-item">
      <Link to="/edit/:id" className="nav-link">Edit</Link>
      </li>
    </ul>
  </div>
</nav>

      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
      </div>
      </Router>
    );
  }
}

export default App;

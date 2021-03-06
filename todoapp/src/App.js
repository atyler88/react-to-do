import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddForm'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo =(todo) => {
    let newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's<br></br>
        <svg id='color-fill' xmlns='http://www.w3.org/2000/svg' height='300'>
          <polygon className='hex' points='300,150 225,280 75,280 0,150 75,20 225,20'fill='#fa5' transform="rotate(90, 150, 150)"/>
        </svg></h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'

export class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: "",
    }
  }

  hanldeChange = event => {
    console.log(event.target.value);
  };

  addItem = event => {
    event.preventDefault();
    console.log("addItem Method fired")
  }
  
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name: </label>
          <input onChange={this.hanldeChange} name="taskName" type="input" placeholder="Add todo here!"/>
          <button type="submit">Add Task</button> 
        </form>
        
      </div>
    );
  }
}

export default TodoList

import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      item: " ",
    }
  }
  addItem = newItemText => { 

    const newItem = {
      task: newItemText, 
      id: Date.now(),
      completed: false,  

    }
    this.setState({
      item: [...this.state.item, newItem]
    })
  }
  clearItem = () => { 
    this.setState({
      item: ""
    })
  }
  toggleTodoComplete = id => {
    let todolist = this.state.item.slice().map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        return todo
      }
      else {
        return todo
      }
    })
    this.setState({todolist})
  }

  clearCompleted = (e) => { 
    e.preventDefault();
    let completed = this.state.item.slice().filter(comp => { 
        if (comp.completed === true){
          return comp.task = "";
        }
    })
    this.setState({completed})
    
  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem = {this.addItem} clearItem={this.clearCompleted}/>
        <TodoList items = {this.state.item} toggleTodoComplete={this.toggleTodoComplete}/>
        {/* <div>{this.state.item}</div> */}
      </div>
    );
  }
}

export default App;

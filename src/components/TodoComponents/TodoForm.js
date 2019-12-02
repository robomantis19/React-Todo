import React from 'react';

class TodoForm extends React.Component {
  
    constructor() {
        super();
        this.state = {
            newItem: ''
        }
    }

    handleChange = e => {
        this.setState({newItem: e.target.value})
    }

    handleSubmit = e => { 
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({newItem: ""})
    }
    

  render() {
    return (
        <div>
            <form onSubmit = {this.handleSubmit}>
                <input
                    type = "text"
                    name = "item" 
                    value = {this.state.newItem}
                    onChange = {this.handleChange}
                    
                />
                <button>Add Todo</button>
                <button onClick={this.props.clearItem}>Clear</button>
            </form>
        
            {/* {this.props.item} */}
            {/* {this.state.newItem} */}
        </div>
    );
  }
}

export default TodoForm;
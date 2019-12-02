// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = props =>  {
  

 
        return (
          <div>
            
            {props.items.length > 1 ? props.items.map( element => (
                
                <Todo key={element.id} item={element} toggleTodoComplete={props.toggleTodoComplete}/>
            
            )) : false}
            
            
          </div>
        );

}

export default TodoList
import React from 'react';

const Todo = props =>  {
  
        
 
        return (
          <div  onClick={ () => props.toggleTodoComplete(props.item.id)} style = { props.item.completed ? {textDecoration: `line-through darkRed` , color: 'grey'}: null}>
            {props.item.task}
          </div>
        );
   
}

export default Todo
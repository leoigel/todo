import React from 'react'
import Button from '../components/buttons/Button';
function Todo({todo,handleMarked}) {
  return (
     <li key={todo.id}>
    <span> Title : {todo.title}</span><br/>
     <span> Completed : {!todo.completed? (
        <>                           
        {todo.completed.toString()} 
        <Button onClick={() => handleMarked(todo.id)}>Mark Completed</Button>
        </> 
        ):todo.completed.toString()}</span><br/>                            
    </li>
  )
}

export default Todo
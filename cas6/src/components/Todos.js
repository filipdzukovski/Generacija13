import React from 'react';
import PropTypes from 'prop-types';

export const Todos = ({listOfTodos,markTodoAsDone}) =>{

    return(
      <ol>
          {listOfTodos.map((todo,i)=>{
                return(
                    <li className={todo.done ? "marked-done" : ""} key={todo.id}>
                        <span>{todo.todoText}</span>
                        <input 
                            type="checkbox"
                            value={todo.done}
                            checked={todo.done}
                            onChange={()=>markTodoAsDone(todo)}
                        />
                    </li>
                )
          })}
      </ol>
    )
}

Todos.propTypes = {
    listOfTodos:PropTypes.arrayOf(PropTypes.object),
    markTodoAsDone:PropTypes.func
}
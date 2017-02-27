import * as React from 'react'
import TodoComponent from './Todo'
import Todo from '../state/todo'

const TodoList = (props: {todos: Array<Todo>, onTodoClick: (id: number) => void}): JSX.Element =>
{ 
  return (
  <ul>
      {props.todos.map(todo =>
        <TodoComponent
          key={todo.id}
          {...todo}
          onClick={() => props.onTodoClick(todo.id)}
        />
      )}
    </ul>
)};

export default TodoList;
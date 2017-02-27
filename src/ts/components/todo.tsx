import * as React from 'react'

const Todo = (props: { onClick: () => void, completed: boolean, message: string}): JSX.Element => (
  <li
    onClick={props.onClick}
    style={{
      textDecoration: props.completed ? 'line-through' : 'none'
    }}
  >
    {props.message}
  </li>
);

export default Todo;
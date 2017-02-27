import { combineReducers } from 'redux'
import { Action, ADD_TODO } from "../actions";
import { Todo } from "../state/todo";


function todos(state = new Array<Todo>(), action: any) : Array<Todo> {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          message: action.payload
        }
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp
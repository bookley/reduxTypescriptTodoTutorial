import { combineReducers } from 'redux'
import { Action, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "../actions";
import  Todo  from "../state/todo";
import VisibilityFilter from "../state/visibilityFilter";

function visibilityFilter(state = VisibilityFilter.SHOW_ALL, action: any): VisibilityFilter {
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
}

function todos(state = new Array<Todo>(), action: any) : Array<Todo> {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          message: action.payload.text,
          completed: false
        }
      ]
    case TOGGLE_TODO: {
      return state.map((todo, index) => {
        if(todo.id === action.payload.index){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      });
    }
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
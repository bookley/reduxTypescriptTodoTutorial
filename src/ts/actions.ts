import VisibilityFilter from './state/visibilityFilter'

export interface Action<T>{
  type: string;
  payload: T;
  error?: boolean;
  meta?: any;
}


export const ADD_TODO: string = "ADD_TODO";
export type ADD_TODO = {text: string};
export function addTodo(todoDescription: string): Action<ADD_TODO> {
    return {
        type: ADD_TODO,
        payload: {
            text: todoDescription
        }
    };
}

export const TOGGLE_TODO: string = "TOGGLE_TODO";
export type TOGGLE_TODO = {index: number};
export function toggleTodo(index: number): Action<TOGGLE_TODO>{
    return {
        type: TOGGLE_TODO,
        payload: {
            index: index
        }
    };
}

export const SET_VISIBILITY_FILTER: string = "SET_VISIBILITY_FILTER";
export type SET_VISIBILITY_FILTER = { filter: VisibilityFilter }
export function setVisibilityFilter(filter: VisibilityFilter){
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter: filter
        }
    }
}
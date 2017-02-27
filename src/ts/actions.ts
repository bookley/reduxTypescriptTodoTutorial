export interface Action<T>{
  type: string;
  payload: T;
  error?: boolean;
  meta?: any;
}


export const ADD_TODO: string = "ADD_TODO";
export type ADD_TODO = {text: string}

export function addTodo(todoDescription: string): Action<ADD_TODO> {
    return {
        type: ADD_TODO,
        payload: {
            text: todoDescription
        }
    }
}
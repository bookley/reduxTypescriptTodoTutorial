import Todo from './todo';
import VisibilityFilter from './visibilityFilter';

export interface State {
    todos: Todo[],
    visibilityFilter: VisibilityFilter
}

export default State;
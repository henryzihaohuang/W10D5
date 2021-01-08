import todosReducer from './todos_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    // debugger
    todos: todosReducer
})

export default rootReducer;
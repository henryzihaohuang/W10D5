import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions'



// const initialState = {
//     1: {
//         id: 1,
//         title: "wash car",
//         body: "with soap",
//         done: false
//     },
//     2: {
//         id: 2,
//         title: "wash dog",
//         body: "with shampoo",
//         done: true
//     }
// };



const todosReducer = (state = {}, action) => {
    // Object.freeze(state);
    switch( action.type ) {
        case RECEIVE_TODOS:
            let newState = {}
            action.todos.forEach(todo => {
                newState[todo.id] = todo
            })
            return newState;
        case RECEIVE_TODO:
            let newTodo = { [action.todo.id]: action.todo }
            return Object.assign({}, state, newTodo)
        default:
            return state;
    }
};


export default todosReducer;
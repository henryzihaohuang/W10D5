import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

//testing - dont forget
import allTodos from './reducers/selectors.js'
import {receiveTodo} from './actions/todo_actions'




document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root')
    const store = configureStore()

    // debugger
    //testing
    window.receiveTodo = receiveTodo;
    window.store = configureStore();
    window.allTodos = allTodos;
    //testing

    ReactDOM.render(<Root store={store}/>, root)

});

import React from 'react';
import ReactDOM from 'react-dom';

import store from './store/store';
import app from './components/app'
import Root from './components/root'

//testing - dont forget
import allTodos from './reducers/selectors.js'
import {receiveTodo} from './actions/todo_actions'
import receiveTodos from './actions/todo_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root')
    window.receiveTodo = receiveTodo;
    window.store = store();
    window.selector = allTodos;

    ReactDOM.render(<Root store={store()}/>, root)

});

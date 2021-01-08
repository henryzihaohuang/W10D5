import React from 'react';
import connect from './todo_list_container';

class TodoListItem extends React.Container{
    constructor(props){
        super(props)
    }
    
    render() {
        const {todo} = this.prop;
        const {title} = todo;
        
debugger;
    return (
        <li> {title} </li>
    ) }
};

export default TodoListItem;
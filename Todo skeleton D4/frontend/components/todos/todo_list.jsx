import React from 'react';
import TodoListItem from './todo_list_item'

// export default () => {
    
//     <ul>
//         <h3>Todo List goes here!</h3>
//         <li>{store.id.title}</li>
//     </ul>

// }

class ToDoList extends React.Component {
   
    render() {
        const {todos, receiveTodo} = this.props
        

        // const titles = this.props.todos.map((el) => {
        //     return el.title
        // });

debugger
        return(
            
            <ul>
                <TodoListItem todo={todo} />
            </ul>
        )

    }
}

export default ToDoList;


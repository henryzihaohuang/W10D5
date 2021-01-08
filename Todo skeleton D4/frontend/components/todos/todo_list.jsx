import React from 'react';


// export default () => {
    
//     <ul>
//         <h3>Todo List goes here!</h3>
//         <li>{store.id.title}</li>
//     </ul>

// }

class ToDoList extends React.Component {
   
    render() {
        const {todos, receiveTodo} = this.props
        

        const titles = this.props.todos.map((el) => {
            return el.title
        });

debugger
        return(
            
            <ul>
                <li>{this.props.todos.title}</li>
            </ul>
        )

    }
}

export default ToDoList;


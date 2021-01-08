import configureStore from '../store/store'


const allTodos = (store) => {
    // debugger
    const ids = Object.keys(store.todos)
    console.log(ids);

    const mappedIds = ids.map(id => store.todos[id]);
// debugger
    return mappedIds;
}

export default allTodos;
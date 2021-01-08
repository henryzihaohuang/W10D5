import configureStore from '../store/store'


const allTodos = (store) => {
    debugger
    const ids = Object.keys(store)
    console.log(ids);

    const mappedIds = ids.map(id => store[id]);

    return mappedIds;
}

export default allTodos;
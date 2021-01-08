
const allTodos = ({store}) => {
    return Object.keys(store).map(id=>{
     store[id]});
}

export default allTodos;
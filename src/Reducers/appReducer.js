function AppReducer(prevState, action) {
    switch (action.type) {
        case 'init_todo' : 
        let {todos} = action.payload;
        return {
            ...prevState,
            todos
        }
        case 'add_todo':
            return addTodo(prevState, action);
        case 'delete_todo':
            return deleteTodo(prevState, action);
        case 'toggle_todo':
            return toggleTodo(prevState, action);
        case 'edit_todo':
            return editTodo(prevState, action);
        default:
            return prevState;
    };
}

export default AppReducer;

let addTodo = (prevState, action) => {
    let { todo } = action.payload;
    console.log(todo)
    return {
        ...prevState,
        todos: [
            ...prevState.todos,
            todo
        ]
    }
}

let deleteTodo = (prevState, action) => {
    let { key } = action.payload;
    return {
        ...prevState,
        todos: prevState.todos.filter(todo => key !== todo.key)
    }
}

let toggleTodo = (prevState, action) => {
    let { key } = action.payload;
    let item = prevState.todos.find(item => item.key === key)
    item.done = !item.done;

    let newTodos = prevState.todos.filter(item => item.key !== key)

    return {
        ...prevState,
        todos: [
            ...newTodos,
            item
        ]
    }
}

let editTodo = (prevState, action) => {
    let { key, text } = action.payload;
    let item = prevState.todos.find(item => item.key === key)
    item.text = text;

    let newTodos = prevState.todos.filter(item => item.key !== key)

    return {
        ...prevState,
        todos: [
            ...newTodos,
            item
        ]
    }
}

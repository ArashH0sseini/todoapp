function AppReducer(prevState, action) {
    switch (action.type) {
        case 'add_todo':
            return addTodo(prevState, action)
            break;
        case 'delete_todo':
            return deleteTodo(prevState, action)
            break;
        case 'toggle_todo':
            return toggleTodo(prevState, action)
            break;
        case 'edit_todo':
            return editTodo(prevState, action)
            break;
        default:
            return prevState;
            break;
    }
}

export default AppReducer;

let addTodo = (prevState, action) => {
    let { text } = action.payload;
    return {
        ...prevState,
        todos: [
            ...prevState.todos,
            { key: Date.now(), done: false, text },
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

// const [todos, setTodos] = useState([])

// const addTodo = (text) => {
//   setTodos((preveState) => [
//     ...preveState,
//     { key: Date.now(), done: false, text },
//   ]);
// }

// const deleteTodo = (key) => {
//   setTodos(
//     todos.filter(todo => key !== todo.key)
//   )
// }

// const editTodo = (key, text) => {
//   let item = todos.find(item => item.key === key)
//   item.text = text;

//   let newTodos = todos.filter(item => item.key !== key)

//   setTodos([...newTodos, item])
// }

// const toggleTodo = (key) => {
//   let item = todos.find(item => item.key === key)
//   item.done = !item.done;

//   let newTodos = todos.filter(item => item.key !== key)

//   setTodos([...newTodos, item])
// }
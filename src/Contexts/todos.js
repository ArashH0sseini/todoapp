import { createContext } from "react";

const todosContext = createContext({
    todos: [],
    add: () => { },
    delete: () => { },
    done: () => { },
    edit: () => { },
})

export default todosContext
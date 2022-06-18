import { useState } from 'react';
//import components
import Header from './Components/Layouts/Header'
import FormAddTodo from './Components/Todo/FormAddTodo';
import TodoList from './Components/Todo/TodoList';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos((preveState) => [
      ...preveState,
      { key: Date.now(), done: false, text },
    ]);
  }

  const deleteTodo = (key) => {
    setTodos(
      todos.filter(todo => key !== todo.key)
    )
  }

  const editTodo = (key, text) => {
    let item = todos.find(item => item.key === key)
    item.text = text;

    let newTodos = todos.filter(item => item.key !== key)

    setTodos([...newTodos, item])
  }

  const toggleTodo = (key) => {
    let item = todos.find(item => item.key === key)
    item.done = !item.done;

    let newTodos = todos.filter(item => item.key !== key)

    setTodos([...newTodos, item])
  }

  return (
    <div>
      <Header />
      <main>
        <section className='px-20'>
          <div className='flex flex-col justify-center items-center bg-white/20 p-10 space-y-4'>
            <h1 className='text-white text-4xl'>
              Welcome!
            </h1>
            <p className='text-white'>
              To get gtarted, add some items to your list:
            </p>
            <FormAddTodo add={addTodo} />
          </div>
          <div className='mt-5'>
            <TodoList
              todos={todos}
              delete={deleteTodo}
              done={toggleTodo}
              edit={editTodo} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

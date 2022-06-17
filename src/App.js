import { useState } from 'react';
//import components
import Header from './Components/Header'
import FormAddTodo from './Components/FormAddTodo';
import Todo from './Components/Todo'

function App() {
  const [todos, setTodos] = useState([])
  const [statusDone, setStatusDone] = useState(false)

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

  const toggleTodo = (key) => {
    let item = todos.find(item => item.key === key)
    item.done = !item.done;

    let newTodos = todos.filter(item => item.key !== key)

    setTodos([...newTodos, item])
  }

  let filterTodos = todos.filter(item => item.done === statusDone)
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
            <nav>
              <div className='space-x-3 my-4'>
                <button className='bg-white p-2 rounded-md' onClick={() => setStatusDone(false)}>undone<span className='bg-red-700 rounded-lg px-2 text-white text-center mx-1 text-sm '>{todos.filter(item => item.done === false).length}</span></button>
                <button className='bg-white p-2 rounded-md' onClick={() => setStatusDone(true)}>done<span className='bg-green-600 rounded-lg px-2 text-white text-center mx-1 text-sm '>{todos.filter(item => item.done === true).length}</span></button>
              </div>
            </nav>
            {
              filterTodos.length === 0 ? <p className='text-center bg-white/20 text-white p-4 rounded-md'>There isnt any todos</p> :
                filterTodos.map(item => <Todo key={item.key} items={item} delete={deleteTodo} done={toggleTodo} />)
            }
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

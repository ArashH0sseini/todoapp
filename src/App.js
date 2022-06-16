import { useState } from 'react';
//import components
import Header from './Components/Header'
import FormAddTodo from './Components/FormAddTodo';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos((preveState) => [
      ...preveState,
      { key: Date.now(), done: false, text },
    ]);
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
        </section>
      </main>
    </div>
  );
}

export default App;

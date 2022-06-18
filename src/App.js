import { useReducer, useEffect, useState } from 'react';
//import components
import Header from './Components/Layouts/Header'
import FormAddTodo from './Components/Todo/FormAddTodo';
import TodoList from './Components/Todo/TodoList';
import TodoLoader from './Components/Todo/TodoLoader'

// import Contexts
import todosContext from './Contexts/todos';

//import Reducers
import AppReducer from './Reducers/appReducer'

//import Api
import todosApi from './Api/todos'

function App() {
  const [state, dispatch] = useReducer(AppReducer, {
    todos: []
  })

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    todosApi.get(`/todos.json`)
      .then(response => jsonHandler(response.data))
      .catch(err => console.log(err))
  }, [])

  let jsonHandler = (data) => {
    setTimeout(()=>{
      setLoading(false)
      let todos = Object.entries(data).map(([key, value]) => {
        return {
          ...value,
          key
        }
      });
      dispatch({ type: "init_todo", payload: { todos } })
    },1500)
  }


  return (
    <todosContext.Provider value={{
      dispatch,
      todos: state.todos,
    }}>
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
              <FormAddTodo />
            </div>
            <div className='mt-5'>
              {
                loading ?
                  (<TodoLoader />)
                  :
                  (<TodoList />)
              }
            </div>
          </section>
        </main>
      </div>
    </todosContext.Provider>
  );
}

export default App;

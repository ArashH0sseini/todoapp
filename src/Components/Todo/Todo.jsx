import React, { useState, useContext } from "react";
import EditTodos from "./EditTodos";
import TodosContext from "../../Contexts/todos";
import todosApi from '../../Api/todos'


const Todo = (props) => {
  const [edit, setEdit] = useState(false);
  const todosContext = useContext(TodosContext);
  let editHandler = (text) => {
    todosApi.put(`/todos/${props.items.key}.json`,{done:props.items.done,text})
    .then(response=>todosContext.dispatch({type:'edit_todo',payload:{key:props.items.key, text}})
    .catch(err=>console.log(err))
    )
    setEdit(false);
  };
  let deleteHandler = (e) => {
    //ajax
    todosApi.delete(`/todos/${props.items.key}.json`)
    .then(response=> todosContext.dispatch({ type: "delete_todo", payload: { key: props.items.key } }))
    .catch(err=>console.log(err))
  };

  let doneHandler=()=>{
    todosApi.put(`/todos/${props.items.key}.json`,{done:!props.items.done,text:props.items.text})
    .then(response=>todosContext.dispatch({type:'toggle_todo',payload:{key:props.items.key}}))
    .catch(err=>console.log(err))
  }

  return (
    <>
      {!edit ? (
        <div className="flex bg-white/20 mt-5 rounded-md p-2 justify-between items-center">
          <div className="text-white">{props.items.text}</div>
          <div className="flex space-x-2">
            <button
              className={
                props.items.done
                  ? "bg-orange-600 p-2 px-4 text-white rounded-lg"
                  : "bg-green-700 p-2 px-4 text-white rounded-lg"
              }
              onClick={doneHandler}
            >
              {props.items.done ? "undone" : "done"}
            </button>
            <button
              className="bg-blue-600 p-2 px-4 text-white rounded-lg"
              onClick={() => setEdit(true)}
            >
              edit
            </button>
            <button
              className="bg-red-600 p-2 px-4 text-white rounded-lg"
              onClick={deleteHandler}
            >
              delete
            </button>
          </div>
        </div>
      ) : (
        <EditTodos text={props.items.text} edit={editHandler} />
      )}
    </>
  );
};

export default Todo;

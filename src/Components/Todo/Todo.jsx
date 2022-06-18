import React, { useState, useContext,useReducer } from "react";
import EditTodos from "./EditTodos";
import TodosContext from "../../Contexts/todos";

const Todo = (props) => {
  const [edit, setEdit] = useState(false);
  const todosContext = useContext(TodosContext);
  let editHandler = (text) => {
    todosContext.dispatch({type:'edit_todo',payload:{key:props.items.key, text}});
    setEdit(false);
  };
  let deleteHandler = (e) => {
    todosContext.dispatch({ type: "delete_todo", payload: { key: props.items.key } });
  };
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
              onClick={() => todosContext.dispatch({type:'toggle_todo',payload:{key:props.items.key}})}
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

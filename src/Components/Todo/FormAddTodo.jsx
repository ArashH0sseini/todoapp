import React, { useState, useContext } from "react";
import TodosContext from "../../Contexts/todos";

export default function FormAddTodo() {
  const [text, setText] = useState("");
  const todosContext = useContext(TodosContext);
  const formInputHandler = (e) => {
    e.preventDefault();
    todosContext.dispatch({ type: "add_todo", payload: { text } });
    setText("");
  };

  const InputHandler = (e) => setText(e.target.value);
  return (
    <>
      <form onSubmit={(e) => formInputHandler(e)}>
        <div className="flex">
          <input
            className="mx-2 rounded-md p-3 bg-white focus:outline-none"
            placeholder="i want to do..."
            value={text}
            onChange={(e) => InputHandler(e)}
          />
          <button
            type="submit"
            className="bg-red-800 text-white px-5 py-3 rounded-md mx-2"
          >
            add
          </button>
        </div>
      </form>
    </>
  );
}

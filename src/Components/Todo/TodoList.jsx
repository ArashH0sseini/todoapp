import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const [statusDone, setStatusDone] = useState(false);
  let filterTodos = props.todos.filter(item => item.done === statusDone)

  return (
    <>
      <nav>
        <div className="space-x-3 my-4">
          <button
            className="bg-white p-2 rounded-md"
            onClick={() => setStatusDone(false)}
          >
            undone
            <span className="bg-red-700 rounded-lg px-2 text-white text-center mx-1 text-sm ">
              {props.todos.filter((item) => item.done === false).length}
            </span>
          </button>
          <button
            className="bg-white p-2 rounded-md"
            onClick={() => setStatusDone(true)}
          >
            done
            <span className="bg-green-600 rounded-lg px-2 text-white text-center mx-1 text-sm ">
              {props.todos.filter((item) => item.done === true).length}
            </span>
          </button>
        </div>
      </nav>
      {filterTodos.length === 0 ? (
        <p className="text-center bg-white/20 text-white p-4 rounded-md">
          There isnt any todos
        </p>
      ) : (
        filterTodos.map((item) => (
          <Todo
            key={item.key}
            items={item}
            delete={props.delete}
            done={props.done}
            edit={props.edit}
          />
        ))
      )}
    </>
  );
}

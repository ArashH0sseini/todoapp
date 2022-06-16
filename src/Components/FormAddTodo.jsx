import React, { useState } from "react";

export default function FormAddTodo({ add }) {
  const [text, setText] = useState("");

  const formInputHandler = (e) => {
    e.preventDefault();
    add(text)
    setText('')
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
            className="bg-pink-700 text-white px-5 py-3 rounded-md mx-2"
          >
            add
          </button>
        </div>
      </form>
    </>
  );
}

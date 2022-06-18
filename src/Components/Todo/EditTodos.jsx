import React, { useState,useContext } from "react";

const EditTodos = (props) => {
  const [text, setText] = useState(props.text);
  const inputHandler = (e) => setText(e.target.value);
  return (
    <div className="flex bg-white/20 mt-5 rounded-md p-2 justify-between items-center">
      <div className="text-white">
        <input className="text-black rounded-md p-1 focus:outline-none" value={text} onChange={inputHandler} />
      </div>
      <div className="flex space-x-2">
        <button
          className="bg-blue-600 p-2 px-4 text-white rounded-lg"
          onClick={() => props.edit(text)}
        >
          change
        </button>
      </div>
    </div>
  );
};

export default EditTodos;

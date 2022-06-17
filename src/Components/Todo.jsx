import React from "react";

const Todo = (props) => {
  return (
    <div className="flex bg-white/20 mt-5 rounded-md p-2 justify-between items-center">
      <div className="text-white">{props.items.text}</div>
      <div className="flex space-x-2">
        <button
          className={props.items.done?"bg-orange-600 p-2 text-white rounded-lg":"bg-green-700 p-2 text-white rounded-lg"}
          onClick={()=>props.done(props.items.key)}
        >
          {props.items.done ? 'undone' : 'done'}
        </button>
        <button className="bg-blue-600 p-2 text-white rounded-lg">edit</button>
        <button
          className="bg-red-600 p-2 text-white rounded-lg"
          onClick={() => props.delete(props.items.key)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;

import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, setEdit, removeTodo, completedTodo }) => {
  //   };
  //   if (edit.id) {
  //     return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  //   }

  return todos.map((d) => (
    <div
      key={d.id}
      className={`${
        d.isCompleted ? "line-through opacity-40" : ""
      } flex w-3/4 space-x-1 justify-between items-center my-1 mx-auto h-auto text-white bg-red-600 p-4 rounded-md`}
    >
      <div className="break-all" onClick={() => completedTodo(d.id)}>
        <h1 className="text-lg  md:text-xl cursor-pointer">{d.text}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <RiCloseCircleLine
          className="text-2xl md:text-3xl cursor-pointer"
          onClick={() => removeTodo(d.id)}
        />
        <TiEdit
          className="text-2xl md:text-3xl cursor-pointer"
          onClick={() => setEdit({ id: d.id, value: d.text })}
        />
      </div>
    </div>
  ));
};

export default Todo;

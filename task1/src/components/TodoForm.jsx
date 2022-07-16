import React, { useState } from "react";
import { useEffect } from "react";

const TodoForm = ({ onSubmit, edit, submitUpdate }) => {
  const [inputValue, setinputValue] = useState("");
  const [updateValue, setupdateValue] = useState(edit.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.id) {
      submitUpdate(updateValue);
    } else {
      onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: inputValue,
        isCompleted: false,
      });
    }

    setinputValue("");
  };
  useEffect(() => {
    setupdateValue(edit.value);
  }, [edit]);
  return (
    <form
      className="flex flex-col w-full gap-y-3 items-center md:flex-row md:justify-center md:space-y-0 md:space-x-2 md:w-4/5"
      onSubmit={handleSubmit}
    >
      {edit.id ? (
        <>
          <input
            type="text"
            className="bg-gray-50  text-lg md:text-xl border focus:outline-none border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 "
            placeholder="Update your Todo"
            required
            value={updateValue}
            onChange={(e) => setupdateValue(e.target.value)}
          />
          <button
            type="submit"
            className="text-white w-1/2 md:text-xl bg-gradient-to-br md:w-1/4 from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-lg py-2.5 text-center  "
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="bg-gray-50  border md:text-xl focus:outline-none border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 "
            placeholder="Enter todo"
            required
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          />
          <button
            type="submit"
            className="text-white w-1/2 md:text-xl bg-gradient-to-br md:w-1/4 from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-lg py-2.5 text-center  "
          >
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;

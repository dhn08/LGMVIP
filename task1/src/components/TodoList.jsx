import React, { useState } from "react";
import { useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todo, settodo] = useState([]);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  useEffect(() => {
    settodo(JSON.parse(localStorage.getItem("todos")));
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const addTodo = (data) => {
    const newTodo = [data, ...todo];
    settodo(newTodo);
  };
  const removeTodo = (id) => {
    const temptodo = todo;
    settodo(temptodo.filter((t) => t.id !== id));
  };

  const updateTodo = (id, value) => {
    const temptodolist = todo;
    temptodolist.map((todo) => {
      if (todo.id === id) {
        todo.text = value;
      }
      return todo;
    });

    settodo(temptodolist);
  };
  const completedTodo = (id) => {
    let updatedTodos = todo.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    settodo(updatedTodos);
  };
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  return (
    <>
      <h1 className="text-3xl font-bold">My Todo List</h1>
      <TodoForm onSubmit={addTodo} submitUpdate={submitUpdate} edit={edit} />
      <Todo
        todos={todo}
        updateTodo={updateTodo}
        setEdit={setEdit}
        edit={edit}
        removeTodo={removeTodo}
        completedTodo={completedTodo}
      />
    </>
  );
};

export default TodoList;

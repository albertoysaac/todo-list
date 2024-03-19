import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const agregarTarea = (e) => {
    if (e.key === "Enter" && inputValue != null && inputValue.valueOf() != "") {
      setTodos(todos.concat(inputValue)); // o tambien setTodos([...todos, inputValue]); ambos crean un nuevo array con los valores anteriores y el nuevo valor
      setInputValue("");
    }
  };

  const handleRemoveClick = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container d-flex flex-column align-items-center">
          <h1 className="title">ToDos</h1>
          <div className="card">
            <input
              type="text"
              value={inputValue}
              onChange={handleInput}
              onKeyDown={agregarTarea}
            />
            <ul className="list-group list-group-flush">
              {todos.map((todo, index) => (
                <li
                  className="list-group-item d-flex justify-content-between"
                  key={index}
                >
                  {todo}
                  <button
                    type="button"
                    class="btn-close"
                    onClick={() => handleRemoveClick(index)}
                    aria-label="Close"
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

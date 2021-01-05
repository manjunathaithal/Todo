import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [value, setValue] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodo(value.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilterTodo(value.filter((item) => item.completed === false));
        break;
      default:
        setFilterTodo([...value]);
        break;
    }
  };
  const saveToLocalDb = () => {
    localStorage.setItem("Todos", JSON.stringify([...value]));
  };
  const getLocalDb = () => {
    if (localStorage.getItem("Todos") !== null) {
      let localValue = JSON.parse(localStorage.getItem("Todos"));
      setValue([...localValue]);
    } else {
      setValue([]);
      localStorage.setItem("Todos", JSON.stringify([]));
    }
  };
  useEffect(() => {
    getLocalDb();
  }, []);
  useEffect(() => {
    filterHandler();
    saveToLocalDb();
  }, [status, value]);

  return (
    <div className="App">
      <header>Todo-List</header>

      <Form
        setInputText={setInputText}
        inputText={inputText}
        value={value}
        setValue={setValue}
        setStatus={setStatus}
      />
      <TodoList value={value} setValue={setValue} filterTodo={filterTodo} />
    </div>
  );
}

export default App;

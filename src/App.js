import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [value, setValue] = useState([]);
  return (
    <div className="App">
      <header>Todo-List</header>

      <Form
        setInputText={setInputText}
        inputText={inputText}
        value={value}
        setValue={setValue}
      />
      <TodoList value={value} setValue={setValue} />
    </div>
  );
}

export default App;

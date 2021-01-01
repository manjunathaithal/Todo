import React from "react";

const form = (props) => {
  const onTextHandler = (e) => {
    props.setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setValue([
      ...props.value,
      {
        text: props.inputText,
        completed: false,
        id: parseInt(Math.random() * 1000),
      },
    ]);
    props.setInputText("");
  };
  return (
    <div>
      <form>
        <input
          onChange={onTextHandler}
          type="text"
          className="todo-input"
          value={props.inputText}
        />
        <button className="todo-button" type="submit" onClick={submitHandler}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};
export default form;

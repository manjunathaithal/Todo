import React from "react";

const todo = ({ text, setValue, id, value, item }) => {
  const deleteHandler = () => {
    const finalValue = value.filter((value) => value.id !== id);
    setValue([...finalValue]);
  };
  const completeHandler = () => {
    const finalValue = value.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setValue([...finalValue]);
  };
  return (
    <div className="todo">
      <li className={`todo-item ${item.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default todo;

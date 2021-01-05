import React from "react";
import Todo from "./Todo";

const TodoList = ({ value, setValue, filterTodo }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filterTodo.map((item, idx) => {
            // console.log(itet);
            return (
              <Todo
                key={idx}
                text={item.text}
                id={item.id}
                value={value}
                item={item}
                setValue={setValue}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

import React from "react";

import { items } from "../staticData/itemsData";

function ToDoList() {
  return (
    <div className="to-do-list-control">
      {items.map((item, index) => {
        return (
          <div className="todo-list-item">
            <p>{item.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ToDoList;
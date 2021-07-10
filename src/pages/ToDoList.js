import React from "react";

import { items } from "../staticData/itemsData";

function ToDoList() {
  return (
    <div className="to-do-list-control">
      {items.map((item, index) => {
        return (
          <div className="todo-list-item">
            <span className="glyphicon glyphicon-ok icon" aria-hidden="true"></span>
            {item.title}
          </div>
        )
      })}
    </div>
  )
}

export default ToDoList;
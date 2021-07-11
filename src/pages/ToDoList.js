import React from "react";

import { items } from "../staticData/itemsData";

function ToDoList() {
  const markAsDone = (event, selectedItem) => {
    if (event.target.tagName === 'P') {
      event.target.classList.toggle('markedDone');
    }

    items.map((item) => {
      if (item.id === selectedItem.id) {
        item.done = event.target.classList.contains('markedDone');
      }
    })
  }

  return (
    <div className="to-do-list-control">
      {items.map((item, index) => {
        return (
          <div key={item.id} className="todo-list-item" onClick={(e) => markAsDone(e, item)}>
            <p style={{ "textDecoration": (item.done) ? "markedDone" : '' }}>{item.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ToDoList;
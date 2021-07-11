import React from "react";

import { items } from "../staticData/itemsData";

function ToDoList(props) {
  const todoItems = props.filteredList.length > 0 ? props.filteredList : items;

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
      {todoItems.map((item, index) => {
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
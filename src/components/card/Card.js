import React from "react";
import './Card.css'

function Card(props) {
  const { title, imageUrl, itemDesc } = props.item;

  return (
    <div className="card">
      <img
        src={imageUrl}
        alt="Avatar"
        style={{ "width": "100%" }} />
      <div className="container">
        <h4><b>{title}</b></h4>
        <p>{itemDesc}</p>
      </div>
    </div>
  )
}

export default Card;
import { props } from "bluebird";
import React from "react";
import "./Tooltip.css";

function Tooltip(props) {
  return (
    <div class="tooltip">
      {props.children}
      <span class="tooltiptext">{props.text}</span>
    </div>
  )
}

export default Tooltip;
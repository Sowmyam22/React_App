import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

function MainHeader(props) {
  return (
    <div className={classes.header}>
      <h2> Logo </h2>

      {props.isLoggedIn &&
        <nav>
          <NavLink activeClassName={classes.active} to="/profile"> Profile </NavLink>
          <NavLink to="/" onClick={props.logoutHandler}> Logout </NavLink>
        </nav>
      }
    </div >
  )
}

export default MainHeader;
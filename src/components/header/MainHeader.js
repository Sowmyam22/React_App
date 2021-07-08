import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";
import MenuIcon from "../../svg/Menu";
import SidePanel from "../sidePanel/SidePanel";

function MainHeader(props) {
  const [openSidepanel, setOpenSidepanel] = useState(false);

  const handleSidePanel = () => {
    setOpenSidepanel(true);
  }

  const handleClosePanel = () => {
    setOpenSidepanel(false);
  }

  return (
    <div className={classes.header}>
      {openSidepanel && (
        <SidePanel closeSidepanel={handleClosePanel}>
          {props.isLoggedIn &&
            <nav>
              <NavLink activeClassName={classes.active} to="/home"> Home </NavLink>
              <NavLink activeClassName={classes.active} to="/profile"> Profile </NavLink>
              <NavLink to="/" onClick={props.logoutHandler}> Logout </NavLink>
            </nav>
          }
        </SidePanel>
      )}

      <MenuIcon onClick={handleSidePanel} />
    </div >
  )
}

export default MainHeader;
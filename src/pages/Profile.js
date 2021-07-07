import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import Modal from "../components/modal/Modal";
import SettingsIcon from "../svg/settings";

function Profile(props) {
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const profileHandler = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const profileEditHandler = () => {
    history.push('/profile/settings');
  }

  return (
    <Fragment>
      <div style={{ "textAlign": "center", "padding": "0 3rem" }}>
        <h1>Take a look at your profile...!</h1>
        <hr />
      </div>
      <div className="cards">
        <div className="card" style={{ "position": "relative" }}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
            alt=""
          />
          <div
            style={{ "position": "absolute", "top": "10px", "right": "12px" }}
            onClick={profileEditHandler}
          >
            <SettingsIcon />
          </div>
          <h4>Sowmya</h4>
          <small>Programmer Analyst</small>
          <button onClick={profileHandler}>View More</button>
        </div>
      </div>

      {showModal && (
        <Modal closeModal={handleCloseModal}>
          <div>
            <img
              width="70"
              height="70"
              src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
              alt=""
            />
            <h3>Sowmya</h3>
            <p>Programmer Analyst</p>
            <p>msowmyadeveloper@gmail.com</p>
            <p>DOB: 22 Nov 1993, Age: 27</p>
            <p>Hi! This is Sowmya. I have joined CTS on May 24th 2021. I am very happy to be a part of CTS Family.</p>

            <button className="edit-button" onClick={profileEditHandler}>Edit</button>
          </div>
        </Modal>
      )}
    </Fragment>
  )
}

export default Profile;
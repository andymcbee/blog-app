import "./settingsPage.css";
import userHeadshot from "../images/andrew_headshot.jpg";

import React from "react";
import SideBar from "../components/SideBar";

export default function SettingsPage() {
  return (
    <div className="Settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={userHeadshot} alt="" className="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Andrew" />
          <label>Email</label>
          <input type="email" placeholder="andrew@email.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}

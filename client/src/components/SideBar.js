import React from "react";
import "./sidebar.css";
import userHeadshot from "../images/andrew_headshot.jpg";

export default function SideBar() {
  return (
    <div className="Sidebar">
      <div className="sidebarTitle">About Me</div>
      <img className="sidebarImg" src={userHeadshot} alt="User Headshot" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="sidebarTitle">Categories</div>
      <ul className="sidebarList">
        <li className="sidebarListItem">Item</li>
        <li className="sidebarListItem">Item</li>
        <li className="sidebarListItem">Item</li>
        <li className="sidebarListItem">Item</li>
        <li className="sidebarListItem">Item</li>
      </ul>
      <div className="sidebarTitle">Follow Up</div>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-youtube"></i>
      </div>
    </div>
  );
}

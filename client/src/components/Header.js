import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="Headshot of User"
      />
    </div>
  );
}

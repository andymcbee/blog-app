import React, { useEffect, useState } from "react";
import "./sidebar.css";
import userHeadshot from "../images/andrew_headshot.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
      // console.log(res);
    };
    fetchCategories();
  }, []);

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
        {categories.map((c) => {
          return (
            <Link to={`/cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          );
        })}
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

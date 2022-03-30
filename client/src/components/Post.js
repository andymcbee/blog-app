import React from "react";
import userHeadshot from "../images/andrew_headshot.jpg";
import "./post.css";

export default function Post() {
  return (
    <div className="Post">
      <img className="postImg" src={userHeadshot} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem Ipsum dolor</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Loreum,, ipsum post desc text here. Loreum,, ipsum post desc text here.
        Loreum,, ipsum post desc text here. Loreum,, ipsum post desc text here.
        Loreum,, ipsum post desc text here. Loreum,, ipsum post desc text here.
        Loreum,, ipsum post desc text here.{" "}
      </p>
    </div>
  );
}

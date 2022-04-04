import React from "react";
import SideBar from "../components/SideBar";
import "./singlePostPage.css";
import SinglePost from "../components/SinglePost";
import CommentsContainer from "../components/CommentsContainer";

export default function SinglePostPage() {
  return (
    <div className="SinglePostPage">
      <SinglePost />
      <SideBar />
    </div>
  );
}

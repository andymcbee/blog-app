import React from "react";
import "./posts.css";
import Post from "./Post";

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <div className="Posts">
      {posts.map((p) => {
        return <Post post={p} />;
      })}
    </div>
  );
}

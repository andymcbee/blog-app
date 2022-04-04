import React, { useState } from "react";
import "./commentNew.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function CommentNew() {
  const [authorName, setAuthorName] = useState("");
  const [comment, setComment] = useState("");

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const handleSubmitComment = async () => {
    console.log("Test");

    const newComment = {
      postId: path,
      comment: comment,
      authorName: authorName,
    };

    try {
      const res = await axios.post("/comments/create", newComment);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="CommentNew">
      <h3 className="newCommentTitle">Leave us a comment!</h3>
      <div className="newCommentWrapper">
        <input
          type="text"
          value={authorName}
          className="authorNameInput"
          placeholder="Author name"
          autoFocus
          onChange={(e) => setAuthorName(e.target.value)}
        />

        <textarea
          value={comment}
          placeholder="Comment"
          className="newCommentInput"
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <div className="newCommentButtonContainer">
        <button className="postCommentButton" onClick={handleSubmitComment}>
          Submit
        </button>
      </div>
    </div>
  );
}

import React from "react";
import "./commentSingle.css";

export default function CommentSingle({ comment }) {
  console.log(comment);

  const deleteComment = () => {
    console.log("Delete comment!");
  };
  return (
    <div className="CommentSingle">
      <div className="commentContainer">
        <div className="commentTopRowContainer">
          <h3 className="commentAuthor">{`${comment.authorName} says...`}</h3>
          <i
            className="singlePostIcon fas fa-edit"
            onClick={() => deleteComment(true)}
          ></i>
        </div>

        <p>{`"${comment.comment}"`}</p>
      </div>
    </div>
  );
}

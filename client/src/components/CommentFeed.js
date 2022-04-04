import React, { useEffect, useState } from "react";
import CommentSingle from "./CommentSingle";
import { useLocation } from "react-router";
import axios from "axios";

export default function CommentFeed() {
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`/comments/${path}`);
      console.log(res.data);
      setComments(res.data);
    };
    fetchComments();
  }, [path]);
  return (
    <div>
      <div>All comments</div>
      {comments.map((comment) => {
        return <CommentSingle comment={comment} />;
      })}
    </div>
  );
}

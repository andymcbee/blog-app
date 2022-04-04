import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context/Context";
import CommentsContainer from "./CommentsContainer";
import CommentFeed from "./CommentFeed";

export default function SinglePost() {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const location = useLocation();
  //  console.log(location);
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState("");
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/findOne/${path}`);
      setPost(res.data);
      //  console.log(res);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchPost();
  }, [path]);

  let handleDelete = async () => {
    try {
      await axios.delete(`/posts/delete/${path}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  let handleUpdatePostChanges = async () => {
    try {
      await axios.put(`/posts/update/${path}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="SinglePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fas fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <strong>
              <Link to={`/?user=${post.username}`} className="link">
                {post.username}
              </Link>
            </strong>
          </span>
          <span className="singlePostDate">
            Date: <strong> {new Date(post.createdAt).toDateString()}</strong>
          </span>
        </div>
        {updateMode ? (
          <textarea
            value={desc}
            className="singlePostDescInput"
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
      </div>
      {updateMode && (
        <div className="editButtonContainer">
          <button
            className="postEditButton postEditCancel"
            onClick={() => setUpdateMode(false)}
          >
            Cancel
          </button>
          <button
            className="postEditButton postEditSubmit"
            onClick={handleUpdatePostChanges}
          >
            Submit
          </button>
        </div>
      )}
      <div className="commentsContainer">
        <CommentsContainer />
        <CommentFeed />
      </div>
    </div>
  );
}

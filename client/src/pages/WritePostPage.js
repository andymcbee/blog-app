import React from "react";
import "./writePostPage.css";
import userHeadshot from "../images/andrew_headshot.jpg";

export default function writePostPage() {
  return (
    <div className="writePostPage">
      <img src={userHeadshot} alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlForm="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            id="Title"
            className="writeInput"
            autoFocus={true}
            placeholder="Title"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

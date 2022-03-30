import React from "react";
import "./writePostPage.css";

export default function writePostPage() {
  return (
    <div>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlForm="fileInput">
            <i class="fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            id="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
      </form>
    </div>
  );
}

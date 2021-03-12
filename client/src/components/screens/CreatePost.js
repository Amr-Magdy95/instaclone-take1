import React from "react";

const CreatePost = () => {
  return (
    <div
      className="card input-field"
      style={{
        margin: "20px auto",
        maxWidth: "500px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <input className="" placeholder="Title" type="text" />
      <input className="" placeholder="Body" type="text" />
      <div className="file-field input-field">

        <div className="btn">
          <span>File</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
          className="btn waves-effect waves-light #455a64 blue-grey darken-1"
          type="submit"
          name="action"
        >
          Publish
        </button>
    </div>
  );
};

export default CreatePost;

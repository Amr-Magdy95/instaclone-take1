import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (url) {
      fetch("http://localhost:5000/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({
              html: data.error,
              classes: "rounded #d50000 red accent-4",
            });
          } else {
            console.log(data);
            M.toast({
              html: data.message,
              classes: "rounded #8bc34a light-green",
            });
            history.push("/");
          }
        });
    }
  }, [url]);

  const postDetails = () => {
    const post = new FormData();

    post.append("cloud_name", "simplernamethanoriginal");
    post.append("file", image);
    post.append("upload_preset", "insta-clone");
    fetch(
      `	https://api.cloudinary.com/v1_1/simplernamethanoriginal/image/upload`,
      {
        method: "post",
        body: post,
      }
    )
      .then((res) => res.json())
      .then(async (data) => {
        await setUrl(JSON.stringify(data.url));
      })
      .catch((err) => console.log(err));
    console.log(url);
  };

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
      <input
        className=""
        placeholder="Title"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        className=""
        placeholder="Body"
        type="text"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <div className="file-field input-field">
        <div className="btn">
          <span>File</span>
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn waves-effect waves-light #455a64 blue-grey darken-1"
        onClick={() => {
          postDetails();
        }}
        type="submit"
        name="action"
      >
        Publish
      </button>
    </div>
  );
};

export default CreatePost;

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Signin = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const postData = () => {
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        mode: "cors",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error){
          M.toast({
            html: data.error,
            classes: "rounded #d50000 red accent-4",
          });
        } else{
          console.log(data);
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user) );
          M.toast({
            html: "successfully signed in",
            classes: "rounded #8bc34a light-green",
          });
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="my-card">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="btn waves-effect waves-light #455a64 blue-grey darken-2"
          type="submit"
          name="action"
          onClick={() => {
            postData();
          }}
        >
          SIGNIN
        </button>
        <h5>
          <Link to="/signup">Don't have an account...Signup now?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";


const Signup = () => {
  // could add client-side validation here 
  // google regex for email, regex for password 
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const postData = () => {
    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "mode": "cors"
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.error){
          M.toast({html: data.error, classes: "rounded #d50000 red accent-4"});
        }
        else if(data.message){
          M.toast({html: data.message, classes: "rounded #8bc34a light-green"});
          history.push('/signin');
        }
        });
  };
  return (
    <div className="my-card">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light #455a64 blue-grey darken-2"
          type="submit"
          name="action"
          onClick={()=>postData()}
        >
          SIGNUP
        </button>
        <h5>
          <Link to="/signin">Already have an account?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;

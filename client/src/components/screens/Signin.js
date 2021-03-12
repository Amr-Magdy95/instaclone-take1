import React from "react";
import {Link} from "react-router-dom";

const Signin = () => {
  return (
    <div className="my-card">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input  type="text" placeholder="email" />
        <input  type="text" placeholder="password" />
        <button
          className="btn waves-effect waves-light #455a64 blue-grey darken-2"
          type="submit"
          name="action"
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

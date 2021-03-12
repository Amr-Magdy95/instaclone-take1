import React from "react";

const Profile = () => {
  return (
    <div style={{maxWidth:"90%", margin: "auto"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            src="https://images.unsplash.com/flagged/photo-1557786458-77474e6ff1bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt=""
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
          />
        </div>
        <div>
          <h4 style={{ width: "105%", textAlign: "left" }}>John Doe</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "105%",
            }}
          >
            <h6>40 Posts</h6>
            <h6>40 Followers</h6>
            <h6>40 Follwing</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        
        <img
          src="https://images.unsplash.com/flagged/photo-1557786458-77474e6ff1bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          className="item"
          alt=""
        />
        <img
          src="https://images.unsplash.com/flagged/photo-1557786458-77474e6ff1bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          className="item"
          alt=""
        />
        <img
          src="https://images.unsplash.com/flagged/photo-1557786458-77474e6ff1bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          className="item"
          alt=""
        />
        <img
          src="https://images.unsplash.com/flagged/photo-1557786458-77474e6ff1bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          className="item"
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;

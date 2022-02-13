import React, { useState } from "react";
import "../Styles/home-style.scss";
import useAuth from "../firebase";

function Home() {
  let [status, setStatus] = useState();
  let { google } = useAuth(setStatus);
  return (
    <div className="home">
      <div className="login-div">
        <div className="login">
          <button onClick={async () => google()}>Sign In With Google</button>
          <p>{status}</p>
        </div>
      </div>
      <div className="home-text">
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          natus sequi a.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem fugit
          dolorem error vero repellat, distinctio laudantium a voluptatem quod
          necessitatibus eligendi.
        </p>
      </div>
    </div>
  );
}
export default Home;

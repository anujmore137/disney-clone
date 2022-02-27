import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login_container">
      <div className="login_content">
        <img
          src="https://user-images.githubusercontent.com/53031645/155871996-84dbeda8-4efa-4c0c-a694-86c4a6e24fb7.svg"
          alt="imageOne"
          className="imgOne"
        />
        <div className="signUpContainer">
          <button className="signUp">
            <h1>GET ALL THERE</h1>
          </button>
        </div>

        <div className="description">
          <p>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
        </div>
        <img
          src="https://user-images.githubusercontent.com/53031645/155872948-a5aea2ba-d553-48e2-a926-6b68c1f81e96.png"
          alt="imageOne"
          className="imgTwo"
        />
      </div>
    </div>
  );
};

export default Login;

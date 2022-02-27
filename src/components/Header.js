import React from "react";
import "../styles/Header.css";
import { auth, signInWithGoogle } from "../datalayer/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectedUserName,
  selectedUserEmail,
  selectedUserPhoto,
  setUserLoginDetails,
} from "../datalayer/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectedUserName);
  const userEmail = useSelector(selectedUserEmail);
  const userPhoto = useSelector(selectedUserPhoto);
  console.log("asasa",userName)

  const loginInWithGoogle = (event) => {
    event.preventDefault();

    signInWithGoogle()
      .then((res) => {
        console.log("res", res);

        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        
      })
      
    );
  };

  return (
    <nav className="headerContainer">
      <div className="logoContainer">
        <img
          src="https://user-images.githubusercontent.com/53031645/155873531-ac5ca3ba-6f01-49c1-a54f-f41ea97fbe3f.svg"
          alt=""
          className="logo"
        />
      </div>

      {!userName ? (
        <div className="buttonContainer">
          <button className="loginBtn" onClick={loginInWithGoogle}>
            LOGIN
          </button>
        </div>
      ) : (
        <>
        
        <div className="menu">
          <a href="">
            <img
              src="https://user-images.githubusercontent.com/53031645/155874050-e9a1cd61-af2e-47f3-9d4e-990edc8ec1ea.svg"
              alt=""
            />
            <span>HOME</span>
          </a>
          <a href="">
            <img
              src="https://user-images.githubusercontent.com/53031645/155874054-abb7298b-ddfb-4520-963f-e72c78e68d33.svg"
              alt=""
            />
            <span>SEARCH</span>
          </a>
          <a href="">
            <img
              src="https://user-images.githubusercontent.com/53031645/155874055-dcfdf678-67df-4ac3-ac78-0090d5dcc715.svg"
              alt=""
            />
            <span>WATCHLIST</span>
          </a>
          <a href="">
            <img
              src="https://user-images.githubusercontent.com/53031645/155874061-292cbd38-28ea-4f51-9142-ccd61dbdc680.svg"
              alt=""
            />
            <span>ORIGINALS</span>
          </a>
          <a href="">
            <img
              src="https://user-images.githubusercontent.com/53031645/155874068-f4bd031b-3a49-4017-900c-5cd41a56a898.svg"
              alt=""
            />
            <span>MOVIES</span>
          </a>
          
        </div>
        <div className="profileImg">
          <img src={userPhoto} alt="profileImg" />
        </div>
        </>
      )}
    </nav>
  );
};

export default Header;

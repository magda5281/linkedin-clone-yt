import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import LinkedinLogo from "./images/linkedin-logo.png";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice.js";
import Alert from "./Alert.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [nameAlert, setNameAlert] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  const register = () => {
    if (!name) {
      setNameAlert(true);
    } else {
      setNameAlert(false);
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((err) => {
        console.log(err.code);
        setError(err.code);
      });
  };
  return (
    <div className="login">
      <img src={LinkedinLogo} alt="linkedin logo" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name(required if registering)"
          type="text"
          autoComplete="true"
        />
        {nameAlert && <Alert alert="Please enter a full name " />}
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile picture Url (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
          autoComplete="true"
        />
        {error === "auth/invalid-email" && (
          <Alert alert="Please provide valid email" />
        )}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          autoComplete="true"
        />
        {error === "auth/internal-error" && (
          <Alert alert="Password is required" />
        )}
        <button onClick={loginToApp} type="submit">
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice.js";
import { auth } from "./firebase";
import Feed from "./Feed.js";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Login from "./Login.js";
import "./App.css";
import Widgets from "./Widgets.js";
import Footer from "./Footer.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // listen for changes in user state
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    // return () => {
    //   cleanup;
    // };
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <div className="app__medium">
            <Sidebar />
            <Feed />
          </div>
          <Widgets />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;

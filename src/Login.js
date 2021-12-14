import React from "react";
import "./Login.css";
import Troll from "./assets/icons/troll.png";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch({ type: actionTypes.SET_USER, user });
      })
      .catch((error) => alert(error.message));
    // setUser("john");
  };
  return (
    <div className="login">
      <div className="login__form">
        <div className="login_logo">
          <img src={Troll} alt="logo" />
          <h1>Troll</h1>
          <Button onClick={signIn}>Sign In</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;

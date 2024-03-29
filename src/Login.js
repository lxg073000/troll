import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [dispatch] = useStateValue();
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
      <button onClick={signIn}>Google LogIn</button>
    </div>
  );
}

export default Login;

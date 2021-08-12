import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
          alt="gmail"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;

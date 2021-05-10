import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginForm } from "./Components/loginForm";

const Login = () => {
  const { isLoggingIn } = useSelector((state) => state.authentication);

  return localStorage.getItem("token") ? (
    <Redirect push to="/" />
  ) : isLoggingIn ? (
    <div>...isLoading</div>
  ) : (
    <LoginForm />
  );
};

export { Login };

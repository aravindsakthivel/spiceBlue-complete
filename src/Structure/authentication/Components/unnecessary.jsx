import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { authActions } from "./State/action";

const Login = () => {
  const { isLoggingIn } = useSelector((state) => state.authentication);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = loginData;
    dispatch(authActions.userLoginProcess(data));
  };
  return localStorage.getItem("token") ? (
    <Redirect push to="/" />
  ) : isLoggingIn ? (
    <div>...isLoading</div>
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={loginData.email}
          onChange={handleInput}
          name="email"
          placeholder="email"
        />
        <input
          type="password"
          value={loginData.password}
          onChange={handleInput}
          name="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export { Login };

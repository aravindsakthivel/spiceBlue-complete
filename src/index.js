import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
// import "./index.css";
import { App } from "./Structure/Routes/App";

const rootElement = document.getElementById("root");
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

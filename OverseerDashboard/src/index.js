import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";

//Change to this as ReactDom.render is no longer supported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

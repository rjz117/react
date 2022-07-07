import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/user-context";
import BlogContextProvider from "./context/blog-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <BlogContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </BlogContextProvider>
  </UserContextProvider>
);

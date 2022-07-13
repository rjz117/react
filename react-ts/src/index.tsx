import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import UserCotextProvider from "./context/user-context";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./i18n/config";
import interceptor from "./services/interceptor";
import check from './services/check'
import PresistsLogin from "../src/components/auth/PresistsLogin";

interceptor();


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserCotextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
  </UserCotextProvider>
);

reportWebVitals();
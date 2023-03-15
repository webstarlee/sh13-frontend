import React from "react";
import axios from "axios";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "./store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "styles/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import './i18n';

window.axios = axios;
const token = window.sessionStorage.getItem("access_token");
window.axios.defaults.headers.common['x-access-token'] = token;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

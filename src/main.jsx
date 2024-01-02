import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { SpeedInsights } from "@vercel/speed-insights/next";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpeedInsights />
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./view/components/App";

import "./view/assets/styles/main.less";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
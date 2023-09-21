import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { MainPage } from "../MainPage/MainPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" element={<MainPage />}></Route>
      </div>
    </BrowserRouter>
  );
};

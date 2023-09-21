import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainPage } from "../MainPage/MainPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

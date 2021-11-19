import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./UI/pages/loginPage/LoginPage";
import { store } from "./services/store";

import "./App.css";
import Console from "./UI/pages/consolePage";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/console" element={<Console />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

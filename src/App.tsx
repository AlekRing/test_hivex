import React from "react";
// import {Provider} from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./UI/components/LoginPage";
import { store } from "./services/store";

import "./App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
